
# S3 bucket
resource "aws_s3_bucket" "bucket" {
  bucket = "www.${var.bucket_name}"
}

# Enable versioning
resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Allow public read
resource "aws_s3_bucket_acl" "bucket-acl" {
  bucket     = aws_s3_bucket.bucket.id
  acl        = "public-read"
  depends_on = [aws_s3_bucket_ownership_controls.s3_bucket_acl_ownership]
}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_acl_ownership" {
  bucket = aws_s3_bucket.bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
  depends_on = [aws_s3_bucket_public_access_block.allow_public_access]
}

resource "aws_s3_bucket_public_access_block" "allow_public_access" {
  bucket = aws_s3_bucket.bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.bucket.id
  policy = data.aws_iam_policy_document.iam-policy.json
}
data "aws_iam_policy_document" "iam-policy" {
  statement {
    sid    = "AllowPublicRead"
    effect = "Allow"
    resources = [
      "arn:aws:s3:::www.${var.bucket_name}",
      "arn:aws:s3:::www.${var.bucket_name}/*",
    ]
    actions = ["S3:GetObject"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }

  depends_on = [aws_s3_bucket_public_access_block.allow_public_access]
}

resource "aws_s3_bucket_website_configuration" "website-config" {
  bucket = aws_s3_bucket.bucket.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "404.jpeg"
  }
}

# Upload files
resource "aws_s3_object" "object-upload-html" {
  for_each     = fileset("../dist/", "*.html")
  bucket       = aws_s3_bucket.bucket.id
  key          = each.value
  source       = "../dist/${each.value}"
  content_type = "text/html"
  etag         = filemd5("../dist/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object-upload-assets-css" {
  for_each     = fileset("../dist/assets/", "*.css")
  bucket       = aws_s3_bucket.bucket.id
  key          = "assets/${each.value}"
  source       = "../dist/assets/${each.value}"
  content_type = "text/css"
  etag         = filemd5("../dist/assets/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object-upload-assets-js" {
  for_each     = fileset("../dist/assets/", "*.js")
  bucket       = aws_s3_bucket.bucket.id
  key          = "assets/${each.value}"
  source       = "../dist/assets/${each.value}"
  content_type = "text/javascript"
  etag         = filemd5("../dist/assets/${each.value}")
  acl          = "public-read"
}

# resource "aws_s3_object" "object-upload-jpg" {
#   for_each     = fileset("../dist/", "*.jpeg")
#   bucket       = aws_s3_bucket.bucket.id
#   key          = each.value
#   source       = "../dist/${each.value}"
#   content_type = "image/jpeg"
#   etag         = filemd5("../dist/${each.value}")
#   acl          = "public-read"
# }

