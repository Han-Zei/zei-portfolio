"use client";
import React, { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function GlobalCrashHandler() {
  const [isCrashed, setIsCrashed] = useState(false);

  useEffect(() => {
    // Check if the site was already crashed in a previous session
    if (localStorage.getItem("is_crashed") === "true") {
      setIsCrashed(true);
    }

    // Listeners to trigger the crash globally
    const handleCrash = () => setIsCrashed(true);
    const handleRevert = () => setIsCrashed(false);

    window.addEventListener("site_crashed", handleCrash);
    window.addEventListener("site_reverted", handleRevert);

    // Cross-tab synchronization
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "is_crashed") {
        setIsCrashed(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("site_crashed", handleCrash);
      window.removeEventListener("site_reverted", handleRevert);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  if (!isCrashed) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-600 p-6 animate-in fade-in duration-100">
      <div className="absolute inset-0 bg-red-700 animate-pulse mix-blend-overlay pointer-events-none"></div>
      
      <div className="neo-box bg-black text-white border-[8px] border-yellow-400 p-8 max-w-3xl w-full text-center flex flex-col items-center gap-8 relative z-10 transform rotate-1 shadow-[16px_16px_0px_0px_rgba(250,204,21,1)]">
        <AlertTriangle className="w-24 h-24 text-yellow-400 animate-bounce" />
        
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-red-500 mb-4 uppercase tracking-tighter">
            SEV-1 Outage
          </h2>
          <p className="text-2xl font-bold font-mono text-yellow-400">
            FATAL ERROR: DROP TABLE users; EXECUTED SUCCESSFULLY.
          </p>
          <p className="text-xl font-bold mt-4">
            The database is gone. The CEO is calling you. The entire website is locked down until you fix this.
          </p>
        </div>
        
        <button 
          onClick={() => {
            localStorage.removeItem("is_crashed");
            window.dispatchEvent(new Event("site_reverted"));
          }}
          className="neo-button neo-button-active bg-yellow-400 text-black px-10 py-6 text-3xl font-black uppercase border-[4px] border-black hover:bg-white transition-colors"
        >
          Revert Commit (Save Job)
        </button>
      </div>
    </div>
  );
}
