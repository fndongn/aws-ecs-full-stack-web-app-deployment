# 1. Project Overview

This project is a containerized full-stack web application deployed on AWS ECS using a frontend–backend architecture behind an Application Load Balancer (ALB). The system is fully automated with Jenkins CI/CD, enabling continuous builds, image publishing to Amazon ECR, and zero-downtime deployments to ECS.

# 2. What It Does
  * Serves a React frontend to users via an AWS Application Load Balancer
  * Routes API requests (/api/*) to a Node.js backend service running on ECS
  * Uses path-based routing to cleanly separate frontend and backend traffic
  * Automatically builds, tags, and deploys Docker images using Jenkins pipelines

# 3. Problem It Solves
  # This project solves the challenge of reliably deploying and scaling a modern web application by:
      * Eliminating hard-coded service dependencies through ALB routing
      * Preventing frontend/backend communication issues in containerized environments
      * Automating deployments to avoid manual Docker builds and ECS updates
      * Providing a scalable, production-ready architecture using AWS best practices
      
