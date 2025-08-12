import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('portfolioMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    onLogout(false);
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('portfolioMessages', JSON.stringify(updatedMessages));
    setSelectedMessage(null);
  };

  const markAsRead = (id) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('portfolioMessages', JSON.stringify(updatedMessages));
  };

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="header-content">
          <h1>Admin Dashboard</h1>
          <div className="header-actions">
            <span className="unread-count">
              {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
            </span>
            <button onClick={handleLogout} className="btn-logout">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="messages-panel">
          <div className="panel-header">
            <h2>Contact Messages ({messages.length})</h2>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="messages-list">
            {filteredMessages.length === 0 ? (
              <div className="no-messages">
                {searchTerm ? 'No messages found matching your search.' : 'No messages yet.'}
              </div>
            ) : (
              filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`message-item ${!message.read ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    if (!message.read) {
                      markAsRead(message.id);
                    }
                  }}
                >
                  <div className="message-header">
                    <h3>{message.name}</h3>
                    <span className="message-date">
                      {new Date(message.timestamp).toLocaleDateString('en-IN')}
                    </span>
                  </div>
                  <p className="message-subject">{message.subject}</p>
                  <p className="message-preview">
                    {message.message.substring(0, 100)}
                    {message.message.length > 100 ? '...' : ''}
                  </p>
                  {!message.read && <div className="unread-indicator"></div>}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <div className="message-full">
              <div className="message-detail-header">
                <h2>{selectedMessage.subject}</h2>
                <button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  className="btn-delete"
                >
                  Delete Message
                </button>
              </div>
              
              <div className="message-meta">
                <div className="meta-item">
                  <strong>From:</strong> {selectedMessage.name}
                </div>
                <div className="meta-item">
                  <strong>Email:</strong> 
                  <a href={`mailto:${selectedMessage.email}`}>
                    {selectedMessage.email}
                  </a>
                </div>
                <div className="meta-item">
                  <strong>Date:</strong> {new Date(selectedMessage.timestamp).toLocaleString('en-IN')}
                </div>
              </div>
              
              <div className="message-body">
                <h4>Message:</h4>
                <p>{selectedMessage.message}</p>
              </div>
              
              <div className="message-actions">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                  className="btn-reply"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <h3>Select a message to view details</h3>
              <p>Choose a message from the list to read its full content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
