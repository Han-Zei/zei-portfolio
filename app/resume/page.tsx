import React from "react";

export default function Resume() {
  return (
    <main className="flex-1 flex flex-col font-sans min-h-screen pt-16 lg:pt-0">
      <section className="flex-1 p-6 lg:p-12 flex flex-col h-full">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-black bg-neo-yellow text-black inline-block px-4 py-2 border-[3px] border-neo-border -rotate-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              The Receipts
            </h1>
            <p className="text-xl font-medium mt-4">Proof that I actually know what I'm doing.</p>
          </div>
          
          <a href="/assets/cv.pdf" download className="hidden md:flex neo-button neo-button-active bg-neo-cyan text-black px-6 py-3 font-black items-center gap-2">
            Download PDF 📥
          </a>
        </div>

        <div className="w-full h-[80vh] min-h-[800px] bg-[#333] border-[3px] border-neo-border shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] rounded relative overflow-hidden">
          {/* Mobile Download Fallback */}
          <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-background text-foreground z-10">
            <span className="text-4xl mb-4">📄</span>
            <h3 className="text-2xl font-black mb-2">PDF Viewer Disabled on Mobile</h3>
            <p className="mb-6 opacity-80">Mobile browsers are terrible at embedding PDFs. Download it instead to view it properly.</p>
            <a href="/assets/cv.pdf" download className="neo-button neo-button-active bg-neo-cyan text-black px-8 py-4 font-black">
              Download Resume
            </a>
          </div>

          <object 
            data="/assets/cv.pdf#view=FitH" 
            type="application/pdf"
            className="w-full h-full border-none hidden md:block" 
          >
            <iframe 
              src="/assets/cv.pdf#view=FitH" 
              className="w-full h-full border-none hidden md:block" 
              title="Czar Erson S. Isla - Resume"
            />
          </object>
        </div>

      </section>
    </main>
  );
}
