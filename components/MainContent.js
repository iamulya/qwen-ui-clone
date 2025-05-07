import React from 'react';
import Avatar from './Avatar';

const SuggestionButton = ({ text }) => (
    <button>
        <span className="search-icon-suggestion">🔍</span> {text}
    </button>
);

const MainContent = () => {
    const suggestions = [
        "Top-rated movies this year",
        "How to fix a leaky faucet",
        "Quick healthy dinner recipes",
        "Best budget laptops",
        "DIY home decor ideas",
        "Learn Spanish online for free"
    ];

    return (
        <main className="main-content">
            <div className="main-header">
                <div className="model-selector">
                    <span className="model-name">
                        Qwen3-235B-A22B <span className="arrow-down">▼</span>
                    </span>
                    <div className="set-default">Set as default</div>
                </div>
                <div className="top-right-avatar">
                    <Avatar letter="A" size="large" />
                </div>
            </div>

            <div className="greeting">
                Good morning, Architect Handbook
            </div>

            <div className="input-area-container">
                <textarea placeholder="How can I help you today?"></textarea>
                <div className="input-controls">
                    <div className="left-controls">
                        <button className="icon-btn" title="Add attachment">+</button>
                        <button className="control-btn thinking">
                            <span className="icon">🧠</span> Thinking <span className="arrow-down" style={{ marginLeft: '4px' }}>▼</span>
                        </button>
                        <button className="control-btn search">
                            <span className="icon">🌍</span> Search
                        </button>
                        <button className="control-btn mcp">
                            <span className="icon">⭐</span> MCP
                        </button>
                    </div>
                    <button className="icon-btn mic-btn" title="Voice input">🎤</button>
                </div>
            </div>

            <div className="suggestions">
                {suggestions.map((text, index) => (
                    <SuggestionButton key={index} text={text} />
                ))}
            </div>
        </main>
    );
};

export default MainContent;