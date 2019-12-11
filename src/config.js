export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-pujsa442pqvd"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://4c62gb6th4.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_U1WCj9aFW",
      APP_CLIENT_ID: "5cm5p89s7f2fh77dlbprstn442",
      IDENTITY_POOL_ID: "us-east-2:12100a51-d95e-42f9-b122-e00bdfae2d4f"
    }
  };