import React from 'react'

const featuredProjects = [
  {
    title: 'The Helix Pavilion',
    location: 'Singapore · 2023',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Sky Garden Residency',
    location: 'Vancouver · 2022',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80'
  }
]

export default function ProfilePage() {
  return (
    <main className="md:ml-64 px-6 pt-24 pb-32">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,30,0.06)] ghost-border">
                <img
                  alt="Marcus Chen Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary-fixed text-primary px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="font-label text-xs font-bold tracking-widest uppercase">Principal Status</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
                <div className="font-headline text-3xl font-extrabold text-primary mb-1">14+</div>
                <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Years Experience</div>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl ghost-border">
                <div className="font-headline text-3xl font-extrabold text-primary mb-1">128</div>
                <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Completed Designs</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 pt-4">
            <div className="mb-12">
              <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs mb-4 block">Executive Leadership</span>
              <h1 className="font-headline text-6xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-none mb-6">
                Marcus <br />
                Chen.
              </h1>
              <p className="font-headline text-2xl text-on-surface-variant font-light max-w-xl">
                Synthesizing structural integrity with <span className="text-on-surface font-bold italic">visionary minimalism</span>.
              </p>
            </div>

            <div className="space-y-12">
              <div className="max-w-2xl">
                <h2 className="font-headline text-sm uppercase tracking-[0.2em] text-outline mb-4">The Philosophy</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                  As Principal Architect, I lead the intersection of sustainable urban development and high-density luxury residential
                  design. My work prioritizes the precision of the blueprint, where every millimeter serves both structural and
                  aesthetic purpose.
                </p>
              </div>

              <div className="bg-surface-container-low p-8 rounded-xl flex flex-wrap gap-8 md:gap-12 items-center">
                <div>
                  <div className="font-headline text-4xl font-bold text-on-surface mb-1">08</div>
                  <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Active Projects</div>
                </div>
                <div className="w-[1px] h-12 bg-surface-container-highest hidden md:block"></div>
                <div>
                  <div className="font-headline text-4xl font-bold text-on-surface mb-1">$420M+</div>
                  <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Portfolio Value</div>
                </div>
                <div className="w-[1px] h-12 bg-surface-container-highest hidden md:block"></div>
                <div>
                  <div className="font-headline text-4xl font-bold text-on-surface mb-1">12</div>
                  <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Design Awards</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="blue-gradient-cta text-on-primary px-10 py-4 rounded-md font-label text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
                  View Portfolio
                </button>
                <button className="bg-surface-container-highest text-on-surface-variant px-10 py-4 rounded-md font-label text-xs font-bold uppercase tracking-widest hover:bg-surface-dim transition-colors active:scale-95">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-headline text-sm uppercase tracking-[0.2em] text-outline mb-2">Selected Works</h3>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface">Architectural Landmarks</h2>
            </div>
            <div className="hidden md:block">
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Scroll to explore</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 ghost-border relative">
                  <img alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={project.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-white font-label text-xs font-bold tracking-widest uppercase">View Case Study</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-xl font-bold text-on-surface">{project.title}</h4>
                    <p className="font-body text-sm text-on-surface-variant">{project.location}</p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
