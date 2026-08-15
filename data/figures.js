// ─────────────────────────────────────────────────────────────────
// TOPICS / FIGURES — shown in the Topics section
// Fields:
//   cat:   category filter tab
//   tag:   small label shown above title
//   title: card title
//   desc:  description
//   pub:   publication reference (leave empty '' for general topics)
//   wide:  true = full-width, false = half-width
//   svg:   inline SVG drawing
// ─────────────────────────────────────────────────────────────────
var FIGURES = [
  {
    cat:'concept', tag:'Concept · Quantum Gravity',
    title:'Traversable Wormholes',
    desc:'The synchronized-vacuum wormhole (SVW) framework: an opening condition (entangled state matching rho_A = rho_B) and a holding condition (phantom scalar maintaining a horizon-free throat via b(r) = R0^2/r). Human-scale throat radius R0 = 1m supports walking-speed traversal.',
    pub:'',
    wide:true,
    img:'figures/traversable_wormhole.png'
  },
  {
    cat:'method', tag:'Method · Quantum-Inspired Learning',
    title:'Quantum-Inspired Learning',
    desc:'A quantum-inspired architecture that repeatedly re-injects initial token representations across encoder stages. Combines EMA-referenced token fusion, dual-scale Hadamard-attention mixing, and adaptive depth growth to progressively refine discriminative features under limited supervision.',
    pub:'',
    wide:false,
    img:'figures/quantum_inspired_learning.png'
  },
  {
    cat:'concept', tag:'Concept · Quantum Information Theory',
    title:'One-Shot Quantum State Reconstruction',
    desc:'Derives the least average trace-distance error achievable when encoding a quantum ensemble through a d-dimensional memory. The two-sided bound is tight for orthogonal ensembles, recovering lossless source coding in the product limit.',
    pub:'',
    wide:false,
    img:'figures/quantum_state_reconstruction.png'
  }
];
