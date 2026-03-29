import React from 'react'
import Dashboard from '../Dashboard'

export default function AnalyticsPage() {
  return (
    <main className="md:ml-64 pt-24 pb-32 px-8">
      <div className="mb-12">
        <h2 className="text-[3rem] md:text-[3.5rem] font-extrabold leading-none tracking-tight text-on-surface mb-2 font-headline">
          Analytics
        </h2>
        <p className="text-on-surface-variant font-body text-lg">
          System-wide performance metrics and structural efficiency.
        </p>
      </div>
      <Dashboard />
    </main>
  )
}
