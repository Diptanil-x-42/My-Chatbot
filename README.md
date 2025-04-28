🏠 Household Assistant Chatbot
A Node.js-powered chatbot that uses Google Gemini AI to provide friendly and practical advice on household tasks like cleaning, organizing, simple repairs, and more!

🚀 Features
Friendly, step-by-step advice for everyday household problems

Powered by the Gemini 2.5 Pro model

Emphasizes safety and simplicity

Warns users to seek professional help for complex or dangerous tasks

Built using Express.js and Google GenAI SDK

🛠️ Tech Stack
Node.js

Express.js

@google/genai (Google Gemini AI SDK)

CORS

Body-Parser

MIME

@types/node (for development)

📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/newBot.git
cd newBot
Install the dependencies:

bash
Copy
Edit
npm install
Add your Google Gemini API key:

In server.js, initialize GoogleGenAI with your API key:

javascript
Copy
Edit
const ai = new GoogleGenAI({
  apiKey: 'YOUR_API_KEY_HERE'
});
(You can also manage it securely using environment variables if needed.)

Start the server:

bash
Copy
Edit
npm start
Server runs at: http://localhost:3000

📜 Usage
Make a POST request to /ask with a JSON body:

json
Copy
Edit
{
  "question": "How do I fix a leaking kitchen faucet?"
}
The server will respond with a detailed, user-friendly answer from the AI!

📂 Project Structure
php
Copy
Edit
newBot/
├── public/           # (Optional) Static frontend files
├── server.js         # Main backend server
├── package.json      # Project metadata and dependencies
└── README.md         # Project description
⚡ Future Improvements
Build a frontend chat interface

Add user authentication

Improve error handling and retries

Deploy to a cloud platform (like Render, Vercel, or AWS)

🤝 Contributing
Feel free to open issues, suggest features, or submit pull requests!
Let's make this chatbot even more helpful together.

📃 License
This project is open-sourced under the MIT License.

✅ Ready to help you master household tasks — one step at a time!

