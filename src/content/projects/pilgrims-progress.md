---
name: Pilgrim's Progress
tagline: A journal for spiritual disciplines that works without Wi-Fi.
description: Cross-platform mobile app for tracking spiritual growth, built with Expo and offline-first SQLite storage.
tech: ["Expo", "React Native", "TypeScript", "SQLite", "NativeWind"]
status: wip
order: 5
images: []
problem: Christians who want to track their spiritual disciplines — prayer, scripture reading, fasting, journaling — don't have a tool built for the way they actually practice. Generic habit trackers treat church attendance like going to the gym. Devotional apps are rigid and usually lock content behind a subscription. This is a blank canvas shaped around how Christians actually live out their faith, day to day.
decisions:
  - title: Expo for true cross-platform
    body: One codebase that builds to iOS, Android, and web. For a solo project targeting a community split across Apple and Android, maintaining separate native codebases isn't realistic. Expo's managed workflow handles the build pipeline and makes OTA updates possible without going through app store review.
  - title: expo-sqlite for offline-first storage
    body: Everything is stored locally first. The app works at a retreat center with no signal, on a plane, in the middle of nowhere. SQLite gives real relational queries without any network dependency — a habit tracker that requires internet to record a prayer is a bad habit tracker.
  - title: NativeWind for styling
    body: Tailwind CSS utilities that work on native components. Keeps the styling mental model consistent with web projects and makes the UI fast to iterate without thinking in React Native's StyleSheet API.
challenges: Offline sync. Local-first is easy until the same person wants their data on two devices — then you need a sync strategy, conflict resolution, and a way to handle a phone that hasn't opened the app in three months. The current version is intentionally local-only while the sync architecture gets figured out properly, rather than shipping something that loses data.
next: Cloud sync with proper conflict resolution, community features for shared reading plans and accountability partnerships, streaks and reflection prompts.
---
