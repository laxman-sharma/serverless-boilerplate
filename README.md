# Steps to setup the backend

- ## Install `aws cli`

  >```brew install awscli```

- ## configure `aws`
  >```aws config```
  - Enter your AWS ACCESS Key Id and SECRET KEY.

- ## Install `serveless` cli
  >```curl -o- -L https://slss.io/install | bash```

- ## AWS environment config in serverless.yml
  - Update the `stage` name & desired `region` under `provider` section.

  - ## Auth related
    - For Cognito Authentication to work it's necessary that the `LOGOUT_URL` and `CALLBACK_URL` under `custom` section in `serverless.yml` or deployed version matches the configured aws exports on the front end application. Please make sure to update these accordingly when deploying. Ideally `CALLBACK_URL` should be the navigation route after logging in and `LOGOUT_URL` is the route after logging out.

- ## Deployment
  - Deployment is straight forward and can be done with the following command:

    > ```serverless deploy```

  - This creates a versioned deployment of the current backend.
    - Each deployment creates a zip file and stores it in S3. Make sure to enable versioning if required from by toggling `versionFunctions: false` under `provider` in `serverless.yml`.
    - All of the backend resources are managed under a Cloudformation stack. Different stages have different stacks so to deploy production/ staging/ development environment just change the `stage` under `provider` section of `serverless.yml`.