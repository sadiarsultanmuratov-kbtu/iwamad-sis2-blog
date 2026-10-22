// The blog's data: one typed array. Add an object here → a new card and a new page appear.
export type Post = {
  id: number
  title: string
  date: string
  excerpt: string
  body: string[]
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'My first pull request',
    date: '2026-09-04',
    excerpt: 'Week 1: I learned that Git is not just "save" — it is a history you can show to someone else.',
    body: [
      'In the first week of the course I created my practice repository and opened my first pull request. Before that I only used Git to upload files at the end of a project.',
      'Now I make a branch for every week, commit small steps with clear messages and open a pull request so the work can be reviewed. It feels slower at first, but it is much easier to find a mistake later.',
    ],
    tags: ['Git', 'Week 1'],
  },
  {
    id: 2,
    title: 'Flexbox or Grid?',
    date: '2026-09-11',
    excerpt: 'Week 2: Flexbox lays things out in one direction, Grid in two. Here is how I choose.',
    body: [
      'I built a responsive profile card and had to decide how to place everything. My rule now: if the items go in one row or one column, I use Flexbox. If I need rows and columns at the same time, I use Grid.',
      'I also started writing CSS mobile first: the phone layout is the default, and a min-width media query adds columns on a bigger screen.',
    ],
    tags: ['CSS', 'Week 2'],
  },
  {
    id: 3,
    title: 'From HTML to React components',
    date: '2026-09-18',
    excerpt: 'Week 3: my profile card became small components with typed props.',
    body: [
      'I moved my profile card into React with TypeScript. Header, ProfileCard, SkillBadge and Footer each became a component with its own props type.',
      'The best part was .map(): instead of copying six skill badges by hand, I keep the skills in an array and React draws one badge for each item.',
    ],
    tags: ['React', 'TypeScript', 'Week 3'],
  },
  {
    id: 4,
    title: 'Why my likes kept disappearing',
    date: '2026-09-25',
    excerpt: 'Week 4: I split my app into pages and my like counter reset every time. Context fixed it.',
    body: [
      'After adding React Router, I liked my card twice, opened the Skills page and came back — the counter was 0 again. The state lived inside a component that was removed when the page changed.',
      'I moved the likes into Context, above the routes. Now every page reads the same value and it survives navigation. I also wrote my first test that clicks the like button.',
    ],
    tags: ['React Router', 'Context', 'Week 4'],
  },
  {
    id: 5,
    title: 'Reading a design like a developer',
    date: '2026-10-02',
    excerpt: 'Week 5: I turned a Figma file into tokens and components — and found one colour that failed contrast.',
    body: [
      'I inspected the starter design for this blog and wrote handoff notes: routes, components, spacing and ten design tokens. Every token became a CSS variable in tokens.css.',
      'Then I checked every text colour in DevTools. The muted grey #9ca3af had only 2.54 : 1 contrast on white, so I changed it to #6b7280, which passes 4.5 : 1.',
    ],
    tags: ['Design system', 'Accessibility', 'Week 5'],
  },
]
