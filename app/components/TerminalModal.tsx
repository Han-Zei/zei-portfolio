"use client";
import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X } from "lucide-react";

interface CommandHistory {
  command: string;
  output: string | React.ReactNode;
}

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: "", output: "Welcome to VibeOS v1.0.0. Type 'help' to see available commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut listener (Cmd+\)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "\\") {
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

  // Auto-scroll and focus
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = "Available commands: whoami, ls, clear, date, sudo rm -rf /, make coffee";
        break;
      case "whoami":
        output = "Czar Erson S. Isla - Data Analyst & Vibe Coder";
        break;
      case "ls":
        output = "projects/  resume.pdf  certifications/  top_secret_gov_stuff/";
        break;
      case "date":
        output = new Date().toString();
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo rm -rf /":
        output = "Nice try, FBI. Permission denied.";
        break;
      case "make coffee":
        output = (
          <pre className="text-xs">
{`    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |               | | |
    |               |_| |
 ___|             |\\___/
/    \\___________/    \\
\\_____________________/`}
          </pre>
        );
        break;
      default:
        output = `command not found: ${cmd}`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="neo-box bg-black w-full max-w-3xl flex flex-col h-[60vh] max-h-[600px] border-[4px] border-neo-green shadow-[12px_12px_0px_0px_rgba(34,197,94,1)]">
        
        {/* Terminal Header */}
        <div className="bg-neo-green text-black p-3 flex justify-between items-center border-b-[4px] border-black">
          <div className="flex items-center gap-2 font-black">
            <TerminalIcon className="w-5 h-5" /> VibeOS Terminal
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white p-1 rounded transition-colors border-2 border-transparent hover:border-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="flex-1 p-6 overflow-y-auto font-mono text-neo-green text-sm sm:text-base flex flex-col gap-2"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              {item.command && (
                <div className="flex gap-2 text-white">
                  <span className="text-neo-pink">guest@vibe-coder:~$</span>
                  <span>{item.command}</span>
                </div>
              )}
              <div className="whitespace-pre-wrap opacity-90">{item.output}</div>
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex gap-2 mt-2 text-white">
            <span className="text-neo-pink">guest@vibe-coder:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0"
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
