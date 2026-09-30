export default function Experience() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen pb-20">
      <section className="py-20 px-6 lg:px-12 flex-1">
        <div className="max-w-6xl grid grid-cols-1 xl:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="text-5xl font-black mb-12 bg-neo-pink text-black inline-block px-4 py-1 border-[3px] border-neo-border -rotate-1">
              Education
            </h2>
            
            <div className="neo-box bg-background p-6 mb-8 neo-hover">
              <h3 className="text-2xl font-black mb-2">BS in Computer Science</h3>
              <p className="font-bold text-lg mb-2 text-neo-purple">Major in Data Mining</p>
              <p className="font-bold text-md mb-2">Isabela State University, Echague Main Campus</p>
              <p className="font-medium mt-4">
                Spent four years learning how to build complex algorithms, traverse binary trees, and survive on 3 hours of sleep and instant coffee. Mastered the art of turning raw, messy data into structured intelligence.
              </p>
              <div className="flex justify-between items-center mt-6 border-t-[3px] border-neo-border pt-4">
                <span className="neo-box px-3 py-1 font-bold text-sm bg-white text-black">2021 - 2025</span>
                <span className="neo-box px-4 py-1 font-black text-sm bg-neo-yellow text-black transform rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  GWA: 1.60 🏆
                </span>
              </div>
            </div>

            <div className="neo-box bg-background p-6 mb-8 neo-hover">
              <h3 className="text-2xl font-black mb-2">Senior High School (ICT Strand)</h3>
              <p className="font-bold text-lg mb-1 text-neo-cyan">AMA Computer College - Santiago City Campus</p>
              <p className="font-bold text-sm mb-4 bg-neo-yellow text-black inline-block px-2 border-[2px] border-black -rotate-1">Specialized in Java Programming</p>
              <p className="font-medium mt-2">
                Officially, I was in the ICT strand specializing in Java Programming. Unofficially, I didn't learn a single thing about Java here (lol). But hey, I learned how to survive on energy drinks, and the high honors look great on paper!
              </p>
              <div className="flex justify-between items-center mt-6 border-t-[3px] border-neo-border pt-4">
                <span className="neo-box px-3 py-1 font-bold text-sm bg-white text-black">Graduated 2021</span>
                <span className="neo-box px-4 py-1 font-black text-sm bg-neo-green text-black transform -rotate-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  AVG: 98.0 (High Honors) 🥇
                </span>
              </div>
            </div>

          </div>

          {/* Experience */}
          <div>
            <h2 className="text-5xl font-black mb-12 bg-neo-yellow text-black inline-block px-4 py-1 border-[3px] border-neo-border rotate-1">
              Experience
            </h2>
            <div className="space-y-8">
              
              {/* CHED */}
              <div className="neo-box bg-background p-6 neo-hover relative">
                <div className="absolute -top-4 -right-4 bg-neo-pink text-black font-black px-3 py-1 border-[3px] border-black rotate-6 text-sm animate-pulse shadow-[0_0_15px_var(--color-neo-pink)]">
                  Most Recent
                </div>
                <h3 className="text-2xl font-black mb-1">Project Technical Staff II</h3>
                <p className="font-bold text-lg mb-4 text-neo-purple">Commission on Higher Education (CHED)</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="neo-box px-3 py-1 font-bold text-sm bg-white text-black">May 2026 –</span>
                  <span className="neo-box px-3 py-1 font-black text-sm bg-black text-neo-green border-[2px] border-neo-green shadow-[0_0_10px_var(--color-neo-green)] animate-pulse">
                    PRESENT
                  </span>
                </div>
                <p className="font-medium text-lg">
                  Currently steering technical projects, wrangling data, and keeping higher education tech operations running smoothly. Still trying to explain to non-tech people that pressing harder on the keyboard doesn't make the code run faster.
                </p>
              </div>

              {/* Amdocs */}
              <div className="neo-box bg-background p-6 neo-hover">
                <h3 className="text-2xl font-black mb-1">Software Engineer Intern</h3>
                <p className="font-bold text-lg mb-4 text-neo-cyan">Amdocs Philippines</p>
                <span className="neo-box px-3 py-1 font-bold text-sm inline-block mb-4 bg-white text-black">April – July 2025</span>
                <p className="font-medium text-lg">
                  Configured monitoring alerts for the Pay2Reload system. Used PostgreSQL for alert data storage and Grafana dashboards to keep an eye on the Four Golden Signals. Basically, I made sure the system didn't spontaneously combust on a Friday afternoon without us knowing.
                </p>
              </div>

              {/* PESO */}
              <div className="neo-box bg-background p-6 neo-hover">
                <h3 className="text-2xl font-black mb-1">Government Intern (GIP)</h3>
                <p className="font-bold text-lg mb-4 text-neo-pink">Public Employment Service Office</p>
                <span className="neo-box px-3 py-1 font-bold text-sm inline-block mb-4 bg-white text-black">Aug 2023 – Aug 2024</span>
                <p className="font-medium text-lg">
                  Performed deep data cleaning, organization, and validation for CHED-TPD scholar records in Santiago City. Hunted down rogue data entries, fixed massive inconsistencies, and brought order to chaotic official datasets.
                </p>
              </div>

            </div>
          </div>

        </div>

        </section>
    </main>
  );
}
