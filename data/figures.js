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
    desc:'The synchronized-vacuum wormhole (SVW) framework: opening condition ρₐ = ρₙ (entangled state matching between mouth regions) and holding condition via phantom scalar □χ = 0 supporting b(r) = R₀²/r. Throat radius R₀ = 1m permits walking-speed traversal.',
    pub:'',
    wide:true,
    img:'figures/traversable_wormhole.png'
  },
  {
    cat:'method', tag:'Method · Quantum-Inspired Learning',
    title:'Quantum-Inspired Learning',
    desc:'A quantum-inspired architecture using data re-uploading: initial token x₀ is fused at every encoder block via EMA reference. Combines Hadamard mixing (Hₙ ⊗ Hₗₒᶜ) with self-attention and adaptive depth growth L ← L+1 to refine discriminative features under limited supervision.',
    pub:'',
    wide:false,
    img:'figures/quantum_inspired_learning.png'
  },
  {
    cat:'concept', tag:'Concept · Quantum Information Theory',
    title:'One-Shot Quantum State Reconstruction',
    desc:'Derives the least average trace-distance error Δ₂(ℰ) achievable when encoding a quantum ensemble ℰ through a d-dimensional memory. Two-sided bound: Pₛᵘᵔᵔ(ℰ) − Σ₂(p) ≤ Δ₂(ℰ) ≤ 1 − Pᵈₛᵘᵔᵔ(ℰ), tight for orthogonal ensembles.',
    pub:'',
    wide:false,
    img:'figures/quantum_state_reconstruction.png'
  }
];
