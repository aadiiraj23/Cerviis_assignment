import React from 'react'

const featuredCards = [
  {
    title: 'Nordic Cultural Pavilion',
    status: 'Design',
    desc: 'Exploration of thermal mass and rhythmic light penetration in sub-zero climates.',
    lead: 'Marcus Thorne',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80'
  }
]

const secondaryProjects = [
  { title: 'Solace Retreat', phase: 'Planning', lead: 'Elena Ross', progress: 15, icon: 'architecture' },
  { title: 'The Nexus Hub', phase: 'Construction', lead: 'James Hu', progress: 89, icon: 'foundation' },
  { title: 'Canal-Side Lofts', phase: 'Design', lead: 'Sarah Chen', progress: 42, icon: 'edit_square' }
]

const archive = [
  { id: '2023-A01', name: 'Summit Alpine Lodge', meta: 'Completed Dec 12, 2023 • Lead: Marcus Thorne', type: 'Residential' },
  { id: '2022-C14', name: 'Community Knowledge Base', meta: 'Completed Oct 05, 2022 • Lead: Elena Ross', type: 'Public Space' }
]

export default function ProjectsPage() {
  return (
    <main className="md:ml-64 pt-24 pb-32">
      <section className="px-6 pt-8 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-widest text-[11px] uppercase bg-primary-fixed px-3 py-1 rounded-full">
              Portfolio Management
            </span>
            <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface tracking-tighter max-w-2xl leading-none">
              Current Works and Archive.
            </h2>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/60"
                placeholder="Search project ID or name..."
                type="text"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 max-w-7xl mx-auto space-y-12">
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <h3 className="font-headline text-2xl font-bold">Active Development</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,30,0.04)]">
              <div className="aspect-[16/9] md:h-[420px] relative">
                <img
                  alt="Metropolis Vertical Garden"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Construction</span>
                    <span className="text-white/60 text-xs font-medium">Ref: MT-2024</span>
                  </div>
                  <h4 className="text-4xl font-headline font-bold mb-2">Metropolis Vertical Garden</h4>
                  <p className="text-white/70 max-w-md text-sm mb-6">
                    Sustainable residential complex featuring integrated bio-filtration systems and autonomous energy management.
                  </p>
                  <div className="w-full bg-white/20 h-[2px] rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-4">
              {featuredCards.map((card) => (
                <div key={card.title} className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_12px_32px_rgba(25,28,30,0.04)]">
                  <div className="aspect-square rounded-lg overflow-hidden mb-6">
                    <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
                  </div>
                  <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[9px] font-bold uppercase rounded-sm">
                    {card.status}
                  </span>
                  <h4 className="text-xl font-headline font-bold mt-3 mb-2">{card.title}</h4>
                  <p className="text-on-surface-variant text-sm mb-6">{card.desc}</p>
                  <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${card.progress}%` }}></div>
                  </div>
                  <div className="text-xs font-bold mt-3">Lead: {card.lead}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div key={project.title} className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_8px_24px_rgba(25,28,30,0.03)]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{project.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-high px-2 py-1 rounded">
                  {project.phase}
                </span>
              </div>
              <h5 className="text-lg font-headline font-bold mb-2">{project.title}</h5>
              <div className="flex items-center justify-between text-[11px] font-bold uppercase text-on-surface-variant/60 pt-4 border-t border-surface-container-low">
                <span>Lead: {project.lead}</span>
                <span className="text-primary">{project.progress}%</span>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6 pt-8 border-t border-surface-container-highest">
          <div className="flex items-center gap-3">
            <h3 className="font-headline text-xl font-bold text-on-surface-variant">Archived Projects</h3>
            <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">12 Total</span>
          </div>
          <div className="space-y-4">
            {archive.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-surface-container-low transition-colors group">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-on-surface-variant/40">{item.id}</span>
                  <div>
                    <h6 className="text-sm font-bold text-on-surface">{item.name}</h6>
                    <p className="text-[11px] text-on-surface-variant">{item.meta}</p>
                  </div>
                </div>
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">{item.type}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
