// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GoogleGenAI } from '@google/genai';
import mime from 'mime'; // Required for genai
import dotenv from 'dotenv';
dotenv.config();





const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static frontend files (index.html, etc.)

// Initialize Gemini AI
const ai = new GoogleGenAI({
  // Provide your API key or auth credentials if necessary
  apiKey: process.env.GOOGLE_API_KEY
});

// Fixed initial system prompt
const initialPrompt = `You are a friendly, knowledgeable household assistant chatbot. Your role is to provide clear, practical, and easy-to-follow advice on a wide range of everyday household tasks and problems. 
This includes tips on cleaning, organizing, minor repairs, maintenance, and basic DIY solutions.
Always use a warm, supportive tone. Break down instructions into simple, actionable steps. 
If a task requires caution (e.g., handling tools, cleaning with chemicals), always mention safety tips first.
Keep your answers straightforward — avoid overcomplicating. 
If needed, suggest basic tools or common household materials people likely have at home.
If a user asks for something dangerous or highly technical (like electrical wiring repair), politely advise them to call a professional instead of attempting it themselves.
Always encourage and empower the user by saying things like “You can do it!” or “It’s easier than you think!”`;

// Gemini model
const model = 'gemini-2.5-pro-exp-03-25';

// Route to handle chat messages
app.post('/ask', async (req, res) => {
  try {
    const userMessage = req.body.question;

    const contents = [
      {
        role: 'user',
        parts: [{ text: initialPrompt }],
      },
      {
        role: 'model',
        parts: [{ text: `Okay, I'm ready! 😊` }], // You can expand this if you want
      },
      {
        role: 'user',
        parts: [{ text: userMessage }],
      },
    ];

    const config = {
      responseMimeType: 'text/plain',
    };

    const responseStream = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let finalResponse = '';
    for await (const chunk of responseStream) {
      finalResponse += chunk.text;
    }

    res.send(finalResponse);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong while generating a response.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
