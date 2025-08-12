import React, { useState } from 'react';
import styles from './ChatBot.module.scss';

const ChatBot = ({ isOpen, onClose }) => {

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! How can I help you today?',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 2,
      type: 'user',
      content: 'I need to book an appointment',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 3,
      type: 'bot',
      content: 'I can help you with that! Please select a doctor and preferred time slot from our booking section.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: 'Thank you for your message. Our team will assist you shortly.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat Window */}
      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        <div className={styles.chatHeader}>
          <div className={styles.botInfo}>
            <div className={styles.botAvatar}>
              <i className="fas fa-robot"></i>
            </div>
            <div className={styles.botName}>
              <h3>MediCare Assistant</h3>
              <span className={styles.status}>Online</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.chatMessages}>
          {messages.map(message => (
            <div
              key={message.id}
              className={`${styles.message} ${styles[message.type]}`}
            >
              <div className={styles.messageContent}>
                {message.content}
                <span className={styles.timestamp}>{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        <form className={styles.chatInput} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;