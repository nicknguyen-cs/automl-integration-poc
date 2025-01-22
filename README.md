# automl-integration-poc
# TranslateText Function

This repository contains a reusable and configurable JavaScript function for translating text using the Google Cloud Translation API. The function accepts dynamic inputs for text, source and target languages, model ID, OAuth2.0 Token, and API endpoint, making it easy to integrate with various projects. You can use this as part of middleware or in Contentstack as a code block in Automate.

## Prerequisites

Before using this function, ensure the following:

1. **Google Cloud Translation API** is enabled in your Google Cloud Project.
2. Obtain the following:
   - **OAuth Token**: For authorization.
     - You can generate the oAuth token via the **generateToken.js** file. The paste the output into your keyfile.
   - **Model ID**: Translation model identifier.
   - **API Endpoint**: URL for the Translation API.

## Installation

Clone this repository and include the `translateText` function in your project.


### Example Usage

```javascript
const translationConfig = {
  body: 'Hello, world!',
  sourceLanguage: 'en',
  targetLanguage: 'de',
  modelId: 'projects/YOUR_PROJECT_ID/locations/YOUR_LOCATION/models/YOUR_MODEL_ID',
  oauthtoken: 'OAuth2 generated token',
  apiUrl: 'https://translation.googleapis.com/v3/projects/YOUR_PROJECT_ID/locations/YOUR_LOCATION:translateText',
};

translateText(translationConfig).then((result) => {
  console.log('Translation Result:', result);
});
```

### Parameters

| Parameter         | Type   | Description                                                   |
|-------------------|--------|---------------------------------------------------------------|
| `body`            | String | The text to translate.                                        |
| `sourceLanguage`  | String | Language code of the source text (e.g., `en` for English).    |
| `targetLanguage`  | String | Language code of the target text (e.g., `de` for German).     |
| `modelId`         | String | Translation model ID provided by Google Cloud.               |
| `oauthtoken`      | String | OAuth2.0 token used for authorization.                       |
| `apiUrl`          | String | Endpoint URL for the translation API.                        |


