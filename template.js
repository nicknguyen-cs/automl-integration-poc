/**
 * Function to translate text using Google Cloud Translation API.
 * @param {string} body - The text to translate.
 * @param {string} sourceLanguage - The source language code (e.g., 'en').
 * @param {string} targetLanguage - The target language code (e.g., 'de').
 * @param {string} modelId - The model ID for translation.
 * @param {string} apiKey - The authorization API key.
 * @param {string} apiUrl - The translation API endpoint.
 * @returns {Promise<object|null>} - The translated data or null in case of an error.
 */
async function translateText({ body, sourceLanguage, targetLanguage, modelId, apiKey, apiUrl }) {
    const requestData = {
      source_language_code: sourceLanguage,
      target_language_code: targetLanguage,
      model: modelId,
      contents: [body],
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // Return the data to the caller
    } catch (error) {
      console.error('Error:', error);
      return null; // Optionally return null or some default value if there's an error
    }
  }
  
  // Example usage:
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
  