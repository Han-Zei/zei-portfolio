import React from "react";

export default function Certifications() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen pb-20">
      <section className="py-20 px-6 lg:px-12 flex-1">
        
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-5xl font-black mb-12 bg-neo-cyan text-black inline-block px-4 py-1 border-[3px] border-neo-border -rotate-1">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { title: "Machine Learning for Absolute Beginners", date: "July 2025", tag: "AI / ML" },
              { title: "The DevOps Essential", date: "July 2025", tag: "Cloud" },
              { title: "Grafana Beginner to Advanced Crash Course", date: "July 2025", tag: "DevOps" },
              { title: "GitHub Copilot Beginner to Pro", date: "June 2025", tag: "AI Tools" },
              { title: "ChatGPT / AI: Ethical Intelligence", date: "June 2025", tag: "Ethics" }
            ].map((cert, idx) => (
              <div key={idx} className="neo-box bg-background p-8 hover:-translate-y-2 transition-transform relative group flex flex-col justify-between">
                <div className="absolute -top-3 -right-3 neo-box bg-neo-yellow text-black px-3 py-1 text-sm font-black rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 group-hover:rotate-[20deg] transition-transform">
                  UDEMY
                </div>
                <h3 className="text-2xl font-black mb-6 pr-4">{cert.title}</h3>
                <div className="flex justify-between items-end mt-auto pt-6 border-t-[3px] border-neo-border">
                  <span className="text-sm font-bold bg-white text-black px-2 py-1 border-[2px] border-black">{cert.date}</span>
                  <span className="text-sm font-black text-neo-purple">{cert.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 neo-box bg-[#111] text-white">
            <p className="font-bold text-lg border-l-[4px] border-neo-pink pl-4 opacity-90">
              * These certificates are locked securely inside a corporate portal. The PDFs are held hostage, but the knowledge is in my brain. Trust me bro.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
