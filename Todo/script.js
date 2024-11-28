// Handle sending a message when the "Send" button is clicked or Enter key is pressed
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  
  if (message) {
    // Create a new message element
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.classList.add('message');
    
    // Append the message to the message container
    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(newMessage);
    
    // Clear the input box
    input.value = '';
    
    // Scroll to the bottom of the chat
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}

// Adjust the input box when the keyboard opens or closes on mobile devices
let isKeyboardOpen = false;

function handleKeyboard() {
  const inputContainer = document.querySelector('.input-container');
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (documentHeight > windowHeight) {
    // If the document height is greater than the window height, the keyboard is likely open
    if (!isKeyboardOpen) {
      inputContainer.style.position = 'absolute';
      inputContainer.style.bottom = `${windowHeight - documentHeight}px`;
      isKeyboardOpen = true;
    }
  } else {
    if (isKeyboardOpen) {
      inputContainer.style.position = 'fixed';
      inputContainer.style.bottom = '0';
      isKeyboardOpen = false;
    }
  }
}

// Listen for window resize events (when the keyboard opens/closes)
window.addEventListener('resize', handleKeyboard);
