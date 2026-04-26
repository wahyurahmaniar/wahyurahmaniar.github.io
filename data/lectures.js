// ─────────────────────────────────────────────────────────────────
// GUEST LECTURES — add your lectures here
// Fields:
//   t:     lecture title
//   v:     venue (university/institution name)
//   y:     year
//   ty:    type class: tk=Keynote  ts=Seminar  tl=Lecture  tw=Workshop  ti=InvitedTalk
//   tl:    type label shown on badge
//   desc:  description of lecture content (shown in preview panel)
//   links: link labels — clicking opens the url in the same position
//          e.g. [{l:'Slides (PDF)', u:'https://...'}, {l:'Video', u:'https://...'}]
//          OR just labels if no url: ['Slides (PDF)', 'Video Recording']
//   tags:  topic tags shown as chips e.g. ['Deep Learning', 'MRI', 'Federated Learning']
//   img:   'figures/lecture1.png'  ← screenshot of your slides or poster
//          upload the image to a figures/ folder in your GitHub repo
//   slides:'https://...'           ← direct link to your slides (PDF/PPT/Google Slides)
// ─────────────────────────────────────────────────────────────────
var LE = [
  {t:'Artificial Intelligence (AI) in Medical Images',
   v:'3rd Trunojoyo Madura International Conference (TMIC)', y:'2025', ty:'ti', tl:'Invited Talk',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vRpGwb6wVCGN8_im3LuuxuMIhHT1j4jsWVLfZbGqVT9rgqJdonitVISCk4Ld-0XOQ/pub?start=true&loop=false&delayms=3000'},
  
  {t:'Artificial Intelligence (AI) in Medical Images and Assistive Device',
   v:'Universitas Lambung Mangkurat (ULM)', y:'2025', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vQBqnJfAXFH6Q8iJf_FWJb4mg9fc1v3m63FrW-YLDdXjOqauwPpMbqTFu9RX5KMBg/pub?start=true&loop=false&delayms=3000'},
  
  {t:'Artificial Intelligence (AI) in Medical Images and Assistive Device',
   v:'3rd International Conference on Physics and Physics Education (ICONPHYEDU)', y:'2024', ty:'ti', tl:'Invited Talk',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vQFhmFjrnyV9G-k1NkzM0BTUKZ2NkygM0q7nLZO_go7zMwWEK2mxzG15uuyO1muWA/pub?start=true&loop=false&delayms=3000'},
  
  {t:'Artificial Intelligence (AI) in Medical Images and Assistive Device',
   v:'Universitas Harapan Bangsa (UHB)', y:'2024', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vS_rkz_XksDPQT9g9QHtQxfC04TP_eC5d5UqEwFxF9d8caEdQjx0UX0aA2LypRYtg/pub?start=true&loop=false&delayms=3000'},

  {t:'Artificial Intelligence (AI) in Medical Images and Assistive Device',
   v:'Prince Sultan University, Saudi Arabia', y:'2024', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vRMhq9z4-Hz7sS_69FZzwaRQKV6cxhEX7urFn7wybPyklxKCDZdd-S-qvU6AkmsPQ/pub?start=true&loop=false&delayms=3000'},

  {t:'Women in Engineering: AI and Computer Vision in Industry and Academia',
   v:'Sciencemind (Education lab)', y:'2023', ty:'ts', tl:'Seminar',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vQQhMsr4_9dy2BJ0Kax6a533xAHcHAU_c37ynpPzlTMuaNSxOcMxfyTJcoT3pqZ_w/pub?start=true&loop=false&delayms=3000'},

  {t:'Artificial Intelligence (AI) in Medical Images and Assistive Device',
   v:'1st Engineering Trunojoyo Madura International Conference 2023 (ETMIC)', y:'2023', ty:'ti', tl:'Invited Talk',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vSTJ7OrtEHAZrN-qzeYWiQwGyd7Y57uxJcnD_VDnYTkyQevi-h3jAJ4Rtk4JehswA/pub?start=true&loop=false&delayms=3000'},

  {t:'Publications in Artificial Intelligence and Medical Technology',
   v:'Sekolah Tinggi Teknologi Bandung (STTB)', y:'2022', ty:'ts', tl:'Seminar',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vSBets5GO85rTrO7aFgytwX393aBIwW2XxRs0RcYfdBqXPGFoA10a0T716WEYJL3w/pub?start=true&loop=false&delayms=3000'},

  {t:'Publications in Artificial Intelligence and Medical Technology',
   v:'Universitas Harapan Bangsa (UHB)', y:'2022', ty:'ti', tl:'Invited Talk',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vS95tdZf6vsjDu2sXJquwh2MuhEkMCYxrYHFs61B1q_-5TsV19Llf1dkV4iGCzZtg/pub?start=true&loop=false&delayms=3000'},
  
  {t:'AI Technology in Medical Imaging and Assistive Devices',
   v:'Universitas Indonesia (UI)', y:'2022', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vSmA-KGamUwFrR1e4LD33vQUpSTVWe11um-Nf_D5_5xbNSCKSFrjiMScBa2NJxMng/pub?start=true&loop=false&delayms=3000'},
  
  {t:'When Remote Sensing Meets Artificial Intelligence',
   v:'Universitas Negeri Makassar (UNM)', y:'2021', ty:'ts', tl:'Seminar',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vRS67QdZXQfBQnbhRx8qUbDeVHFk_GwA-FWUow_grzJw3OOVy7SpdO3ymMO_x81QA/pub?start=true&loop=false&delayms=3000'},

  {t:'Artificial Intelligence Applications in Real-Life',
   v:'Sekolah Tinggi Teknologi Bandung (STTB)', y:'2021', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vR5J4GNWJIQ85spX4gael5fF7ZdyBtMWJ2HpjhfL5ZP__8EM0KXITqv3cBNvNhvIA/pub?start=true&loop=false&delayms=3000'},
];
