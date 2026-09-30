export default function Contact() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen">
      <section className="py-20 px-6 lg:px-12 flex-1 flex items-center">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="text-center xl:text-left neo-box bg-background p-8 lg:p-12 flex flex-col justify-center">
            
            <div className="mb-4">
              <h2 className="text-5xl md:text-6xl font-black bg-neo-cyan text-black inline-block px-4 py-2 border-[3px] border-neo-border rotate-2">
                Slide Into My Terminal
              </h2>
            </div>
            
            <p className="text-xl font-medium mt-6 mb-12 max-w-xl mx-auto xl:mx-0 border-b-[4px] border-neo-border pb-6">
              Got a messy database that needs therapy? A dashboard that needs building? Or just want to argue about whether tabs or spaces are better? Hit me up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-start font-bold text-xl">
              
              <a href="tel:+639692954102" className="neo-box bg-white text-black p-4 flex flex-col gap-2 hover:bg-neo-yellow transition-colors group overflow-hidden">
                <div className="flex items-center gap-3">
                  <span className="neo-box bg-black text-white p-2 group-hover:-rotate-6 transition-transform">📞</span>
                  <span className="font-black text-xl leading-tight break-words">Call Me</span>
                </div>
                <span className="text-sm font-medium opacity-80">(Only if the servers are down)</span>
                <span className="mt-2 text-lg text-neo-purple">+63 969 295 4102</span>
              </a>

              <a href="mailto:czrisla@gmail.com" className="neo-box bg-white text-black p-4 flex flex-col gap-2 hover:bg-neo-pink transition-colors group overflow-hidden">
                <div className="flex items-center gap-3">
                  <span className="neo-box bg-black text-white p-2 group-hover:rotate-6 transition-transform">✉️</span>
                  <span className="font-black text-xl leading-tight break-words">Email Me</span>
                </div>
                <span className="text-sm font-medium opacity-80">(For job offers and tech memes)</span>
                <span className="mt-2 text-base lg:text-lg text-neo-purple break-all">czrisla@gmail.com</span>
              </a>

              <a href="https://www.linkedin.com/in/czar-erson-isla-b689b0274/" target="_blank" rel="noreferrer" className="neo-box bg-white text-black p-4 flex flex-col gap-2 hover:bg-neo-cyan transition-colors group overflow-hidden">
                <div className="flex items-center gap-3">
                  <span className="neo-box bg-black text-white p-2 group-hover:-rotate-6 transition-transform">🔗</span>
                  <span className="font-black text-xl leading-tight break-words">Professional Stalking</span>
                </div>
                <span className="text-sm font-medium opacity-80">(Connect on LinkedIn)</span>
                <span className="mt-2 text-lg text-neo-purple">LinkedIn Profile &rarr;</span>
              </a>

              <a href="https://github.com/Han-Zei" target="_blank" rel="noreferrer" className="neo-box bg-white text-black p-4 flex flex-col gap-2 hover:bg-neo-green transition-colors group overflow-hidden">
                <div className="flex items-center gap-3">
                  <span className="neo-box bg-black text-white p-2 group-hover:rotate-6 transition-transform">💻</span>
                  <span className="font-black text-xl leading-tight break-words">Judge My Code</span>
                </div>
                <span className="text-sm font-medium opacity-80">(Check out my GitHub)</span>
                <span className="mt-2 text-lg text-neo-purple">GitHub Profile &rarr;</span>
              </a>

            </div>
          </div>

          {/* Right Column: Fake Terminal */}
          <div className="hidden xl:flex flex-col neo-box bg-[#0a0a0a] text-neo-green font-mono p-0 h-full min-h-[500px] transform -rotate-1 border-[3px] border-neo-border shadow-[8px_8px_0px_0px_var(--color-neo-pink)]">
            
            {/* Terminal Header */}
            <div className="border-b-[3px] border-neo-border p-3 flex gap-2 bg-[#1a1a1a]">
              <div className="w-4 h-4 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
              <div className="w-4 h-4 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
              <div className="w-4 h-4 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
              <div className="ml-4 font-bold text-gray-400 text-sm flex items-center">czar@portfolio:~</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 flex-1 flex flex-col gap-3 text-base">
              <p><span className="text-neo-pink">czar@portfolio</span><span className="text-white">:</span><span className="text-neo-cyan">~</span>$ ./check_status.sh</p>
              <p className="text-gray-400">Loading internal diagnostic modules...</p>
              <p>[<span className="text-neo-yellow">OK</span>] Coffee levels at 98% capacity.</p>
              <p>[<span className="text-neo-yellow">OK</span>] IDE Theme set to Dark (obviously).</p>
              <p>[<span className="text-neo-yellow">OK</span>] Bugs remaining: 1 (it's documented as a feature).</p>
              
              <p className="mt-6"><span className="text-neo-pink">czar@portfolio</span><span className="text-white">:</span><span className="text-neo-cyan">~</span>$ ping future_employer.exe</p>
              <p className="animate-pulse">Pinging... waiting for response...</p>
              
              <p className="mt-6 text-neo-pink font-bold drop-shadow-[0_0_5px_var(--color-neo-pink)]">
                Warning: Inbox is currently empty. Please send an email to establish a handshake.
              </p>
              
              <div className="mt-auto pt-8 flex gap-2 items-center">
                <span className="text-neo-pink">czar@portfolio</span><span className="text-white">:</span><span className="text-neo-cyan">~</span>$
                <span className="w-3 h-6 bg-neo-green animate-pulse inline-block"></span>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    </main>
  );
}
