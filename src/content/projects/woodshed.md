---
name: Woodshed
tagline: Practice tool for worship drummers who learn by ear, not sheet music.
description: Offline-first PWA for worship drummers to import songs, build drum patterns, and practice sequences with synthesized audio playback.
tech: ["React Router v7", "Web Audio API", "IndexedDB", "Cloudflare Pages"]
url: https://woodshed.ko.church
status: live
order: 2
images: []
problem: Worship drummers don't learn from sheet music — they listen to a song, figure out the feel, and build a pattern that fits the arrangement. Existing tools are either too simple (metronomes) or too complex (DAWs). Woodshed is a middle ground built specifically for working through worship setlists, song by song, on your own schedule.
decisions:
  - title: Web Audio API for synthesized sound
    body: Generating drum sounds through the Web Audio API means there's nothing to host, no audio files to load, and playback starts instantly. The tradeoff is that it sounds like a drum machine rather than a real kit — which is fine for a practice tool, and keeps the app completely self-contained.
  - title: IndexedDB for all data
    body: Every song, pattern, and setting lives in IndexedDB on the device. The app is fully offline-capable once loaded, which matters when you're practicing at church where the Wi-Fi is locked down or unreliable.
  - title: PWA for installability
    body: A web app manifest and service worker mean it can be added to the home screen and launched like a native app — no app store, no review process, no gatekeeping. Just a URL.
challenges: Web Audio timing. The naive approach of scheduling beats with setTimeout produces a lurching, drift-prone rhythm at any tempo above 80 BPM. The fix is scheduling audio events ahead of time against the AudioContext clock, which runs independently of the main thread and JavaScript's event loop. Getting that right without introducing audible latency or skipped beats took several iterations and a lot of metronome comparisons.
next: Import setlists directly from Planning Center, share patterns between band members, multiple kit sound options.
---
