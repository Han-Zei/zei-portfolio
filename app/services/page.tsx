import React from "react";

export default function Services() {
  return (
    <main className="flex-1 flex flex-col font-sans pt-16 lg:pt-0 min-h-screen">
      <section className="py-20 px-6 lg:px-12 flex-1">
        <div className="max-w-6xl">
          <h2 className="text-5xl font-black mb-12 bg-neo-yellow text-black inline-block px-4 py-1 border-[3px] border-neo-border rotate-1">
            Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neo-box bg-neo-cyan text-black p-8 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black mb-4">Data Dashboards</h3>
              <p className="font-bold text-lg opacity-90">
                I take your messy, unstructured Excel spreadsheets and turn them into 
                interactive, high-stakes observability dashboards. (Grafana, PowerBI, AppScript)
              </p>
            </div>
            
            <div className="neo-box bg-neo-pink text-black p-8 hover:-translate-y-2 transition-transform">
              <h3 className="text-3xl font-black mb-4">Predictive Modeling</h3>
              <p className="font-bold text-lg opacity-90">
                Need to know when your servers will melt down or where accidents will happen next? 
                I train heavy-duty machine learning models to predict the future. (Python, Pandas, ARIMA)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
