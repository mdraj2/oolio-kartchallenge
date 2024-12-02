# AWS Deployment Guide

## Prerequisites

- AWS account
- Terraform installed
- Node.js and npm installed
- Terminal/command line access

## Deployment Steps

### 1. AWS Account Login

Log in to your AWS account using the terminal:

```bash
aws configure
```

### 2. Backend Setup

Create an S3 bucket and DynamoDB table for Terraform backend:

- Follow the detailed steps at: [Hashicorp Terraform S3 Backend Guide](https://developer.hashicorp.com/terraform/language/backend/s3)

### 3. Terraform Configuration

Update the `dev.config` file with your S3 and DynamoDB backend properties:

- Customise the configuration for your specific AWS account
- Ensure the details match the resources you created in step 2

### 4. Initialize Terraform

Run the following command to initialize Terraform with your backend configuration in the `infra` folder:

```bash
terraform init -backend-config="./dev.config"
```

### 5. Application Preparation

If you have not created a production build of the application, navigate to the source directory and build the application:

```bash
npm install
npm run build
```

### 6. Deploy with Terraform

Choose a unique S3 bucket name and apply the Terraform configuration:

```bash
terraform apply -var bucket_name="your-unique-bucket-name" -auto-approve
```

**Note:** Replace `your-unique-bucket-name` with a globally unique S3 bucket name.

**Note:** The React application artifacts (HTML, CSS, and JavaScript files) are expected to be compiled into a dist directory by default. You can customize the deployment configuration by modifying the input variables in the Terraform command. Refer to the [Terraform Inputs](#Inputs) section below for detailed configuration options.

### 7. Navigate the CDN URL

Navigate to the CDN url provided in the `cdn_url` output after the Terraform deployment

## Troubleshooting

- Verify your AWS credentials have sufficient permissions
- Check that all configuration files are correctly formatted

# Terraform Docs

## Requirements

| Name                                                   | Version |
| ------------------------------------------------------ | ------- |
| <a name="requirement_aws"></a> [aws](#requirement_aws) | ~> 5.0  |

## Providers

| Name                                             | Version |
| ------------------------------------------------ | ------- |
| <a name="provider_aws"></a> [aws](#provider_aws) | 5.78.0  |

## Modules

No modules.

## Resources

| Name                                                                                                                                                         | Type        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| [aws_cloudfront_distribution.s3_distribution](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution)           | resource    |
| [aws_cloudfront_origin_access_control.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_control) | resource    |
| [aws_s3_bucket.cloudfront_s3_origin_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)                           | resource    |
| [aws_s3_bucket_policy.allow_cloudfront_read](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy)                   | resource    |
| [aws_s3_bucket_public_access_block.private](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block)       | resource    |
| [aws_s3_bucket_versioning.enable](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning)                          | resource    |
| [aws_s3_object.css_files](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object)                                             | resource    |
| [aws_s3_object.html_files](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object)                                            | resource    |
| [aws_s3_object.js_files](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_object)                                              | resource    |
| [aws_cloudfront_cache_policy.caching_disabled](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/cloudfront_cache_policy)       | data source |
| [aws_iam_policy_document.cloudfront_s3_read_allow](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document)       | data source |

## Inputs

| Name                                                                                                         | Description                                         | Type     | Default            | Required |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- | -------- | ------------------ | :------: |
| <a name="input_bucket_name"></a> [bucket_name](#input_bucket_name)                                           | Name of the S3 bucket                               | `string` | n/a                |   yes    |
| <a name="input_css_file_folder_location"></a> [css_file_folder_location](#input_css_file_folder_location)    | Location of the css files to upload into S3 bucket  | `string` | `"../dist/assets"` |    no    |
| <a name="input_html_file_folder_location"></a> [html_file_folder_location](#input_html_file_folder_location) | Location of the html files to upload into S3 bucket | `string` | `"../dist"`        |    no    |
| <a name="input_js_file_folder_location"></a> [js_file_folder_location](#input_js_file_folder_location)       | Location of the js files to upload into S3 bucket   | `string` | `"../dist/assets"` |    no    |

## Outputs

| Name                                                     | Description |
| -------------------------------------------------------- | ----------- |
| <a name="output_cdn_url"></a> [cdn_url](#output_cdn_url) | n/a         |

<!-- END_TF_DOCS -->
