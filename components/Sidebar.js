import React from 'react';
import Avatar from './Avatar';

const Sidebar = () => {
    const todayChats = ["Suno V4 5 Overview"];
    const previousChats = ["Aider AI Pair Programming Tool", "Qwen3 Model Family Overview"];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <div className="logo-icon-wrapper">Q</div>
                    Qwen
                </div>
                <div className="sidebar-actions">
                    <div className="icon-placeholder" title="All files"></div>
                </div>
            </div>

            <button className="new-chat-btn">
                <span className="plus-icon">+</span> New Chat
            </button>

            <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search" />
                <span className="dots-icon">⋮</span>
            </div>

            <div className="chat-list">
                <div className="chat-list-header">
                    <span className="arrow-down">▼</span> All chats
                </div>
                <h4>Today</h4>
                <ul>
                    {todayChats.map((chat, index) => (
                        <li key={`today-${index}`}>{chat}</li>
                    ))}
                </ul>
                <h4>Previous 7 days</h4>
                <ul>
                    {previousChats.map((chat, index) => (
                        <li key={`prev-${index}`}>{chat}</li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-footer">
                <Avatar letter="A" />
                <span className="username">Architect Handbook</span>
            </div>
        </aside>
    );
};

export default Sidebar;