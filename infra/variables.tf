variable "bucket_name" {
  type        = string
  description = "Name of the S3 bucket"
}

variable "html_file_folder_location" {
  type        = string
  description = "Location of the html files to upload into S3 bucket"
  default     = "../dist"
}

variable "css_file_folder_location" {
  type        = string
  description = "Location of the css files to upload into S3 bucket"
  default     = "../dist/assets"
}

variable "js_file_folder_location" {
  type        = string
  description = "Location of the js files to upload into S3 bucket"
  default     = "../dist/assets"
}

