
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendMessageToAI } from '../services/geminiService';
import type { ChatMessage } from '../types';

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatboxRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (chatboxRef.current) {
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getInitialMessage = useCallback(async () => {
        if (messages.length === 0) {
            setIsLoading(true);
            try {
                // Sending an empty message or a greeting to get the initial response
                const initialResponse = await sendMessageToAI("Hello");
                setMessages([{ sender: 'ai', text: initialResponse }]);
            } catch (error) {
                console.error("Failed to get initial message:", error);
                setMessages([{ sender: 'ai', text: "Hello! I'm having a bit of trouble connecting. Please try again later." }]);
            } finally {
                setIsLoading(false);
            }
        }
    }, [messages.length]);

    useEffect(() => {
      if (isOpen) {
        getInitialMessage();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (userInput.trim() === '' || isLoading) return;

        const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const aiResponse = await sendMessageToAI(userInput);
            setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
        } catch (error) {
            setMessages([...newMessages, { sender: 'ai', text: "I'm sorry, I couldn't process that. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-600 transition-transform transform hover:scale-110 z-50"
                aria-label="Open DevOps Assistant"
            >
                <ChatIcon />
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-full max-h-[600px] bg-gray-800 rounded-lg shadow-2xl flex flex-col z-50 border border-gray-700">
                    <header className="bg-gray-900 p-4 flex justify-between items-center rounded-t-lg">
                        <h3 className="text-lg font-semibold text-white">DevOps Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <CloseIcon />
                        </button>
                    </header>
                    
                    <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-gray-700 text-gray-200 rounded-bl-none'}`}>
                                    <p style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex justify-start">
                               <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75"></div>
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-gray-900 border-t border-gray-700 rounded-b-lg">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Ask about DevOps..."
                                className="flex-1 bg-gray-700 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                disabled={isLoading}
                            />
                            <button onClick={handleSendMessage} disabled={isLoading} className="ml-3 p-2 bg-cyan-600 rounded-full text-white hover:bg-cyan-500 disabled:bg-gray-600 transition-colors">
                                <SendIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
