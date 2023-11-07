aws_region         = "eu-west-3"
allowed_account_id = "account_id"
project_name       = "project"
repo_name          = "project"

staging_domain                      = "staging.tnc-protodash.dev-vizzuality.com"
staging_ec2_instance_type           = "t3a.small"
staging_rds_backup_retention_period = 3

production_domain                      = "ncsprototypingnetwork.naturebase.org"
production_ec2_instance_type           = "m5a.large"
production_rds_backup_retention_period = 7

beanstalk_platform = "64bit Amazon Linux 2023 v4.0.1 running Docker"
beanstalk_tier     = "WebServer"
rds_engine_version = "15.4"
rds_instance_class = "db.t3.micro"

mapbox_access_token  = "pk.eyJ1IjoidG5jbWFwYm94IiwiYSI6ImNsb2VuaDQxaTAzdW0ycW55dGtxamJoaTcifQ.I13qIdNnYzts0--Vv2oYVA"
