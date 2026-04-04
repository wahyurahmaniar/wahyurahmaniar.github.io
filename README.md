# Wahyu Rahmaniar — Academic Portfolio
> AI & Medical Imaging Research · GitHub Pages Portfolio

Live site: **https://wahyurahmaniar.github.io**

---

## Overview

A dark-themed, single-page academic portfolio built with pure HTML/CSS/JavaScript — no frameworks, no build tools, no dependencies. Features an animated neural network background, interactive sections, and a clean two-column layout.

---

## Features

- **Animated neuron background** — glowing nodes with signal pulses
- **Two-column layout** — main content left, interactive widgets right
- **Publications** — paginated list with click-to-preview (abstract + figure)
- **Guest Lectures** — paginated list with click-to-preview (description + tags)
- **News** (news items)
**Topics** (any subject: research, concepts, tutorials) — paginated, with dedicated full-page news view
- **Research Figures** — filterable gallery with lightbox zoom
- **Quiz** — 8-question AI & Medical Imaging knowledge test (shuffled)
- **Visitor Counter** — localStorage-based, counts total and today's visits
- **Guest Book** — in-memory messages (persists during session)
- **Fully responsive** — works on mobile and desktop

---

## File Structure

```
wahyurahmaniar.github.io/
├── index.html              ← Main shell (CSS, layout, JS logic)
└── data/
    ├── about.js            ← Personal info, bio, research chips
    ├── education.js        ← Degrees and academic background
    ├── publications.js     ← Papers with abstracts and figures
    ├── news.js             ← News and topic announcements
    ├── lectures.js         ← Guest lecture list with descriptions
    ├── figures.js          ← Research figures (SVG or image paths)
    └── quiz.js             ← Quiz questions and answers
```

---

## How to Edit Content

### Personal Info & Bio
Open `data/about.js` and update the `PROFILE` object:

```js
var PROFILE = {
  name:        'Your Name',
  role:        'Associate Professor',
  uni:         'Your University',
  location:    'City, Country',
  email:       'you@university.ac.jp',
  github:      'https://github.com/yourusername',
  scholar:     'https://scholar.google.com/...',
  cv:          '/cv.pdf',
  about_text:  'Your bio here...',
  about_sub:   'Additional paragraph...',
  chips: [
    {t: 'Deep Learning',    cls: 'cc'},   // cc = cyan
    {t: 'Computer Vision',  cls: 'cp'},   // cp = purple
    {t: 'Clinical AI',      cls: 'cg'},   // cg = green
  ],
  info: [
    {k: 'Position',  v: 'Associate Professor, Dept. of ...'},
    {k: 'Email',     v: 'you@university.ac.jp'},
  ]
};
```

---

### Education
Open `data/education.js` and edit the `EDU` array:

```js
var EDU = [
  {
    deg:      'Ph.D. Computer Science',
    school:   'University Name, Country',
    desc:     'Thesis title or description',
    year:     '2015–2019',
    featured: true    // true = shows icon + gradient (use for highest degree)
  },
  // Add more entries...
];
```

---

### Publications
Open `data/publications.js` and add to the `PU` array:

```js
var PU = [
  {
    t:   'Full Paper Title',
    a:   'Your Name, Co-Author A, Co-Author B',
    v:   'Journal Name · Publisher · Year',
    ls:  ['PDF', 'DOI', 'Code'],    // link button labels
    ab:  'Abstract text here...',
    fig: '<svg ...>...</svg>'       // inline SVG figure, OR use img (see below)
  },
  // Add more...
];
```

**To use a real image instead of SVG:**
1. Upload your figure to a `figures/` folder in the repo
2. Replace `fig: '<svg>...'` with `img: 'figures/your-figure.png'`

---

### News & Topics
Open `data/news.js` and add items to the top of the `NA` array:

