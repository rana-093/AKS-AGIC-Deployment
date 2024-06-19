# DevOps Assessment

This repository contains the DevOps assessment project. It includes configuration and deployment scripts for a Node.js application on Azure Kubernetes Service (AKS) and setup for Continuous Integration/Continuous Deployment (CI/CD) using GitHub Actions.

## Repository Link
[DevOps Assessment Repository](https://github.com/rana-093/DevOps-Assessment)

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
az acr login --name seliseassesment3
```


### Set Azure Subscription
```bash
az account set --subscription {subscription_id}
```


### Create Azure Kubernetes Service (AKS) Cluster
```bash
az aks create --resource-group k8s --name aks-demo --node-count 3 --enable-addons monitoring --generate-ssh-keys
```

### Get AKS Cluster Credentials
```bash
az aks get-credentials --resource-group k8s --name aks-demo
```

### Create Azure Container Registry (ACR)
```bash
az acr create --resource-group k8s --name seliseassesment3 --sku Basic --admin-enabled true
az acr create --name nodeapp -g k8s --sku basic
```

### Build and Push Docker Image
```bash
docker build . -t seliseassesment3.azurecr.io/nodeapp:latest
docker tag nodeapp seliseassesment3.azurecr.io/nodeapp:latest
docker push seliseassesment3.azurecr.io/nodeapp:latest
```

# Deploy to AKS

### Apply Kubernetes Manifests
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f hpa.yaml
kubectl apply -f ingress.yaml
```
