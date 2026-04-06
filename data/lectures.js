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

  {t:'Privacy-Preserving AI in Healthcare: Federated Learning Approaches',
   v:'University of Oxford, UK', y:'2022', ty:'ts', tl:'Seminar',
   desc:'Seminar on federated learning with differential privacy. Covered epsilon-delta guarantees on gradient sharing and compliance with GDPR and HIPAA regulations in practice.',
   links:['Slides (PDF)'],
   tags:['Privacy','Differential Privacy','GDPR'],
   img: null,
   slides: null},

  {t:'Clinical Deployment of AI: Regulatory and Safety Considerations',
   v:'RIKEN Center for Medical Sciences', y:'2021', ty:'tl', tl:'Lecture',
   desc:'Lecture on the full pipeline from AI research to clinical deployment — FDA 510(k) submissions, ISO 13485 requirements, post-market surveillance.',
   links:['Lecture Slides','Reference Checklist'],
   tags:['Regulation','FDA','Clinical Deployment'],
   img: null,
   slides: null},
];