```js
var NA = [
  {
    b: 'nb-p',              // badge style (see below)
    l: 'New Paper',         // badge label
    t: 'Your announcement title',
    d: 'Month Year'         // date string
  },
  // ...existing items
];
```

**Badge styles:**

| Code    | Style       | Use for                        |
|---------|-------------|--------------------------------|
| `nb-p`  | Purple      | Papers, preprints              |
| `nb-t`  | Gold        | Talks, keynotes, invited talks |
| `nb-a`  | Green       | Awards, grants                 |
| `nb-n`  | Cyan        | Open source, new releases      |
| `nb-w`  | Blue        | Workshops, media coverage      |

---

### Guest Lectures
Open `data/lectures.js` and add to the `LE` array:

```js
var LE = [
  {
    t:     'Lecture Title',
    v:     'Host Institution',
    y:     '2025',
    ty:    'tk',              // type class (see below)
    tl:    'Keynote',         // type label displayed
    desc:  'Description of lecture content...',
    links: ['Slides (PDF)', 'Video Recording'],
    tags:  ['Topic 1', 'Topic 2']
  },
  // ...
];
```

**Type classes:**

| Code | Label        |
|------|--------------|
| `tk` | Keynote      |
| `ts` | Seminar      |
| `tl` | Lecture      |
| `tw` | Workshop     |
| `ti` | Invited Talk |

---

### Topics (formerly Research Figures)
Open `data/figures.js` and add to the `FIGURES` array:

```js
var FIGURES = [
  {
    cat:   'method',                    // any tag: 'method' | 'result' | 'concept' | 'tutorial' | etc.
    tag:   'Method · Architecture',     // filter tag label
    title: 'Figure Title',
    desc:  'Short description',
    pub:   'Journal Name 2024',
    wide:  true,                        // true = full width, false = half width
    img:   'figures/my-figure.png'      // use real image (recommended)
    // OR: svg: '<svg>...</svg>'        // inline SVG
  },
  // ...
];
```

---

### Quiz Questions
Open `data/quiz.js` and add to the `QS` array:

```js
var QS = [
  {
    q: 'Your question here?',
    o: ['Option A', 'Option B', 'Option C', 'Option D'],
    a: 1,       // index of correct answer (0-based)
    e: 'Explanation shown after answering...'
  },
  // ...
];
```

---

## Deployment (GitHub Pages)

1. Make sure your repo is named **`yourusername.github.io`**
2. Go to **Settings → Pages → Source**: Deploy from branch `main` / root
3. Upload files maintaining the folder structure:
   ```
   index.html
   data/about.js
   data/education.js
   data/publications.js
   data/news.js
   data/lectures.js
   data/figures.js
   data/quiz.js
   figures/          ← (optional) real figure images
   cv.pdf            ← (optional) your CV
   ```
4. Site goes live at `https://yourusername.github.io` within ~1 minute

> **Important:** When editing data files locally, open `index.html` via a local server (e.g. VS Code Live Server) not by double-clicking — browsers block local file loading for security.

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Markup     | HTML5                                   |
| Styling    | CSS3 (custom properties, grid, flexbox) |
| Animation  | Canvas 2D API (neuron background)       |
| Logic      | Vanilla JavaScript (ES5 compatible)     |
| Fonts      | Google Fonts (Instrument Serif + Geist) |
| Hosting    | GitHub Pages (free)                     |
| Storage    | localStorage (visitor counter)          |

No npm, no webpack, no React — just files.

---

## Visitor Counter

The visitor counter uses `localStorage` — each browser stores its own count. This means:
- ✅ Works out of the box, no backend needed
- ✅ Persists across page refreshes for each visitor
- ⚠️ Total shown is per-browser, not a global count

For a real shared counter across all visitors, services like [CountAPI](https://countapi.xyz) or a free [Supabase](https://supabase.com) backend can be integrated.

---

## License

MIT — free to use, adapt, and share.

---

*Built with Claude · Hosted on GitHub Pages*
