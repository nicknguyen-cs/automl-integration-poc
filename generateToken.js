import { GoogleAuth } from "google-auth-library";
import automl from "@google-cloud/automl";
import path from "path";

// Your service account JSON file path
const serviceAccountFilePath = path.resolve("./keyfile.json"); // Update with your path

// Create a GoogleAuth instance
const auth = new GoogleAuth({
  keyFilename: serviceAccountFilePath,
  scopes: ["https://www.googleapis.com/auth/cloud-platform"],
});

// Initialize the Prediction Service Client
async function createPredictionClient() {
  const client = new automl.v1.PredictionServiceClient({ auth });
  return client;
}

async function translateText() {
  const client = await createPredictionClient();
  // Get the full path of the model
  const modelFullId = client.modelPath(projectId, computeRegion, modelId);
  const token = await auth.getAccessToken(); // Obtain the access token directly from the auth instance
  console.log("Access Token:", token);
}

// Call the translateText function
translateText().catch(console.error);
