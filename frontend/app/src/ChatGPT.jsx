import { useState } from 'react';

function ChatGPT() {
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleChatSubmit = () => {
        // チャットメッセージをバックエンドに送信
        fetch('/api/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: chatMessage }),
        })
            .then(response => response.json())
            .then(data => {
                setChatHistory([...chatHistory, data]);
                setChatMessage('');
            });
    };

    return (
        <div>
            <div>
                {chatHistory.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Chat Message"
                value={chatMessage}
                onChange={e => setChatMessage(e.target.value)}
            />
            <button onClick={handleChatSubmit}>Send</button>
        </div>
    );
}

export default ChatGPT;
