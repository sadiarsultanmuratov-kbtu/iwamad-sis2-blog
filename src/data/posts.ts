export type Post = {
  id: number
  title: string
  date: string
  summary: string
  paragraphs: string[]
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'My first web page',
    date: '5 September 2026',
    summary: 'In the first week I made a simple page about myself and learned how to use Git.',
    paragraphs: [
      'The course started with a very simple task: make a web page about yourself. I wrote about who I am — I am 19, a third-year IT Management student at KBTU. I added my skills: English, French, Python, SQL, Power BI and Figma. I also made a small table with my language levels (English B2, French A2) and a contact form.',
      'It was only HTML, but I learned to use the right tags: header, nav, main, section and footer. They help the browser and screen readers understand the page.',
      'The second new thing was Git. I made my first branch, my first commit and my first pull request. At first it felt slow, but now I like that I can see every step of my work.',
    ],
    tags: ['HTML', 'Git'],
  },
  {
    id: 2,
    title: 'Making my card work on a phone',
    date: '12 September 2026',
    summary: 'Week 2 was about CSS: Flexbox, Grid and a page that looks good on every screen.',
    paragraphs: [
      'This week I turned my page into a profile card. The hardest part was the phone. On my laptop the card looked fine, but on a small screen everything was too tight.',
      'I learned a simple rule. Flexbox is for one direction — a row or a column. Grid is for rows and columns together. I also started writing CSS "mobile first": the phone version is the default, and a media query changes the layout on a big screen.',
      'At the end I added a like button with JavaScript. When you click it, the text changes to "Liked!". A small thing, but it was my first interactive button.',
    ],
    tags: ['CSS', 'Flexbox', 'JavaScript'],
  },
  {
    id: 3,
    title: 'My card becomes React',
    date: '19 September 2026',
    summary: 'In week 3 I rebuilt my card with React and TypeScript, using small components.',
    paragraphs: [
      'I moved my card to React. Now the page is made of small parts: Header, ProfileCard, SkillBadge and Footer. Each part is a component, and each one gets its data through props.',
      'TypeScript was new for me. I have to write the type of every prop, for example name: string. At first it was annoying, but it found my mistakes before I opened the browser.',
      'My favourite thing was .map(). My skills live in an array, and React draws one badge for every skill. If I add a new skill to the array, a new badge appears by itself.',
    ],
    tags: ['React', 'TypeScript'],
  },
  {
    id: 4,
    title: 'Why my likes kept disappearing',
    date: '26 September 2026',
    summary: 'In week 4 my app got real pages — and my like counter started to reset.',
    paragraphs: [
      'I split my app into pages with React Router: Home, Skills, Contact and my own 404 page. The header and footer stay on the screen, only the middle part changes.',
      'Then I found a bug. I liked my card twice, opened Skills and came back — the counter was 0 again. The state lived inside a component that disappeared when the page changed.',
      'The fix was Context. I moved the likes above all the pages, so every page reads the same number. I also wrote my first test: it clicks the like button and checks the new number.',
    ],
    tags: ['React Router', 'Context', 'Testing'],
  },
  {
    id: 5,
    title: 'From a Figma design to code',
    date: '3 October 2026',
    summary: 'Week 5: I read a design like a developer and found one colour that was hard to read.',
    paragraphs: [
      'This week we got a design in Figma. My job was not to draw, but to read it: which pages there are, which components, which colours and spaces.',
      'I saved the colours and spaces as CSS variables, for example --color-primary. Now if I change one variable, the whole site changes.',
      'I also checked the contrast of every text colour. One grey was too light — only 2.54 : 1 on white. The rule says at least 4.5 : 1, so I made it darker. Some people cannot read light grey text, and now they can.',
    ],
    tags: ['Design', 'CSS', 'Accessibility'],
  },
  {
    id: 6,
    title: 'A form that helps you',
    date: '10 October 2026',
    summary: 'In week 6 I built a sign-up form that tells you exactly what is wrong.',
    paragraphs: [
      'I made a Register page with five fields: name, email, password, confirm password and a checkbox. React keeps every value in state.',
      'All the checks are in one function. It gets the values and returns the errors, like "Use at least 8 characters". Because it is a simple function, it was easy to test — I wrote eight tests for it.',
      'I also learned when to show an error. If you see a red message while you are still typing, it feels rude. So my form shows it only when you leave the field or press the button.',
    ],
    tags: ['Forms', 'Validation', 'Testing'],
  },
]
