// Replace hardcoded API key with environment variable
new GoogleGenerativeAIEmbeddings({
  apiKey: process.env.GEMINI_API_KEY,
  // ... rest of the config
}); 