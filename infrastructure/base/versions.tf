terraform {
  backend "s3" {
    // TF does not allow vars here.
    // Use output state_bucket or "{var.project}-tfstate" from the state project
    bucket = "tnc-protodash-terraform-state"
    // Use var.aws_region from the state project
    region = "eu-west-3"
    // Use output state_lock_table or "{var.project}-tfstate-lock" from the state project
    dynamodb_table = "tnc-protodash-terraform-state-lock"
    encrypt        = true
    key            = "state"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.14"
    }
  }

  required_version = "~> 1.5.6"
}

provider "aws" {
  region = var.aws_region
}

# https://github.com/integrations/terraform-provider-github/issues/667#issuecomment-1182340862
provider "github" {
  #  owner = "Project"
}
