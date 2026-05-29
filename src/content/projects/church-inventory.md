---
name: Church Inventory
tagline: Tracks what your church owns so nothing disappears unnoticed.
description: Asset tracker for church gear — instruments, AV equipment, consumables, and furniture — with dashboard, search, and persistent storage.
tech: ["SolidJS", "Tailwind CSS", "Cloudflare D1"]
url: https://inventory.ko.church
status: wip
order: 3
images: []
problem: Most churches track their gear in a spreadsheet, or they don't track it at all. When a cable goes missing or a mic needs to be replaced, nobody can remember what they had or when they bought it. Church Inventory is a simple admin tool — add items, assign categories, flag things for repair or replacement — built specifically for the people who set up and tear down every Sunday.
decisions:
  - title: Cloudflare D1 for the database
    body: D1 is SQLite running at the edge — essentially free at the scale a single church operates at, no server to manage, and Cloudflare handles redundancy. For a nonprofit with no IT budget, the cost structure matters as much as the feature set. This runs for free indefinitely.
  - title: SolidJS for the UI
    body: Fine-grained reactivity without a virtual DOM makes the search and filter interactions feel instant — no debouncing hacks or loading states for a local dataset. The bundle is also smaller than a comparable React app, which helps on slower church Wi-Fi connections.
challenges: Deciding what not to build. The temptation with an inventory tool is to add check-out/check-in logs, depreciation tracking, QR code scanning, purchase order history — and none of it matters if the core thing (knowing what you own) isn't fast and frictionless to use first. Keeping the scope tight was the actual discipline here.
next: Check-out/check-in so you know who took what gear home after Sunday, maintenance reminders, multi-campus support.
---
