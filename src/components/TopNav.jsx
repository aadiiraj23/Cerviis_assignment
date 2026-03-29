import React from 'react'

export default function TopNav(){
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf8f9] dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-8 h-16 w-full max-w-none border-b border-outline-variant/10">
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tighter text-[#323235] dark:text-slate-100 font-headline">Architect</span>
        <div className="hidden md:flex gap-6 items-center">
          <a className="font-manrope tracking-tight font-medium text-[#515f74] dark:text-white border-b-2 border-[#515f74] pb-1" href="#">Dashboard</a>
          <a className="font-manrope tracking-tight font-medium text-[#5f5f61] dark:text-slate-400 hover:text-[#323235] transition-colors duration-200" href="#">Projects</a>
          <a className="font-manrope tracking-tight font-medium text-[#5f5f61] dark:text-slate-400 hover:text-[#323235] transition-colors duration-200" href="#">Analytics</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 transition-colors duration-200 rounded-md scale-95 active:opacity-80">
          <span className="material-symbols-outlined text-[#515f74] dark:text-slate-300">notifications</span>
        </button>
        <button className="p-2 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 transition-colors duration-200 rounded-md scale-95 active:opacity-80">
          <span className="material-symbols-outlined text-[#515f74] dark:text-slate-300">settings</span>
        </button>
        <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden ml-2">
          <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaBAADuekYnNwClQwl5z7kyKz-draBT4M9HmO1cUAt95l_KVXIykhloJ2C7PviKJ87JY6nS9J9fyIELJKRzkKr4nwTV3lFqA8ErslqslrFFacYxXJMbLTp9A-zVBvbwk2Na_bDsKA7WrDfU_TaA0fTSWrNRuuPQ_HBxxLUFLI5F-L2NMHahpABCjPhaIUpvrHi0kNU2VdWlst6XY05fHVcRbyshIUY7pLVIssVifM7gJfWLzLq7JM-8YNNYeWICbmmGEK8xcVPNII" />
        </div>
      </div>
    </nav>
  )
}
