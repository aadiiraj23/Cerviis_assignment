import React from 'react'

const files = [
  { name: 'Floor_Plan_v2.pdf', size: '12.4 MB', modified: 'Modified 2h ago', icon: 'picture_as_pdf', iconColor: 'text-primary' },
  { name: 'Site_Survey_Final.docx', size: '4.8 MB', modified: 'Modified Oct 24', icon: 'contract', iconColor: 'text-secondary' },
  { name: 'Facade_Rendering_A.png', size: '28.1 MB', modified: 'Modified Oct 22', icon: 'image', iconColor: 'text-error' },
  { name: 'Material_Estimates.xlsx', size: '1.2 MB', modified: 'Modified Oct 20', icon: 'table_chart', iconColor: 'text-primary' }
]

export default function DocsPage() {
  return (
    <main className="md:ml-64 pt-24 pb-32 px-6 max-w-5xl">
      <section className="mb-10">
        <span className="text-primary font-bold tracking-widest text-[10px] uppercase block mb-2">Workspace</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2 font-headline">Documents</h2>
        <p className="text-on-surface-variant text-sm max-w-md">
          Access blueprints, contracts, and technical specifications for active projects.
        </p>
      </section>

      <div className="mb-8 flex gap-3 max-w-xl">
        <div className="flex-1 bg-surface-container-high rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
          <input className="bg-transparent border-none p-0 focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/60" placeholder="Search files..." type="text" />
        </div>
        <button className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-xl text-on-surface hover:bg-surface-container-highest transition-colors">
          <span className="material-symbols-outlined">tune</span>
        </button>
      </div>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider">Categories</h3>
          <span className="text-primary text-[11px] font-bold uppercase cursor-pointer">View All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[140px] bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
            <p className="text-sm font-bold text-on-surface mb-1">Blueprints</p>
            <p className="text-[10px] text-on-surface-variant">24 Files</p>
          </div>
          <div className="min-w-[140px] bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
            <p className="text-sm font-bold text-on-surface mb-1">Contracts</p>
            <p className="text-[10px] text-on-surface-variant">12 Files</p>
          </div>
          <div className="min-w-[140px] bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
            <p className="text-sm font-bold text-on-surface mb-1">Reports</p>
            <p className="text-[10px] text-on-surface-variant">8 Files</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-6">Recent Files</h3>
        <div className="space-y-4 max-w-3xl">
          {files.map((file) => (
            <div key={file.name} className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 group hover:bg-surface-bright transition-all shadow-sm">
              <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center">
                <span className={`material-symbols-outlined ${file.iconColor}`}>{file.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-on-surface truncate">{file.name}</p>
                <p className="text-[11px] text-on-surface-variant flex items-center gap-2">
                  <span>{file.size}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span>{file.modified}</span>
                </p>
              </div>
              <button className="text-on-surface-variant opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 mb-4 max-w-3xl">
        <div className="bg-inverse-surface text-inverse-on-surface p-6 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Storage Usage</h4>
            <p className="text-2xl font-bold mb-4">
              42.8 GB <span className="text-xs font-normal opacity-60">/ 100 GB</span>
            </p>
            <div className="w-full h-1.5 bg-white/10 rounded-full mb-6">
              <div className="h-full bg-primary-container w-[42%] rounded-full"></div>
            </div>
            <button className="bg-surface-container-lowest text-on-background px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider">
              Upgrade Space
            </button>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  )
}
