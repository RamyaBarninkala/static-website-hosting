# AWS Static Website Hosting using S3 and CloudFront

## Project Overview
This project demonstrates how to host a static website using Amazon S3 and Amazon CloudFront.

## Technologies Used
- Amazon S3
- Amazon CloudFront
- Origin Access Control (OAC)
- IAM / S3 Bucket Policy (JSON)
- HTML
- CSS
- JavaScript

## Architecture
User → CloudFront → Origin Access Control → Private S3 Bucket

## Implementation Steps
1. Created an S3 bucket.
2. Uploaded website files to the S3 bucket.
3. Configured Amazon CloudFront distribution.
4. Configured Origin Access Control (OAC).
5. Updated the S3 bucket policy to allow CloudFront access.
6. Enabled HTTPS delivery.
7. Tested the website using the CloudFront domain name.

## Security
- Kept the S3 bucket private.
- Used Origin Access Control.
- Allowed CloudFront to access S3 objects through a bucket policy.

## Live Website
https://d329tjbhise04g.cloudfront.net/

## Author
Ramya Barninkala

GitHub: https://github.com/RamyaBarninkala
