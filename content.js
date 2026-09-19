/**
 * Edit this file to update the event page.
 * After you save, refresh the browser to see changes.
 */
window.EVENT = {
  name: "DBMSS",
  kicker: "You're invited",
  tagline: "A night together — details below, updates as they land.",
  description:
    "Swap this paragraph for what the gathering actually is: who it's for, the vibe, and why people should show up. Keep it to a few sentences so guests can scan it on a phone.",

  when: {
    weekday: "Saturday",
    date: "Month 00, 2026",
    time: "7:00 PM",
    timezone: "ET",
  },

  where: {
    venue: "Venue name",
    address: "Street address",
    city: "City, ST",
    mapUrl: "https://maps.google.com/?q=City",
  },

  rsvp: {
    label: "RSVP",
    href: "mailto:host@example.com?subject=DBMSS%20RSVP",
    note: "Replace the email in content.js with yours, or paste a Google Form / Eventbrite link.",
  },

  host: {
    name: "Your name",
    email: "host@example.com",
  },

  schedule: [
    { time: "7:00", title: "Doors", detail: "Arrive, grab a drink, settle in." },
    { time: "7:45", title: "Welcome", detail: "A short hello and the plan for the night." },
    { time: "8:00", title: "Main event", detail: "Replace with the actual rundown." },
    { time: "10:30", title: "Wind down", detail: "Last calls and goodbyes." },
  ],

  faq: [
    {
      q: "Do I need to RSVP?",
      a: "Yes — it helps with headcount. Use the RSVP button at the top.",
    },
    {
      q: "What should I bring?",
      a: "Yourself. Add dress code, plus-ones, or anything guests should know here.",
    },
    {
      q: "Can I update this page later?",
      a: "Yes. Change content.js, save, and publish. The live site updates after GitHub Pages rebuilds.",
    },
  ],

  footer: "Hosted with care. Details may shift — this page is the source of truth.",
};
