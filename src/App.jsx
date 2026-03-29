import React from 'react'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import Dashboard from './Dashboard'

export default function App(){
  return (
    <div className="bg-background text-on-surface">
      <TopNav />
      <SideNav />
      
      {/* Main Canvas */}
      <main className="md:ml-64 pt-24 pb-12 px-8">
        {/* Perspective Header */}
        <header className="mb-12 perspective-header">
          <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-2 font-headline">Optimized performance.</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl font-body">Architecture meets high-performance engineering. Monitor your workspace metrics with surgical precision.</p>
        </header>

        {/* Performance Analytics Bento Grid */}
        <Dashboard />
      </main>

      {/* Contextual FAB */}
      <div className="fixed bottom-8 right-8">
        <button className="w-14 h-14 rounded-full bg-primary text-on-primary shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
        </button>
      </div>
    </div>
  )
}
