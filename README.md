# automl-integration-poc
# TranslateText Function

This repository contains a reusable and configurable JavaScript function for translating text using the Google Cloud Translation API. The function accepts dynamic inputs for text, source and target languages, model ID, API key, and API endpoint, making it easy to integrate with various projects.

## Prerequisites

Before using this function, ensure the following:

1. **Google Cloud Translation API** is enabled in your Google Cloud Project.
2. Obtain the following:
   - **API Key**: For authorization.
   - **Model ID**: Translation model identifier.
   - **API Endpoint**: URL for the Translation API.

## Installation

Clone this repository and include the `translateText` function in your project.

```bash
# Clone the repository
git clone https://github.com/your-username/translate-text.git
```

## Usage

### Import or Copy the Function

Include the `translateText` function in your project.

### Example Usage

```javascript
const translationConfig = {
  body: 'Hello, world!',
  sourceLanguage: 'en',
  targetLanguage: 'de',
  modelId: 'projects/YOUR_PROJECT_ID/locations/YOUR_LOCATION/models/YOUR_MODEL_ID',
  apiKey: 'YOUR_API_KEY',
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
| `apiKey`          | String | API key for authorization.                                   |
| `apiUrl`          | String | Endpoint URL for the translation API.                        |

### Output

The function returns a `Promise` with the translated data or `null` in case of an error.

### Error Handling

If the API request fails, an error is logged to the console, and the function returns `null`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributions

Feel free to open issues or submit pull requests to improve the functionality or add new features.

