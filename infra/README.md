1 - Login to AWS account account
2 - Create S3 and dynamodb backend (Check permissions)
2 - Set partial config. i.e dev.config
3 - terraform init -backend-config="./dev.config"
4 - terraform apply -var-file="dev.tfvars"
