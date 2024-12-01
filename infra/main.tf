
# S3 bucket
resource "aws_s3_bucket" "cloudfront_s3_origin_bucket" {
  bucket = var.bucket_name
}

# Enable versioning
resource "aws_s3_bucket_versioning" "enable" {
  bucket = aws_s3_bucket.cloudfront_s3_origin_bucket.id
  versioning_configuration {
    status = "Enabled"
  }
}

# Create IAM policy document to allow cloudfront service to read s3 buckets
data "aws_iam_policy_document" "cloudfront_s3_read_allow" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cloudfront_s3_origin_bucket.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.s3_distribution.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "allow_cloudfront_read" {
  bucket = aws_s3_bucket.cloudfront_s3_origin_bucket.id
  policy = data.aws_iam_policy_document.cloudfront_s3_read_allow.json
}

resource "aws_cloudfront_origin_access_control" "default" {
  name                              = "${var.bucket_name}-s3-oac"
  description                       = "Default OAC ${var.bucket_name} S3 bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

data "aws_cloudfront_cache_policy" "caching_disabled" {
  name = "Managed-CachingDisabled"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name              = aws_s3_bucket.cloudfront_s3_origin_bucket.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.default.id
    origin_id                = local.s3_origin_id
  }
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id
    # Disable caching for now. Otherwise deployment step will need a cache invalidation step
    cache_policy_id        = data.aws_cloudfront_cache_policy.caching_disabled.id
    viewer_protocol_policy = "redirect-to-https"
  }
  price_class = "PriceClass_All"
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

# Upload files
# Run only after the distribution is created. Otherwise, aws_s3_object resource will fail because it run as soon as the s3 bucket is being provisioned.
# The bucket must be provisioned prior to this resource running.  
resource "aws_s3_object" "html_files" {
  for_each     = fileset("../dist/", "*.html")
  bucket       = aws_s3_bucket.cloudfront_s3_origin_bucket.id
  key          = each.value
  source       = "../dist/${each.value}"
  content_type = "text/html"
  etag         = filemd5("../dist/${each.value}")
  depends_on   = [aws_cloudfront_distribution.s3_distribution]
}

resource "aws_s3_object" "css_files" {
  for_each     = fileset("../dist/assets/", "*.css")
  bucket       = aws_s3_bucket.cloudfront_s3_origin_bucket.id
  key          = "assets/${each.value}"
  source       = "../dist/assets/${each.value}"
  content_type = "text/css"
  etag         = filemd5("../dist/assets/${each.value}")
  depends_on   = [aws_cloudfront_distribution.s3_distribution]
}

resource "aws_s3_object" "js_files" {
  for_each     = fileset("../dist/assets/", "*.js")
  bucket       = aws_s3_bucket.cloudfront_s3_origin_bucket.id
  key          = "assets/${each.value}"
  source       = "../dist/assets/${each.value}"
  content_type = "text/javascript"
  etag         = filemd5("../dist/assets/${each.value}")
  depends_on   = [aws_cloudfront_distribution.s3_distribution]
}
