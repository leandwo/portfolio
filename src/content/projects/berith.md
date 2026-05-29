---
name: Berith
tagline: Wedding planning in one place instead of twelve.
description: Full-stack wedding planner with guest management, seating charts, budgeting, timeline, vendor tracking, and a public RSVP page with invite tokens.
tech: ["SolidJS", "Cloudflare Workers", "Cloudflare D1"]
status: wip
order: 4
images: []
problem: Wedding planning is spread across a dozen tools that don't talk to each other — Google Sheets for guests, Notion for vendors, a separate app for seating, email threads for RSVPs. Couples end up duplicating data constantly and still show up on their wedding day uncertain about who's actually coming. Berith pulls it into one place with a single source of truth for everything.
decisions:
  - title: Full stack on Cloudflare Workers + D1
    body: The entire app — routing, API, auth, data — runs as a single Cloudflare Worker with D1 as the database. No separate backend deployment, no managing servers, no ops. Deploys in seconds from a single command.
  - title: Token-based RSVP instead of accounts
    body: Each guest gets a unique invite link. They click it, confirm attendance, choose their meal — done. No account creation, no password reset emails, no friction. The couple sees exactly who responded and when, and guests don't have to remember another login.
challenges: Seating chart UX. Drag-and-drop table assignment sounds simple until you're juggling 150 guests across 20 tables with dietary restrictions, family dynamics, and last-minute changes. Getting the interaction to feel fluid — especially on mobile — without introducing state bugs around guest placement took real work to get right.
next: Send invites directly from the app via email, vendor payment tracking with due date reminders, a day-of timeline view with push notifications.
---
