# Assessment
 
// az acr login --name seliseassesment3
// docker tag nodeapp seliseassesment3.azurecr.io/nodeapp:v 
// docker push seliseassesment3.azurecr.io/nodeapp:v1

// az account set --subscription eaa69984-1133-43e9-8bc1-9c01ca227b9e
// az aks get-credentials --resource-group k8s --name aks-demo
// AGIC 

/*

az network public-ip create --name myPublicIp --resource-group myResourceGroup --allocation-method Static --sku Standard
az network vnet create --name myVnet --resource-group myResourceGroup --address-prefix 10.0.0.0/16 --subnet-name mySubnet --subnet-prefix 10.0.0.0/24 
az network application-gateway create --name myApplicationGateway --resource-group myResourceGroup --sku Standard_v2 --public-ip-address myPublicIp --vnet-name myVnet --subnet mySubnet --priority 100


*/

// appgwId=$(az network application-gateway show --name myApplicationGateway --resource-group myResourceGroup -o tsv --query "id") 
// az aks enable-addons --name aks-demo --resource-group k8s --addon ingress-appgw --appgw-id $appgwId

// openssl genrsa -out key.pem 2048
// openssl req -x509 -key key.pem -out cert.pem -days 365
