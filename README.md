# Architect | Optimized Performance Dashboard

A premium React + Vite dashboard featuring real-time data sync, live countdown timer, and optimized performance metrics. Built with Tailwind CSS and Material Design icons.

## Features

✨ **Real-time Data Sync**
- Auto-fetches user data from JSONPlaceholder API every 60 seconds
- Live countdown timer that resets after each successful sync
- Manual refresh button for immediate updates

⚡ **Performance Optimized**
- Proper cleanup with AbortController to prevent memory leaks
- setInterval management with clearInterval in cleanup function
- Efficient state updates and re-renders

🎨 **Premium UI**
- Clean, well-structured component architecture
- Responsive Bento grid layout
- Tailwind CSS with custom color scheme
- Material Design icons throughout
- Smooth animations and transitions

📊 **Dashboard Sections**
- Performance Analytics with live data list
- System Status monitoring (Uptime, Latency, CPU, Memory)
- Project Progress tracking
- Insights & Notifications

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Architecture

```
src/
├── App.jsx                    # Main app component with layout
├── Dashboard.jsx              # Real-time data sync component
├── components/
│   ├── TopNav.jsx            # Top navigation bar
│   ├── SideNav.jsx           # Side navigation sidebar
│   ├── ProjectCards.jsx      # Project progress cards
│   └── InsightCards.jsx      # Insights & notifications
├── main.jsx                   # React entry point
└── styles.css                 # Global styles & scrollbar
```

## Implementation Details

### Real-time Data Fetching
- Uses `AbortController` to cancel in-flight requests when component unmounts
- Fetches from JSONPlaceholder `/users` endpoint
- Updates system stats with simulated metrics on each sync

### Auto-Refresh Mechanism
- 60-second interval with `setInterval`
- Countdown timer updates every 1 second
- Properly cleaned up in useEffect return function

### State Management
- `items`: User data from API
- `countdown`: Seconds until next update
- `systemStats`: Simulated latency, CPU, memory metrics
- `loading` & `error`: Request state tracking

## Build

```bash
npm run build
```

Outputs optimized production build to `dist/`

---

**Deadline:** March 30, 1:00 PM (IST)

