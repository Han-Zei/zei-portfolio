import projects from "../../data/projects.json";
import ProjectButton from "../components/ProjectButton";

export default function Projects() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen">
      <section className="py-20 px-6 lg:px-12 flex-1">
        <div className="max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <h2 className="text-5xl font-black bg-neo-green text-black inline-block px-4 py-1 border-[3px] border-neo-border rotate-1">
              Major Projects
            </h2>
            <div className="neo-box bg-background px-4 py-2 font-bold text-lg -rotate-2">
              {projects.length} Projects
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`neo-box ${project.color} text-black p-6 flex flex-col h-full neo-hover`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-black">{project.title}</h3>
                </div>
                <p className="text-lg font-medium mb-6 flex-1 bg-white text-black border-[3px] border-black p-4 rounded-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white text-black border-[2px] border-black rounded-full font-bold text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <ProjectButton className="neo-button neo-button-active bg-white text-black flex-1 py-2 text-center text-lg w-full">
                    View
                  </ProjectButton>
                  <ProjectButton className="neo-button neo-button-active bg-black text-white flex-1 py-2 text-center text-lg w-full">
                    Source
                  </ProjectButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
