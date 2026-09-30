export default function Stack() {
  const stackCategories = [
    {
      title: "The Heavy Lifters (Data & Backend)",
      color: "bg-neo-pink",
      skills: ['Python', 'SQL', 'PostgreSQL', 'MySQL', 'PHP', 'Laravel', 'Data Mining', 'ETL Pipelines']
    },
    {
      title: "The Pretty Stuff (Frontend)",
      color: "bg-neo-cyan",
      skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
    },
    {
      title: "Tools of the Trade",
      color: "bg-neo-yellow",
      skills: ['Git & GitHub', 'Grafana', 'VS Code', 'Terminal / CLI', 'System Design', 'Agile / Scrum']
    }
  ];

  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen">
      <section className="py-20 px-6 lg:px-12 flex-1">
        <div className="max-w-6xl">
          <h2 className="text-5xl font-black mb-12 bg-neo-purple text-white inline-block px-4 py-1 border-[3px] border-neo-border -rotate-1">
            Tech Stack
          </h2>
          
          <div className="space-y-12">
            {stackCategories.map((cat, idx) => (
              <div key={idx} className="neo-box bg-background p-8">
                <h3 className={`text-2xl font-black mb-6 ${cat.color} text-black inline-block px-4 py-1 border-[3px] border-neo-border ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="neo-box bg-white text-black px-6 py-3 font-bold text-lg neo-hover hover:bg-black hover:text-white transition-colors cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
