import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TopNav(){
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf8f9] dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-8 h-16 w-full max-w-none border-b border-outline-variant/10">
      <div className="flex items-center">
        <NavLink to="/team" className="text-xl font-bold tracking-tighter text-[#323235] dark:text-slate-100 font-headline">
          Architect
        </NavLink>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 transition-colors duration-200 rounded-md scale-95 active:opacity-80">
          <span className="material-symbols-outlined text-[#515f74] dark:text-slate-300">notifications</span>
        </button>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `p-2 transition-colors duration-200 rounded-md scale-95 active:opacity-80 ${
              isActive
                ? 'bg-[#d5e3fd] dark:bg-[#006592]/20'
                : 'hover:bg-[#e4e2e5] dark:hover:bg-slate-800'
            }`
          }
          aria-label="Open settings"
        >
          <span className="material-symbols-outlined text-[#515f74] dark:text-slate-300">settings</span>
        </NavLink>
        <NavLink to="/profile" className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden ml-2 block" aria-label="Open profile">
          <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBAADuekYnNwClQwl5z7kyKz-draBT4M9HmO1cUAt95l_KVXIykhloJ2C7PviKJ87JY6nS9J9fyIELJKRzkKr4nwTV3lFqA8ErslqslrFFacYxXJMbLTp9A-zVBvbwk2Na_bDsKA7WrDfU_TaA0fTSWrNRuuPQ_HBxxLUFLI5F-L2NMHahpABCjPhaIUpvrHi0kNU2VdWlst6XY05fHVcRbyshIUY7pLVIssVifM7gJfWLzLq7JM-8YNNYeWICbmmGEK8xcVPNII" />
        </NavLink>
      </div>
    </nav>
  )
}
