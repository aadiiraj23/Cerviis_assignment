import React from 'react'

export default function SideNav(){
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/10 bg-[#fcf8f9] dark:bg-slate-950 hidden md:block">
      <div className="flex flex-col p-4 pt-20 h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined">architecture</span>
          </div>
          <div>
            <div className="text-lg font-bold text-[#323235] dark:text-white font-headline leading-none">Studio Alpha</div>
            <div className="text-xs text-on-surface-variant font-medium">Premium Tier</div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 font-manrope text-sm font-medium bg-[#d5e3fd] dark:bg-[#006592]/20 text-[#455367] dark:text-blue-200 rounded-md p-3 transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            Overview
          </a>
          <a className="flex items-center gap-3 font-manrope text-sm font-medium text-[#5f5f61] dark:text-slate-400 p-3 my-1 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">group</span>
            Team
          </a>
          <a className="flex items-center gap-3 font-manrope text-sm font-medium text-[#5f5f61] dark:text-slate-400 p-3 my-1 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Resources
          </a>
          <a className="flex items-center gap-3 font-manrope text-sm font-medium text-[#5f5f61] dark:text-slate-400 p-3 my-1 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">description</span>
            Documents
          </a>
          <a className="flex items-center gap-3 font-manrope text-sm font-medium text-[#5f5f61] dark:text-slate-400 p-3 my-1 hover:bg-[#e4e2e5] dark:hover:bg-slate-800 rounded-md transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </nav>
        <button className="mt-auto w-full bg-primary text-on-primary py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-sm">add</span>
          New Project
        </button>
      </div>
    </aside>
  )
}
