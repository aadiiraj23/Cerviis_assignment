import React from 'react'
import { NavLink } from 'react-router-dom'

const members = [
  {
    name: 'Marcus Chen',
    role: 'Principal Architect',
    tag: 'Lead',
    location: 'New York',
    projects: '8 Active Projects',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=420&q=80'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Structural Engineer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=420&q=80'
  },
  {
    name: 'Jameson Wu',
    role: 'BIM Specialist',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=420&q=80'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Interior Designer',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=420&q=80'
  }
]

export default function TeamPage() {
  return (
    <main className="md:ml-64 pt-24 pb-32 px-6 max-w-3xl">
      <div className="mb-10 space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-[11px] font-bold tracking-widest uppercase text-on-surface-variant opacity-60">Directory</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">Team</h2>
          </div>
          <button className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">person_add</span>
          </button>
        </div>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </div>
          <input
            className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50"
            placeholder="Find a collaborator..."
            type="text"
          />
        </div>
      </div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div
            key={member.name}
            className="p-5 rounded-xl bg-surface-container-lowest shadow-sm group transition-all hover:bg-surface-bright border border-transparent hover:border-outline-variant/15"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img alt={member.name} className="w-14 h-14 rounded-xl object-cover" src={member.image} />
                {index === 0 && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary border-2 border-white rounded-full"></div>}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    {index === 0 ? (
                      <NavLink to="/profile" className="font-bold text-on-surface tracking-tight hover:text-primary transition-colors">
                        {member.name}
                      </NavLink>
                    ) : (
                      <h3 className="font-bold text-on-surface tracking-tight">{member.name}</h3>
                    )}
                    <p className="text-xs text-on-surface-variant">{member.role}</p>
                  </div>
                  {member.tag ? (
                    <span className="px-2 py-1 rounded-full bg-secondary-fixed text-primary text-[10px] font-bold uppercase tracking-tighter">
                      {member.tag}
                    </span>
                  ) : (
                    <button className="text-on-surface-variant opacity-40 hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {index === 0 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                <div className="flex items-center gap-1 px-3 py-1.5 bg-surface-container-low rounded-lg text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {member.location}
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 bg-surface-container-low rounded-lg text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-[14px]">pending_actions</span>
                  {member.projects}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mt-8 p-6 rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">mail</span>
          </div>
          <div>
            <h4 className="font-bold text-on-surface tracking-tight">Grow your team</h4>
            <p className="text-xs text-on-surface-variant max-w-[220px] mx-auto">
              Invite collaborators to join your projects and share resources.
            </p>
          </div>
          <button className="text-primary font-bold text-sm tracking-tight px-6 py-2 rounded-lg bg-primary-fixed hover:bg-primary/10 transition-colors">
            Send Invite
          </button>
        </div>
      </div>
    </main>
  )
}
