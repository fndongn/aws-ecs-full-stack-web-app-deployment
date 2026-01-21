pipeline {
    agent any

    environment {
        // Region
        AWS_REGION = 'us-east-1'

        // ECR repository URIs
        FRONTEND_REPO = '396044748166.dkr.ecr.us-east-1.amazonaws.com/deployment-ecs-frontend:latest'
        BACKEND_REPO  = '396044748166.dkr.ecr.us-east-1.amazonaws.com/deployment-ecs-backend:latest'
    }

    stages {
        stage('Checkout code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker images') {
            steps {
                script {
                    sh 'docker build -t frontend:latest ./frontend'
                    sh 'docker build -t backend:latest ./backend'
                }
            }
        }

        stage('Authenticate to ECR') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AWS-PAT']]) {
                    script {
                        sh '''
                            aws --version
                            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $FRONTEND_REPO
                            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $BACKEND_REPO
                        '''
                    }
                }
            }
        }

        stage('Tag and Push images to ECR') {
            steps {
                script {
                    sh '''
                        docker tag frontend:latest $FRONTEND_REPO:latest
                        docker tag backend:latest $BACKEND_REPO:latest

                        docker push $FRONTEND_REPO:latest
                        docker push $BACKEND_REPO:latest
                    '''
                }
            }
        }

        stage('Update ECS services') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'AWS-PAT']]) {
                    script {
                        sh '''
                            aws ecs update-service --cluster deployment-ecs-cluster --service deployment-ecs-frontend-service --force-new-deployment --region $AWS_REGION
                            aws ecs update-service --cluster deployment-ecs-cluster --service deployment-ecs-backend-service --force-new-deployment --region $AWS_REGION
                        '''
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
