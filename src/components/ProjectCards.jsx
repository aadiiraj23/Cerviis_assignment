import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Nexus Core UI',
    milestone: '4/6',
    progress: 72,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ci2GzVbQhOe-6THkf7QTQxMRaDRojzSMrmyz_R1L5qSbt2E6RRZpfBfBXKmhxhBz2NVsgST8IZaFva2Zv8hyS1-rHIljmHSpmtjnDlVWxpQkQhUWA63pHhQ6etjDnvrtd7Dw2nbEbmgtEhKgGpPz_I_4_XC60_WBgmQ51VDeC156Xvjlu4Icf8vSucWReSXDGK7QO5N4oauZERmCSSOxXLFwC19DkdIFR6CwURySoiT_7CLSkiUxpC2M1JI0fCmw-tHbC3E3ojo',
    color: 'tertiary'
  },
  {
    id: 2,
    title: 'Alpha Engine',
    milestone: '2/5',
    progress: 38,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApieipsfIIRsP89OxrXOsy31_2eOxFWUpKduFFnlNch-2oQWzhFaQW3MRVw0-EC6OPSJvN-fFD3wJFA5qtMFPBMfhfdXuK8ugmqjUj0bQAxeQ_v6ycLMwBGvbTrG7vssWOcOs33FXjpmUEwQwo6syrO6maKOMNl9knJfnmKBZyBXc1cKqATs8biTHCWhEkLFd8bBSX_LQVjQ02kZHHVQkZTK6PN6bcwEd7OGKYI_PbxYqKOKzAV6s_3yw3TlQ3CNIFZEBIZFF-sT8',
    color: 'primary'
  },
  {
    id: 3,
    title: 'Storage Protocol',
    milestone: 'Completed',
    progress: 100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNAOools0kLiP4-99FtrZIRvwe_x1EBg0xLUc8KS2aCtpDUYs6BDs1i2PUqBU0xOgwbnZZ2ZusrdcAjAwaeBk47ypbA61lHoFTIlUi2o2INOYetU6P8cyWoqhwhnlw6cf_nc87y_iQHgCuKr54Zc3gp20oooVAAgXBip0u9yd1fPuGR5FbA2ZnUB4kaXz1onQZaJ0owff1AfPLFUxcYNq4nepuMphuB3vqfk_CgNQOGK6sW8H1Wqj23r0W4v6aOS70ufKNHY7wvpQ',
    color: 'green'
  }
]

export default function ProjectCards(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(project => (
        <div key={project.id} className="bg-surface rounded-xl p-2 group hover:bg-surface-container-low transition-colors duration-300">
          <div className="aspect-video rounded-lg mb-4 overflow-hidden bg-surface-container-highest">
            <img alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={project.image} />
          </div>
          <div className="px-2 pb-2">
            <h4 className="font-bold font-headline mb-1">{project.title}</h4>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-on-surface-variant">Milestone {project.milestone}</span>
              <span className={`text-xs font-bold text-${project.color === 'green' ? 'green-600' : project.color}`}>{project.progress}%</span>
            </div>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <div 
                className={`bg-${project.color === 'green' ? 'green-500' : project.color} h-full`}
                style={{width: `${project.progress}%`}}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
