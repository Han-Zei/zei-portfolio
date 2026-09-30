const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf-8');

const targetStart = content.indexOf('{/* Featured Projects Preview */}');
const targetEnd = content.indexOf('</main>');

const replacement = `      {/* Divider Marquee */}
      <div className="w-full bg-neo-yellow border-y-[3px] border-neo-border overflow-hidden py-3 relative z-10 flex">
        <div className="animate-marquee whitespace-nowrap flex font-black text-2xl uppercase tracking-widest text-black">
          <span className="mx-4">Data Analyst</span> &bull; 
          <span className="mx-4">Vibe Coder</span> &bull; 
          <span className="mx-4">Dashboards</span> &bull; 
          <span className="mx-4">Predictive Analytics</span> &bull; 
          <span className="mx-4">SQL Therapist</span> &bull; 
          <span className="mx-4">Data Analyst</span> &bull; 
          <span className="mx-4">Vibe Coder</span> &bull; 
          <span className="mx-4">Dashboards</span> &bull; 
          <span className="mx-4">Predictive Analytics</span> &bull; 
          <span className="mx-4">SQL Therapist</span> &bull;
        </div>
      </div>

      {/* Featured Projects Preview */}
      <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-6xl font-black bg-neo-green text-black inline-block px-6 py-2 border-[4px] border-neo-border rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              Featured Builds
            </h2>
            <Link href="/projects" className="neo-button neo-button-active bg-white text-black px-6 py-3 font-black text-lg shadow-[4px_4px_0px_0px_rgba(255,0,255,1)]">
              View All Archives &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <div key={project.id} className={\`neo-box \${project.color} text-black p-0 flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:rotate-1\`}>
                
                {/* Fake Window Header */}
                <div className="border-b-[3px] border-black p-3 flex justify-between items-center bg-white/50">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 rounded-full bg-neo-pink border-2 border-black"></div>
                    <div className="w-4 h-4 rounded-full bg-neo-yellow border-2 border-black"></div>
                    <div className="w-4 h-4 rounded-full bg-neo-green border-2 border-black"></div>
                  </div>
                  <span className="font-mono text-sm font-bold opacity-70">bash: ./run.sh</span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                  </div>
                  <p className="text-md font-bold mb-8 flex-1 opacity-90 leading-relaxed font-mono">
                    > {project.description}
                  </p>
                  
                  <a href={project.link} target="_blank" rel="noreferrer" className="neo-button neo-button-active bg-black text-white py-3 text-center font-black uppercase tracking-wider text-sm mt-auto border-2 border-black">
                    Execute / View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-24 px-6 lg:px-12 bg-background border-t-[4px] border-neo-border overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black bg-neo-purple text-white inline-block px-6 py-2 border-[4px] border-neo-border -rotate-2 mb-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Tech Arsenal
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl">
            {[
              {name: 'Python', color: 'bg-neo-yellow text-black'}, 
              {name: 'SQL', color: 'bg-neo-cyan text-black'}, 
              {name: 'PostgreSQL', color: 'bg-neo-green text-black'}, 
              {name: 'React', color: 'bg-neo-pink text-black'}, 
              {name: 'Next.js', color: 'bg-white text-black'}, 
              {name: 'Tailwind CSS', color: 'bg-neo-cyan text-black'}, 
              {name: 'Data Mining', color: 'bg-neo-purple text-white'},
              {name: 'Grafana', color: 'bg-neo-yellow text-black'}
            ].map((skill, index) => (
              <div 
                key={index} 
                className={\`neo-box \${skill.color} px-6 py-4 font-black text-xl md:text-3xl hover:scale-110 transition-transform cursor-crosshair
                  \${index % 2 === 0 ? 'rotate-2 hover:-rotate-3' : '-rotate-2 hover:rotate-3'}
                \`}
              >
                {skill.name}
              </div>
            ))}
          </div>
          
          <Link href="/stack" className="mt-16 font-bold text-xl hover:underline underline-offset-8 decoration-4 decoration-neo-pink">
            Inspect Full Stack Details &rarr;
          </Link>
        </div>
      </section>

    `;

if (targetStart !== -1 && targetEnd !== -1) {
  content = content.substring(0, targetStart) + replacement + content.substring(targetEnd);
  fs.writeFileSync('app/page.tsx', content, 'utf-8');
  console.log("Success");
}
