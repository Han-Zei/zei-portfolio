import Image from "next/image";
import Link from "next/link";
import projects from "../data/projects.json";
import ProjectButton from "./components/ProjectButton";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0">
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 lg:px-12 flex items-center justify-center">
        <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row gap-16 items-center lg:items-center justify-between">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <div className="neo-box bg-neo-yellow text-black px-4 py-2 font-bold transform -rotate-2">
              Data Analyst | Vibe Coder | CS Graduate
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mt-6">
              Hello, I'm <br className="lg:hidden" />
              <span className="inline-flex flex-wrap gap-2 lg:gap-3 mt-4 lg:mt-0 lg:ml-3">
                <span className="neo-box bg-neo-cyan text-black px-4 py-1 transform -rotate-3 hover:rotate-3 transition-transform cursor-pointer">Czar</span>
                <span className="neo-box bg-neo-pink text-black px-4 py-1 transform rotate-2 hover:-rotate-2 transition-transform cursor-pointer">Erson</span>
                <span className="neo-box bg-neo-yellow text-black px-4 py-1 transform -rotate-2 hover:rotate-2 transition-transform cursor-pointer">S.</span>
                <span className="neo-box bg-neo-green text-black px-4 py-1 transform rotate-3 hover:-rotate-3 transition-transform cursor-pointer">Isla</span>
              </span>
            </h1>
            <p className="text-xl font-medium border-l-[4px] border-neo-border pl-4">
              I don't just write code; I vibe with it. I turn chaotic datasets into pristine dashboards and let the logic flow naturally. If the vibes are off, the code doesn't compile.
              <br/><br/>
              When I'm not interrogating databases until they confess their secrets, I'm probably deep in a flow state, letting AI handle the boilerplate while I orchestrate the architecture. Welcome to my digital sandbox.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="/resume" className="neo-button neo-button-active neo-hover bg-neo-pink text-black px-8 py-4 text-xl">
                View Resume &rarr;
              </a>
            </div>
          </div>

          <div className="flex-none w-full max-w-sm flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] max-h-[500px] neo-box p-3 bg-white transform rotate-3 neo-hover group">
              <div className="relative w-full h-full border-[3px] border-neo-border overflow-hidden rounded bg-gray-200">
                <Image 
                  src="/profile.jpg" 
                  alt="Czar Erson" 
                  fill 
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -left-8 neo-box bg-neo-cyan text-black px-4 py-2 font-black transform -rotate-6 text-sm z-10 shadow-lg">
                404: Face Not Found
              </div>
              <div className="absolute -top-4 -right-4 neo-box bg-neo-green text-black px-3 py-1 font-bold transform rotate-6 text-xs whitespace-nowrap z-10">
                (Looking for bugs in my code &darr;)
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Divider Marquee */}
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
      <section className="py-24 px-6 lg:px-12 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-neo-green text-black inline-block px-6 py-2 border-[4px] border-neo-border rotate-2 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] max-w-full">
              Featured Builds
            </h2>
            <Link href="/projects" className="neo-button neo-button-active bg-white text-black px-6 py-3 font-black text-lg shadow-[4px_4px_0px_0px_rgba(255,0,255,1)] whitespace-nowrap">
              View All Archives &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <div key={project.id} className={`neo-box ${project.color} text-black p-0 flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:rotate-1`}>
                
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
                    &gt; {project.description}
                  </p>
                  
                  <ProjectButton className="neo-button neo-button-active bg-black text-white py-3 text-center font-black uppercase tracking-wider text-sm mt-auto border-2 border-black w-full">
                    Execute / View
                  </ProjectButton>
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
                className={`neo-box ${skill.color} px-6 py-4 font-black text-xl md:text-3xl hover:scale-110 transition-transform cursor-crosshair
                  ${index % 2 === 0 ? 'rotate-2 hover:-rotate-3' : '-rotate-2 hover:rotate-3'}
                `}
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

    </main>
  );
}
