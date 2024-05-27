import React, { useState, useRef } from 'react';
import '../styles/home.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatRef = useRef(null);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const sendMessage = () => {
    if (userInput !== '') {
      setMessages([...messages, { user: true, message: userInput }]);
      setUserInput('');

      
      setTimeout(() => {
        const response = getChatbotResponse(userInput);
        setMessages([...messages, { user: false, message: response }]);
      }, 500);

      
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const getChatbotResponse = (userInput) => {
    
    switch (userInput.toLowerCase()) {
      case 'ciao':
        return 'Ciao! Come posso aiutarti oggi?';
      case 'moto':
        return 'Abbiamo una vasta gamma di moto da esplorare. Quali modelli ti interessano?';
      case 'test drive':
        return 'Certo! Prenota un test drive per provare la moto dei tuoi sogni.';
      case 'orari':
        return 'Siamo aperti dal lunedì al sabato dalle 9:00 alle 19:00 e la domenica dalle 10:00 alle 18:00.';
      default:
        return 'Non sono sicuro di aver capito. Puoi riformulare la tua domanda?';
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history" ref={chatRef}>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.user ? 'user' : 'chatbot'}`}>
            {message.message}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Scrivi il tuo messaggio..."
        />
        <button onClick={sendMessage}>Invia</button>
      </div>
    </div>
  );
};

export default ChatBot;
