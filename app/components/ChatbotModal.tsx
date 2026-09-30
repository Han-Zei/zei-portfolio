"use client";

import { useState, useEffect, useRef } from "react";
import { X, Bot } from "lucide-react";

export default function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = query;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setQuery("");
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          history: messages 
        })
      });

      const data = await res.json();
      
      if (res.ok) {
        setMessages((prev) => [...prev, { role: "bot", text: data.text }]);
      } else {
        setMessages((prev) => [...prev, { role: "bot", text: data.error || "An error occurred." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Network error. The server must be taking a nap." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="neo-box bg-background w-full max-w-2xl flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="border-b-[3px] border-neo-border p-4 flex justify-between items-center bg-neo-yellow text-black">
          <div className="flex items-center gap-2 font-black text-xl">
            <Bot className="w-6 h-6" /> Ask anything
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white p-1 border-[3px] border-transparent hover:border-black rounded">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 font-bold mt-20 opacity-60">
              Try asking about my data analysis experience...
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`neo-box p-3 max-w-[80%] ${msg.role === "user" ? "bg-neo-cyan text-black" : "bg-white text-black"}`}>
                  <p className="font-medium">{msg.text}</p>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="neo-box p-3 bg-white text-black font-bold animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="border-t-[3px] border-neo-border p-4 bg-background">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 neo-box p-3 outline-none focus:ring-4 ring-neo-pink bg-background text-foreground"
            />
            <button type="submit" className="neo-button neo-button-active bg-neo-pink text-black px-6 font-black text-lg">
              &uarr;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
