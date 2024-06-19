# DevOps Assessment

This repository contains the DevOps assessment project. It includes configuration and deployment scripts for a Node.js application on Azure Kubernetes Service (AKS) and setup for Continuous Integration/Continuous Deployment (CI/CD) using GitHub Actions.

## Repository Link
**[DevOps Assessment Repository](https://github.com/rana-093/DevOps-Assessment)**

## Prerequisites
Ensure you have the following installed:
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Docker](https://docs.docker.com/get-docker/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Azure CLI Commands

### Login to Azure
```bash
az login
```

### Login to Azure Container Registry
```bash
az acr login --name {chosen_name}
```


### Set Azure Subscription
```bash
az account set --subscription {subscription_id}
```


### Create Azure Kubernetes Service (AKS) Cluster
```bash
az aks create --resource-group k8s --name {cluster_name} --node-count 3 --enable-addons monitoring --generate-ssh-keys
```

### Get AKS Cluster Credentials
```bash
az aks get-credentials --resource-group k8s --name {cluster_name}
```

### Create Azure Container Registry (ACR)
```bash
az acr create --resource-group k8s --name {chosen_name} --sku Basic --admin-enabled true
az acr create --name {repo_name} -g k8s --sku basic
```

### Build and Push Docker Image
```bash
docker build . -t {chosen_name}.azurecr.io/{repo_name}:latest
docker tag {repo_name} {chosen_name}.azurecr.io/{repo_name}:latest
docker push {chosen_name}.azurecr.io/{repo_name}:latest
```

# Deploy to AKS

### Apply Kubernetes Manifests
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f hpa.yaml
kubectl apply -f ingress.yaml
```


# Continuous Integration and Deployment (CI/CD) with GitHub Actions
This repository is configured with GitHub Actions for automating CI/CD workflows. The workflow includes steps for building Docker images, pushing to Azure Container Registry, and deploying to AKS.

# HTTPS Configuration
The application supports HTTPS using a self-signed certificate via Let's Encrypt. Ensure to map **rana093.seliseassessment.com to your local machine's /etc/hosts file for testing.**

# API Documentation
- **HTTP API Endpoint**: http://rana093.seliseassessment.com/api
- **Image Redirect Endpoint**: https://rana093.seliseassessment.com/pub/1666285500800.jpeg/ (Redirects to https://blobformasud.blob.core.windows.net/filestorage/1666285500800.jpeg)


# Repository Structure
- `deployment.yaml`: Kubernetes Deployment configuration
- `service.yaml`: Kubernetes Service configuration
- `hpa.yaml`: Kubernetes Horizontal Pod Autoscaler configuration
- `ingress.yaml`: Kubernetes Ingress configuration
- `.github/workflows/ci-cd.yaml`: GitHub Actions workflow for CI/CD

# Local Development
To run the application locally:

- Clone the repository:

```bash
Copy code
git clone https://github.com/rana-093/DevOps-Assessment.git
cd DevOps-Assessment
Follow the setup instructions in the application's README to set up dependencies and run locally.
```