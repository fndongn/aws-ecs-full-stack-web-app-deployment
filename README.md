# 1. Project Overview
This project is a containerized full-stack web application deployed on AWS ECS using a frontend–backend architecture behind an Application Load Balancer (ALB). The system is fully automated with Jenkins CI/CD, enabling continuous builds, image publishing to Amazon ECR, and zero-downtime deployments to ECS.

# 2. Architecture Diagram
<img width="2110" height="1042" alt="Architectur Diagram" src="https://github.com/user-attachments/assets/f62d22c6-76fe-4b20-a8fe-0ff1e460d0d4" />

# 3. What It Does
  * Serves a React frontend to users via an AWS Application Load Balancer
  * Routes API requests to a Node.js backend service running on ECS
  * Uses path-based routing to cleanly separate frontend and backend traffic
  * Automatically builds, tags, and deploys Docker images using Jenkins pipelines

# 4. How It Works
  * Users access the application through a single public web address, managed by AWS.
  * Behind the scenes, incoming requests are automatically directed to the correct part of the system:
    - The frontend delivers the user interface and website experience
    - The backend processes data requests and returns results to the frontend
  * Both parts of the application communicate through the same entry point, which keeps the system organized, reliable, and easy to manage.
  * AWS handles the operation of the application in the background, ensuring services stay online, healthy, and ready to handle increased traffic when needed.
   
# 5. CI/CD Workflow (Jenkins)
 * Code is pushed to GitHub
 * Jenkins pipeline is triggered automatically
 * Jenkins:
    - Builds frontend and backend Docker images
    - Tags images and pushes them to Amazon ECR
 * Jenkins forces a new ECS deployment
 * ECS performs a rolling update, replacing old tasks with new ones without downtime

# 6. Tech stack
 * Terraform provisions AWS infrastructure
 * React – Frontend
 * Node.js / Express – Backend API
 * Docker – Containerization
 * AWS ECS & ECR – Container orchestration and image registry
 * Application Load Balancer – Path-based routing
 * Jenkins – CI/CD automation

# 7. Problem It Solves
  # This project solves the challenge of reliably deploying and scaling a modern web application by:
   * Eliminating hard-coded service dependencies through ALB routing
   * Preventing frontend/backend communication issues in containerized environments
   * Automating deployments to avoid manual Docker builds and ECS updates
   * Providing a scalable, production-ready architecture using AWS best practices
     


