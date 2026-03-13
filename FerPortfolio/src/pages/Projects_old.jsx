import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Custom LIMS for XelleScientific",
    category: "Engineering",
    tags: ["Java", "Spring Boot"],
    description: "Full-stack laboratory information management system ensuring high data integrity for biological research. Implemented complex data validation layers and audit trails.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0seDuNILtoU544OJFbgdMciDFy8tSeh-yGlrhwYDmsHvKMPafwN1lPrmsQjEiKtZOalWE6-4pIW4-pxksvtG_SWnv6OoMxGWjynXbK2H9qYzQkob6Eyar712pmbT2c0h8i253DGMqqZBO0INKBgp0kELGnAiAnheee2i6reRxPqIUB_efZ_TgxSZkXx4e0aN2FSGG2oLzl-YPWK2-bmHhVTYxdzmKrux1w4vf0UczhbRieGq8nWNXKjbQ_apSUj4JB95I5X334jNr",
    link: "View Case Study",
    filterTag: "java"
  },
  {
    id: 2,
    title: "GxP Automation with AI",
    category: "Automation",
    tags: ["Python", "NLP"],
    description: "Real-time SOP auditing and compliance system. Leverages AI to monitor operational steps and ensure adherence to strict GxP regulatory standards.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvV9MV7jkxGChTmBveJjUq4-tz-TdvCMNzThfVU4iY93YExU9N3We9bh9ZBEi4khsqe_oTdM5vwO2fw_vhtKP0lpzqFYoBduf64xUNNJu_p33Buo9uMqh0470QWB4epa9fFqylHgjVes9jng3b8dFhc34Bv1rJqBfi16BlAHKLfLB1Ud1AvK_GEMaA4qwh5Tx2LJeDBFQZzdnqezV_JnQ1DPaqeFMwaxsZ_VIIqzhs84GWjOZoYkes31YyYXUjaaXq0xrMVGxcFHsT",
    link: "View System Specs",
    filterTag: "ai"
  },
  {
    id: 3,
    title: "BioAct Composting Accelerator",
    category: "Clean Tech",
    tags: ["R&D", "Business Planning"],
    description: "Accelerating sustainable waste management through innovative biological processing R&D and strategic market scaling for large-scale composting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQgDEarb5bTHv-QyJfYxvaGrNviVOdegVSovdYHpfEg0Z_fqqVFIZC_WjMsR1HXx1q-rYxx1pfwGKKe765TCH6ho-A8zzulRutQ9vHFyA5Vax01qx9TXL1PHE8nzJtdE8OSCB0GD1TI9r7lkoA4VvmwdMmDbNTS4vlMQNy2s1dRtme8hOSWQdTXK08JYFo5fjnVsuRYbqYC3_fW-TpaSvZXB489ksPwCv3sToCbdKFff9_T0vmyYkqbY4hRMF2sFpEAeuFz0I-Z2iG",
    link: "View Business Plan",
    filterTag: "cleantech"
  }
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "java", label: "Java/Spring Boot" },
  { id: "ai", label: "AI/GxP" },
  { id: "cleantech", label: "Clean Tech" }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.filterTag === activeFilter);

  return (
    <div className="min-h-screen bg-[#f5f8f8] dark:bg-[#102222]">
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-slate-100">
            Projects <span className="text-[#0bdada]">Portfolio</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            A showcase of engineering, automation, and clean tech solutions focused on efficiency and high-integrity data systems.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.id
                  ? 'bg-[#0bdada] text-[#102222] font-bold'
                  : 'bg-[#0bdada]/10 hover:bg-[#0bdada]/20 text-[#0bdada] border border-[#0bdada]/20'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-[#0bdada]/40 transition-all cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#102222]/80 to-transparent z-10"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="bg-[#0bdada]/20 backdrop-blur-md text-[#0bdada] text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#0bdada] transition-colors">
                  {project.title}
                </h3>

                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold text-slate-500 bg-slate-800 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-[#0bdada] text-xs font-bold uppercase tracking-widest">
                    {project.link}
                  </span>
                  <span className="material-symbols-outlined text-[#0bdada] text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-32 rounded-3xl bg-[#0bdada]/5 border border-[#0bdada]/20 p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 bg-[#0bdada]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-64 bg-[#0bdada]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white">
              Interested in working together?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Whether it's a complex software architecture or a sustainable engineering challenge, I'm ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0bdada] text-[#102222] font-bold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(11,218,218,0.4)]">
                Get in Touch
              </button>
              <button className="bg-transparent border border-[#0bdada]/40 text-[#0bdada] font-bold px-8 py-4 rounded-xl hover:bg-[#0bdada]/10 transition-all">
                Download CV
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;