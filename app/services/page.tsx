import React from "react";

export default function Services() {
  const services = [
    {
      title: "Data Dashboards",
      description: "I take your messy, unstructured Excel spreadsheets and turn them into interactive, high-stakes observability dashboards. If it has rows and columns, I can make it look like a spaceship control panel.",
      stack: "Grafana | PowerBI | AppScript",
      color: "bg-neo-cyan",
      rotation: "rotate-1",
      icon: "📊"
    },
    {
      title: "Predictive Modeling",
      description: "Need to know when your servers will melt down or where accidents will happen next? I train heavy-duty machine learning models to predict the future. Crystal balls are for amateurs.",
      stack: "Python | Pandas | ARIMA",
      color: "bg-neo-pink",
      rotation: "-rotate-2",
      icon: "🔮"
    },
    {
      title: "Full-Stack Web Engineering",
      description: "I build blazing fast, wildly interactive web applications. You want boring corporate templates? Hire someone else. You want a chaotic, Neobrutalist masterpiece that converts? You're in the right place.",
      stack: "Next.js | React | Tailwind",
      color: "bg-neo-yellow",
      rotation: "rotate-2",
      icon: "⚡"
    },
    {
      title: "Database Architecting",
      description: "I interrogate databases until they confess their secrets. Designing schemas that actually scale without melting your credit card on AWS/GCP bills.",
      stack: "PostgreSQL | MySQL | Firebase",
      color: "bg-neo-green",
      rotation: "-rotate-1",
      icon: "🗄️"
    }
  ];

  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen relative overflow-hidden">
      
      {/* Decorative background stripes */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)' }}>
      </div>

      <section className="py-20 px-6 lg:px-12 flex-1 z-10 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-6xl md:text-7xl font-black mb-4 bg-neo-yellow text-black inline-block px-6 py-2 border-[4px] border-black -rotate-2 hover:rotate-0 transition-transform">
                My Arsenal
              </h2>
              <p className="text-xl font-bold max-w-2xl mt-4 border-l-[4px] border-neo-pink pl-4 bg-background/80 backdrop-blur-sm">
                I don't just write code. I solve expensive problems with chaotic energy and robust architecture. Here is what I can do for you.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`neo-box ${service.color} text-black p-8 transform ${service.rotation} hover:rotate-0 transition-all hover:scale-[1.02] hover:-translate-y-2 group relative`}
              >
                {/* Decorative staple/tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-black/10 backdrop-blur-sm border-2 border-black/20 transform rotate-2"></div>
                
                <div className="flex items-center gap-4 mb-6 border-b-[3px] border-black pb-4">
                  <span className="text-5xl group-hover:scale-125 transition-transform">{service.icon}</span>
                  <h3 className="text-3xl lg:text-4xl font-black tracking-tight leading-none uppercase">{service.title}</h3>
                </div>
                
                <p className="font-bold text-lg leading-relaxed mb-8 bg-white/50 p-4 border-[2px] border-black rounded-sm">
                  {service.description}
                </p>
                
                <div className="inline-block bg-black text-white px-4 py-2 font-black text-sm uppercase tracking-widest border-2 border-black transform -rotate-1 group-hover:bg-white group-hover:text-black transition-colors">
                  {service.stack}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <a href="/contact" className="neo-button neo-button-active bg-black text-white px-10 py-6 text-2xl font-black uppercase tracking-wider hover:bg-neo-green hover:text-black transition-colors animate-pulse">
              Hire Me Immediately &rarr;
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
