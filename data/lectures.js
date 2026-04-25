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
  {t:'AI for Medical Image Segmentation: From U-Net to Foundation Models',
   v:'Stanford Medical School', y:'2025', ty:'tk', tl:'Keynote',
   desc:'A comprehensive keynote covering the evolution of medical image segmentation from classic U-Net to vision transformers and foundation models like SAM and MedSAM. Special focus on clinical translation challenges and real-world deployment.',
   links:['Slides (PDF)','Video Recording'],
   tags:['U-Net','Foundation Models','Clinical AI'],
   img: null,      // e.g. 'figures/stanford2025.jpg'
   slides: null},  // e.g. 'https://drive.google.com/...'

  {t:'Federated Learning in Clinical Imaging: Challenges and Opportunities',
   v:'Kyoto University', y:'2024', ty:'ts', tl:'Seminar',
   desc:'In-depth seminar on federated learning for multi-hospital MRI analysis. Covered privacy-preserving gradient aggregation, handling data heterogeneity across sites.',
   links:['Slides (PDF)','Code Repository'],
   tags:['Federated Learning','Privacy','MRI'],
   img: null,
   slides: null},

  {t:'Explainability and Trust in Medical AI Diagnostic Systems',
   v:'Tohoku University', y:'2024', ty:'tl', tl:'Lecture',
   desc:'Guest lecture on XAI methods for clinical AI — Grad-CAM, SHAP, and prototype-based explanations. Discussed regulatory requirements and practical integration into DICOM viewers.',
   links:['Lecture Notes','Slides'],
   tags:['XAI','Grad-CAM','Regulation'],
   img: null,
   slides: null},

  {t:'Foundation Models for Radiology: Opportunities and Risks',
   v:'NII Shonan Meeting', y:'2023', ty:'tw', tl:'Workshop',
   desc:'Workshop examining large vision-language models for radiology report generation. Critically analyzed hallucination risks, biases from training data, and evaluation challenges.',
   links:['Workshop Paper','Slides (PDF)'],
   tags:['Foundation Models','LLMs','Safety'],
   img: null,
   slides: null},

  {t:'Self-Supervised Pretraining on Unlabeled Medical Images',
   v:'National University of Singapore', y:'2022', ty:'ti', tl:'Invited Talk',
   desc:'Presented our contrastive self-supervised learning approach for medical image pretraining. Showed that SSL pretraining on 500K unlabeled CT scans significantly reduces labeled data requirements.',
   links:['Paper (MICCAI)','Slides'],
   tags:['Self-Supervised','Contrastive Learning','CT'],
   img: null,
   slides: null},

  {t:'When Remote Sensing Meets Artificial Intelligence',
   v:'UNIVERSITAS NEGERI MAKASSAR', y:'2021', ty:'ts', tl:'Seminar',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vRS67QdZXQfBQnbhRx8qUbDeVHFk_GwA-FWUow_grzJw3OOVy7SpdO3ymMO_x81QA/pub?start=true&loop=false&delayms=3000'},

  {t:'PUBLICATIONS IN ARTIFICIAL INTELLIGENCE AND MEDICAL TECHNOLOGY',
   v:'UNIVERSITAS HARAPAN BANGSA (UHB)', y:'2022', ty:'ti', tl:'Invited Talk',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vS95tdZf6vsjDu2sXJquwh2MuhEkMCYxrYHFs61B1q_-5TsV19Llf1dkV4iGCzZtg/pub?start=true&loop=false&delayms=3000'},
  
  {t:'AI TECHNOLOGY IN MEDICAL IMAGING AND ASSISTIVE DEVICES',
   v:'UNIVERSITAS INDONESIA (UI)', y:'2022', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vSmA-KGamUwFrR1e4LD33vQUpSTVWe11um-Nf_D5_5xbNSCKSFrjiMScBa2NJxMng/pub?start=true&loop=false&delayms=3000'},
  
  {t:'When Remote Sensing Meets Artificial Intelligence',
   v:'UNIVERSITAS NEGERI MAKASSAR (UNM)', y:'2021', ty:'ts', tl:'Seminar',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vRS67QdZXQfBQnbhRx8qUbDeVHFk_GwA-FWUow_grzJw3OOVy7SpdO3ymMO_x81QA/pub?start=true&loop=false&delayms=3000'},

  {t:'Artificial Intelligence Applications in Real-Life',
   v:'Sekolah Tinggi Teknologi Bandung (STTB)', y:'2021', ty:'tl', tl:'Lecture',
   links:['Slides'],
   img: null,
   slides: 'https://docs.google.com/presentation/d/e/2PACX-1vR5J4GNWJIQ85spX4gael5fF7ZdyBtMWJ2HpjhfL5ZP__8EM0KXITqv3cBNvNhvIA/pub?start=true&loop=false&delayms=3000'},
];
