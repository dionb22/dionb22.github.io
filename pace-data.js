// The only file you edit. Commit and push it to update the diagram.
//
// When you finish a course: add a { date, units } entry to `completed`.
// `current` is the batch you're working on now and the date you aim to
// finish it. When it's done, move it into `completed` with the real date
// and set up the next batch (or set `current` to null).
// Each day: fill in that day's slot in `week.hours` (Mon through Sun).
// Each Monday: set `week.of` to the new Monday and reset `week.hours` to zeros.

window.PACE = {
  start: "2026-09-01",
  totalUnits: 88,
  targetMonths: 12,
  weeklyHours: [15, 20],
  dailyHours: [2, 3],

  completed: [
    { date: "2026-10-13", units: 16 },
    { date: "2026-10-17", units: 3 }
  ],

  current: { units: 3, goal: "2026-10-24" },

  week: {
    of: "2026-10-19",
    hours: [2, 2, 0, 2, 0, 0, 0],
  },
};
