---
name: Koinonia Church
tagline: A church website that stays current.
description: Official website for Koinonia Church in Mount Vernon, WA.
tech: ["Astro", "Tailwind CSS", "Cloudflare Pages"]
url: https://ko.church
repo: https://github.com/leandwo/ko-church
status: live
order: 1
images: []
problem: Most church websites get updated twice a year, if that. Service times change, staff turns over, events come and go — but the website stays frozen. Koinonia needed something fast to load, easy to keep current, and cheap enough that a small church could actually afford it long-term.
decisions:
  - title: Astro over WordPress or a heavy CMS
    body: Astro ships zero JavaScript by default, which means the site loads fast even on the spotty cell signal you get in some church parking lots. Content lives in Markdown files — simple enough for a non-developer to edit with a little guidance, and no database to secure or maintain.
  - title: Cloudflare Pages for hosting
    body: The free tier covers everything a local church website needs. Assets are served from Cloudflare's CDN edge worldwide, and deploys happen automatically on every git push. The church pays $0/month in infrastructure costs.
challenges: Getting the design to feel warm and personal without becoming cluttered. Church websites tend to swing between corporate brochure and clip-art bulletin. The goal was something clean enough to feel credible but personal enough to actually represent the community.
next: A lightweight CMS so staff can update service times, post announcements, and manage events without touching a file or asking a developer.
---
