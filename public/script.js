const form = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = userInput.value.trim();
    if (!input) return;

    // Add user message to chat
    addMessage(input, 'user');
    userInput.value = '';

    // Show loading message
    const loadingMsg = addMessage('Typing...', 'bot');

    // Send user input to backend
    try {
        const response = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: input }),
        });
        const data = await response.text();

        // Update bot response
        loadingMsg.textContent = data;
    } catch (err) {
        loadingMsg.textContent = 'Oops! Something went wrong. 😢';
    }
});

function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msgDiv;
}
