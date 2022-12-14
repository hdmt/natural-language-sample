'use strict';

require('dotenv').config();

// [START language_quickstart]
async function quickstart() {
  // Imports the Google Cloud client library
  const language = require('@google-cloud/language');

  const options = {
    keyFilename: process.env.KEY_FILENAME,
    projectId: process.env.PROJECT_ID,
  };

  // Instantiates a client
  const client = new language.LanguageServiceClient(options);

  // The text to analyze
  const text =
    'I slept well yesterday, so I feel fine today. The weather is good and I feel very bright from the morning.';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;

  // console.log(process.env.PROJECT_ID);
  console.log(`Text: ${text}`);
  console.log(`score: ${sentiment.score}`);
  console.log(`magnitude: ${sentiment.magnitude}`);
}
// [END language_quickstart]

quickstart().catch(console.error);
