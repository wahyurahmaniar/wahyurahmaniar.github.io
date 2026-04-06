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
var NA = [
  {b:'nb-t', l:'Keynote',     t:'Invited keynote at Stanford Radiology AI Symposium on foundation models', d:'March 2025',
   url: null, img: null},
  {b:'nb-n', l:'New Course',  t:'Launched online course: Deep Learning for Medical Imaging on OpenCourse platform', d:'April 2025',
   url: null, img: null},
  {b:'nb-p', l:'Preprint',    t:'Foundation Models for Radiology: A Survey of Current Approaches and Clinical Validation', d:'February 2025',
   url: null, img: null},
  {b:'nb-w', l:'Workshop',    t:'Organizing MICCAI 2025 Workshop on Federated Learning for Medical Imaging', d:'September 2025',
   url: null, img: null},
  {b:'nb-t', l:'Invited Talk',t:'Talk at NeurIPS 2024 Workshop on Medical Imaging and AI Safety', d:'December 2024',
   url: null, img: null},
  {b:'nb-a', l:'Award',       t:'Best Paper Award at MICCAI 2024 for cardiac MRI segmentation work', d:'October 2024',
   url: null, img: null},
  {b:'nb-n', l:'Open Source', t:'MedSeg Framework v2.0 released with 15+ pretrained models and MONAI integration', d:'October 2024',
   url: null, img: null},
  {b:'nb-a', l:'Grant',       t:'Received JSPS Grant-in-Aid for privacy-preserving clinical AI research', d:'April 2024',
   url: null, img: null},
  {b:'nb-p', l:'New Paper',   t:'Federated Learning for Brain Tumor Segmentation accepted in Medical Image Analysis', d:'January 2024',
   url: null, img: null},
  {b:'nb-w', l:'Media',       t:'Research featured in Nature Methods highlight on privacy-preserving AI in healthcare', d:'November 2024',
   url: null, img: null},
];
