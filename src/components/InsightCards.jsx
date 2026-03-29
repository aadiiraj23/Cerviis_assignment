import React from 'react'

const insights = [
  {
    id: 1,
    icon: 'rocket_launch',
    title: 'Performance Spike',
    description: 'System output increased by 12% following the latest optimization patch.',
    color: 'primary'
  },
  {
    id: 2,
    icon: 'security',
    title: 'Security Audit',
    description: 'Infrastructure passed global compliance checks with zero vulnerabilities.',
    color: 'primary'
  },
  {
    id: 3,
    icon: 'cloud_done',
    title: 'Cloud Sync',
    description: 'All 24 distributed nodes are currently in perfect synchronization.',
    color: 'primary'
  },
  {
    id: 4,
    icon: 'history',
    title: 'System Logs',
    description: 'Log rotation completed. 1.2TB of archive data processed successfully.',
    color: 'primary'
  }
]

export default function InsightCards(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {insights.map(insight => (
        <div key={insight.id} className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 hover:shadow-md transition-shadow duration-300">
          <span className="material-symbols-outlined text-primary mb-4">{insight.icon}</span>
          <h5 className="font-bold font-headline text-sm mb-2">{insight.title}</h5>
          <p className="text-xs text-on-surface-variant leading-relaxed">{insight.description}</p>
        </div>
      ))}
    </section>
  )
}
