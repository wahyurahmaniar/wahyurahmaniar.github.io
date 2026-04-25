// ─────────────────────────────────────────────────────────────────
// NEWS — add items to top of array
// Fields:
//   b:   badge class: nb-p=paper  nb-t=talk  nb-a=award/grant  nb-n=opensource  nb-w=workshop/media
//   l:   badge label
//   t:   title text
//   d:   date string e.g. 'April 2026'
//   url: 'https://...'            ← optional: makes title a clickable link
//   img: 'images/news1.jpg'       ← optional: shows thumbnail on right side
//                                    (upload image to images/ folder in your repo)
// ─────────────────────────────────────────────────────────────────
// b: nb-p=paper  nb-t=talk  nb-a=award/position  nb-n=milestone  nb-w=event/media
// url: optional link  |  img: optional thumbnail

var NA = [
  // ── 2026 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Position',    t:'Appointed as Adjunct Professor at Universitas Brawijaya, Indonesia', d:'2026',
   url:null, img:null},
  {b:'nb-w', l:'Fun',         t:'Visited Disneyland and took a photo with Donald Duck!', d:'2026',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'A Narrative Review of AI Frameworks for Chronic Stress Detection Using Physiological Sensing, Sensors, MDPI', d:'2026',
   url:'https://www.mdpi.com/1424-8220/26/8/2345', img:null},
  {b:'nb-p', l:'New Paper',   t:'Multi-AD: Cross-domain Unsupervised Anomaly Detection for Medical and Industrial Applications, Pattern Recognition, Elsevier', d:'2026',
   url:'https://www.sciencedirect.com/science/article/abs/pii/S0031320325011495', img:null},

  // ── 2025 ──────────────────────────────────────────────────────
  {b:'nb-w', l:'Conference',  t:'Attended RSNA 2025, Radiological Society of North America Annual Meeting', d:'2025',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'Practical Applications of Artificial Intelligence: A Sector-Wise Review of Challenges and Future Directions, IT Professional, IEEE', d:'2025',
   url:'https://ieeexplore.ieee.org/abstract/document/11125707', img:null},
  {b:'nb-p', l:'New Paper',   t:'Future of the Medical World: Collaborative Medical Imaging AI with Federated Learning, IEEE Consumer Electronics Magazine', d:'2025',
   url:'https://ieeexplore.ieee.org/abstract/document/10876609', img:null},

  // ── 2024 ──────────────────────────────────────────────────────
  {b:'nb-n', l:'Milestone',   t:'Tokyo Institute of Technology officially renamed to Institute of Science Tokyo', d:'2024',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'ChatGPT for Software Development: Opportunities and Challenges, IT Professional, IEEE', d:'2024',
   url:'https://www.computer.org/csdl/magazine/it/2024/03/10572230/1Y5ARhBvqla', img:null},
  {b:'nb-p', l:'New Paper',   t:'Deep Learning and Quantum Algorithms Approach to Investigating the Feasibility of Wormholes: A Review, Astronomy and Computing, Elsevier', d:'2024',
   url:'https://www.sciencedirect.com/science/article/pii/S2213133724000179', img:null},

  // ── 2023 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Position',    t:'Appointed as Assistant Professor (Specially Appointed) at Tokyo Institute of Technology (Tokyo Tech), Japan', d:'2023',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'Auto-CA: Automated Cobb Angle Measurement Based on Vertebrae Detection for Assessment of Spinal Curvature Deformity — IEEE Transactions on Biomedical Engineering', d:'2023',
   url:'https://ieeexplore.ieee.org/abstract/document/10244104', img:null},
  {b:'nb-p', l:'New Paper',   t:'In Vitro Anti-Oxidant, In Vivo Anti-Hyperglycemic, and Untargeted Metabolomics Screening of Macroalgae Lipophilic Extracts, Metabolites, MDPI', d:'2023',
   url:'https://www.mdpi.com/2218-1989/13/12/1177', img:null},

  // ── 2022 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Position',    t:'Started as Postdoctoral Researcher at Tokyo Institute of Technology, Japan', d:'2022',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'Automated Cobb Angle Measurement for Adolescent Idiopathic Scoliosis Using Convolutional Neural Network, Diagnostics, MDPI', d:'2022',
   url:'https://www.mdpi.com/2075-4418/12/2/396', img:null},

  // ── 2021 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Position',    t:'Started as Postdoctoral Researcher at National Taipei University of Technology (NTUT), Taiwan', d:'2021',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',   t:'Real-Time Human Detection Using Deep Learning on Embedded Platforms: A Review, Journal of Robotics and Control (JRC)', d:'2021',
   url:null, img:null},

  // ── 2020 ──────────────────────────────────────────────────────
  {b:'nb-n', l:'Milestone',   t:'Graduated with Ph.D. in Electrical Engineering from National Central University, Taiwan', d:'April 2020',
   url:null, img:null},
  {b:'nb-a', l:'Work',        t:'Joined Issa Technology as full-time Computer Vision Engineer', d:'June 2020',
   url:null, img:null},

  // ── 2018 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Work',        t:'Started part-time at Issa Technology as Computer Vision Engineer', d:'December 2018',
   url:null, img:null},

  // ── 2017 ──────────────────────────────────────────────────────
  {b:'nb-n', l:'Exchange',    t:'Research exchange at Shibaura Institute of Technology, Tokyo, Japan', d:'October 2017',
   url:null, img:null},
];
