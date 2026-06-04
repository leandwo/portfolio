---
name: Seagull Scanner
tagline: Shift management for custodial teams, built to survive spotty warehouse Wi-Fi.
description: Offline-first PWA for USPS custodians to run daily shift checklists, track issues and supplies, and give leads a live view across two facilities.
tech: ["React Router v7", "Cloudflare Workers", "Cloudflare D1", "Cloudflare R2", "IndexedDB"]
url: https://seagull-scanner.leo-g-solidum.workers.dev
status: alpha
order: 6
images: []
overview: Custodial shift work runs on paper checklists that get lost, skipped, or never reach the lead. Seagull Scanner replaces them with a phone-first app that works even when the warehouse Wi-Fi does not, so custodians check off tasks as they go and leads see exactly where things stand across both facilities.
features:
  - title: Daily shift checklists
    description: AM and PM checklists spawn automatically from recurring templates. Unfinished tasks carry forward so nothing falls through the cracks.
  - title: Works offline
    description: Check off tasks with no signal. Everything queues on the device and syncs the moment you reconnect.
  - title: Issue tracking
    description: "Spot a problem, log it on the spot. Leads see new issues as they come in instead of hearing about them days later."
  - title: Supply inventory
    description: Track stock across locations with low-stock alerts and transfer requests between facilities.
  - title: Facility maps
    description: "Annotated floor plans with color-coded pins, so new custodians know exactly where everything is."
  - title: Lead dashboard
    description: "Cross-location overview with completion stats, 7-day strips, and trends, all at a glance."
next: Push reminders for missed tasks, more facilities, a custom domain.
---
