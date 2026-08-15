// ─────────────────────────────────────────────────────────────────
// TOPICS / FIGURES — shown in the Topics section
// Fields:
//   cat:   category filter tab — use any string e.g. 'method' 'result' 'diagram' 'concept'
//   tag:   small label shown above title e.g. 'Method · Deep Learning'
//   title: card title (short, 3-6 words)
//   desc:  one or two sentences describing the figure
//   pub:   publication reference e.g. 'IEEE TBME 2023'
//   wide:  true = full-width card, false = half-width (default)
//   img:   'figures/yourimage.png'  ← upload image to figures/ folder in repo
//          (use img OR svg, not both)
//   svg:   inline SVG string — only use if you have no image
// ─────────────────────────────────────────────────────────────────
var FIGURES = [
  {
    cat:'method', tag:'Method · Anomaly Detection',
    title:'Multi-AD Architecture',
    desc:'Cross-domain unsupervised anomaly detection using teacher-student CNN with squeeze-and-excitation blocks and knowledge distillation.',
    pub:'Pattern Recognition, Elsevier 2026',
    wide:true,
    img:'figures/multi-ad-1.png'
  },
  {
    cat:'result', tag:'Result · Anomaly Detection',
    title:'Multi-AD Localization Results',
    desc:'Pixel-level anomaly maps on brain MRI, liver CT, retina OCT, and MVTec AD datasets showing superior localization over state-of-the-art.',
    pub:'Pattern Recognition, Elsevier 2026',
    wide:false,
    img:'figures/multi-ad-2.png'
  },
  {
    cat:'method', tag:'Method · Spine Analysis',
    title:'Auto-CA Cobb Angle Pipeline',
    desc:'Automated vertebrae detection and Cobb angle measurement pipeline for adolescent idiopathic scoliosis severity classification.',
    pub:'IEEE TBME 2023',
    wide:true,
    img:'figures/ca1.png'
  },
  {
    cat:'result', tag:'Result · Spine Analysis',
    title:'Scoliosis Classification Results',
    desc:'C-shaped, S-shaped type 1, and S-shaped type 2 deformity classification with average accuracy of 0.958.',
    pub:'IEEE TBME 2023',
    wide:false,
    img:'figures/ca2.png'
  },
  {
    cat:'diagram', tag:'Diagram · Federated Learning',
    title:'Federated Medical Imaging',
    desc:'Privacy-preserving collaborative AI training across hospitals without sharing patient data — gradients aggregated at global model.',
    pub:'IEEE Consumer Electronics Magazine 2025',
    wide:false,
    img:'figures/fl1.png'
  },
  {
    cat:'concept', tag:'Concept · Stress Detection',
    title:'Physiological Sensing for Chronic Stress',
    desc:'AI framework overview for chronic stress detection using EEG, HRV, PPG, and EDA across resting, longitudinal, and reactivity paradigms.',
    pub:'Sensors, MDPI 2026',
    wide:true,
    img:'figures/eeg1.png'
  },
  {
    cat:'result', tag:'Result · Wormhole Research',
    title:'Deep Learning for Wormhole Feasibility',
    desc:'Deep learning and quantum algorithm approaches to analyse wormhole spacetime structures as alternatives to classical analytical methods.',
    pub:'Astronomy and Computing, Elsevier 2024',
    wide:false,
    img:'figures/wormhole-1.png'
  },
  {
    cat:'result', tag:'Result · Metabolomics',
    title:'Macroalgae In Silico Screening',
    desc:'Molecular docking of macroalgae lipophilic compounds against anti-DM and anti-COVID-19 targets using GC-MS metabolomics.',
    pub:'Metabolites, MDPI 2023',
    wide:false,
    img:'figures/silico1.png'
  },
  {
    cat:'concept', tag:'Concept · Quantum Information',
    title:'Memory-Dimension Distortion Bounds',
    desc:'One-shot bounds on quantum state reconstruction error under memory-dimension constraints. Two-sided bound: Psucc(E) - Sigma_d(p) <= Delta_d(E) <= 1 - P_succ^(d)(E), tight for orthogonal ensembles.',
    pub:'IEEE Transactions on Information Theory, 2026',
    wide:true,
    img:null
  },
  {
    cat:'method', tag:'Method · Quantum-Inspired Learning',
    title:'QuReUpNet: Quantum Re-Uploading Network',
    desc:'Quantum-inspired architecture that repeatedly re-injects initial token representations across encoder stages via EMA-referenced re-uploading, dual-scale Hadamard mixing, and adaptive depth growth for classification under limited data.',
    pub:'Under Review, 2025',
    wide:false,
    img:null
  },
];
