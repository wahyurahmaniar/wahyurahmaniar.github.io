// ─────────────────────────────────────────────────────
// TOPICS — edit this file to add/update topics (research figures, new ideas, concepts, etc.)
// Each item: {cat: category, tag: display tag, title: figure title,
//             desc: description, pub: publication reference,
//             img: image path (e.g. 'figures/fig1.png') OR svg: SVG markup string}
// cat values: any string — e.g. 'method' | 'result' | 'diagram' | 'concept' | 'tutorial'
// ─────────────────────────────────────────────────────
var FIGURES = [
  {
    cat: 'method',
    tag: 'Method · Architecture',
    title: 'Transformer-Enhanced U-Net',
    desc: 'Encoder-decoder with transformer bottleneck for brain lesion segmentation.',
    pub: 'IEEE TMI 2023',
    wide: true,
    svg: '<svg width="100%" height="185" viewBox="0 0 530 185"><rect x="8" y="16" width="42" height="153" rx="3" fill="rgba(0,229,255,.04)" stroke="rgba(0,229,255,.18)" stroke-width="1"/><rect x="62" y="32" width="34" height="121" rx="3" fill="rgba(0,229,255,.06)" stroke="rgba(0,229,255,.22)" stroke-width="1"/><rect x="108" y="52" width="26" height="81" rx="3" fill="rgba(0,229,255,.09)" stroke="rgba(0,229,255,.28)" stroke-width="1"/><rect x="146" y="70" width="21" height="45" rx="3" fill="rgba(0,229,255,.13)" stroke="rgba(0,229,255,.36)" stroke-width="1"/><rect x="179" y="79" width="172" height="27" rx="4" fill="rgba(0,229,255,.16)" stroke="rgba(0,229,255,.6)" stroke-width="1.5"/><text x="265" y="97" text-anchor="middle" font-family="monospace" font-size="7.5" fill="#00E5FF">Transformer Bottleneck</text><rect x="363" y="70" width="21" height="45" rx="3" fill="rgba(0,229,255,.1)" stroke="rgba(0,229,255,.3)" stroke-width="1"/><rect x="396" y="52" width="26" height="81" rx="3" fill="rgba(0,229,255,.07)" stroke="rgba(0,229,255,.22)" stroke-width="1"/><rect x="434" y="32" width="34" height="121" rx="3" fill="rgba(0,229,255,.05)" stroke="rgba(0,229,255,.18)" stroke-width="1"/><rect x="480" y="16" width="42" height="153" rx="3" fill="rgba(0,229,255,.03)" stroke="rgba(0,229,255,.14)" stroke-width="1"/><path d="M79 92 Q180 162 363 92" fill="none" stroke="rgba(16,185,129,.2)" stroke-width="1" stroke-dasharray="4 3"/><text x="265" y="176" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(16,185,129,.4)">skip connections</text></svg>'
  },
  {
    cat: 'result',
    tag: 'Result · Performance',
    title: 'Dice Score Comparison',
    desc: 'Improvement over baseline across all BraTS2023 tumor sub-regions.',
    pub: 'MIA 2024',
    wide: false,
    svg: '<svg width="100%" height="138" viewBox="0 0 220 135"><line x1="18" y1="7" x2="18" y2="108" stroke="rgba(0,229,255,.12)" stroke-width="1"/><line x1="18" y1="108" x2="202" y2="108" stroke="rgba(0,229,255,.12)" stroke-width="1"/><polyline points="28,95 62,68 96,44 130,33 164,27 196,25" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><polyline points="28,104 62,92 96,82 130,77 164,75 196,77" fill="none" stroke="rgba(0,229,255,.28)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3"/><circle cx="196" cy="25" r="3" fill="#00E5FF"/><text x="176" y="21" font-family="monospace" font-size="7" fill="#00E5FF">Ours</text><text x="148" y="88" font-family="monospace" font-size="6.5" fill="rgba(0,229,255,.4)">Baseline</text></svg>'
  },
  {
    cat: 'diagram',
    tag: 'Diagram · Federated Learning',
    title: 'Federated Multi-Hospital Training',
    desc: 'Gradient aggregation without sharing patient data.',
    pub: 'MIA 2024',
    wide: false,
    svg: '<svg width="100%" height="138" viewBox="0 0 220 135"><rect x="65" y="50" width="90" height="28" rx="4" fill="rgba(0,229,255,.1)" stroke="rgba(0,229,255,.45)" stroke-width="1.5"/><text x="110" y="69" text-anchor="middle" font-family="monospace" font-size="7.5" fill="#00E5FF">Global Model</text><rect x="3" y="5" width="48" height="22" rx="3" fill="rgba(16,185,129,.06)" stroke="rgba(16,185,129,.25)" stroke-width="1"/><text x="27" y="20" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#6EE7B7">Hospital A</text><rect x="169" y="5" width="48" height="22" rx="3" fill="rgba(16,185,129,.06)" stroke="rgba(16,185,129,.25)" stroke-width="1"/><text x="193" y="20" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#6EE7B7">Hospital B</text><rect x="3" y="108" width="48" height="22" rx="3" fill="rgba(16,185,129,.06)" stroke="rgba(16,185,129,.25)" stroke-width="1"/><text x="27" y="123" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#6EE7B7">Hospital C</text><rect x="169" y="108" width="48" height="22" rx="3" fill="rgba(16,185,129,.06)" stroke="rgba(16,185,129,.25)" stroke-width="1"/><text x="193" y="123" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#6EE7B7">Hospital D</text><line x1="51" y1="16" x2="65" y2="60" stroke="rgba(0,229,255,.22)" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#am)"/><line x1="169" y1="16" x2="155" y2="60" stroke="rgba(0,229,255,.22)" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#am)"/><line x1="51" y1="119" x2="65" y2="79" stroke="rgba(0,229,255,.22)" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#am)"/><line x1="169" y1="119" x2="155" y2="79" stroke="rgba(0,229,255,.22)" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#am)"/><defs><marker id="am" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="rgba(0,229,255,.35)" stroke-width="1.5" stroke-linecap="round"/></marker></defs></svg>'
  },
];

// To add a real image instead of SVG:
// Replace the 'svg' field with 'img': 'figures/your-image.png'
// Upload your image to a 'figures/' folder in your GitHub repo
