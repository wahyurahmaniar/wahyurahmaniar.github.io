// ─────────────────────────────────────────────────────
// QUIZ QUESTIONS — edit this file to add/update questions
// Each item: {q: question, o: [options array], a: correct index (0-based), e: explanation}
// ─────────────────────────────────────────────────────
var QS=[
  {q:"What does the U-Net U-shape represent?",o:["Uncertainty","Encoder-decoder with skip connections","Unsupervised learning","Universal features"],a:1,e:"U-Net's U-shape is its symmetric encoder-decoder connected by skip connections, enabling precise localization."},
  {q:"Which MRI sequence best shows peritumoral brain edema?",o:["T1-weighted","T1 with Gadolinium","T2-FLAIR","Diffusion-Weighted"],a:2,e:"T2-FLAIR suppresses CSF signal, making edema clearly visible as a bright region."},
  {q:"In federated learning, what is shared between hospitals?",o:["Patient imaging data","Model weights or gradients","De-identified metadata","Diagnosis reports"],a:1,e:"Only model weights/gradients are shared — never raw patient data — preserving patient privacy."},
  {q:"What does the Dice coefficient measure?",o:["Pixel intensity difference","Overlap between predicted and ground-truth masks","Training speed","Parameter count"],a:1,e:"Dice = 2|A intersect B|/(|A|+|B|). It measures mask overlap from 0 to 1."},
  {q:"Which is NOT a real MRI sequence?",o:["T1-weighted","T2-weighted","T3-weighted","FLAIR"],a:2,e:"There is no T3-weighted sequence. MRI uses tissue relaxation times T1 and T2."},
  {q:"What is hallucination in medical AI?",o:["Confident but fabricated findings","GPU overflow","Visual scan artifacts","Synthetic augmentation"],a:0,e:"AI hallucination means generating plausible-looking but incorrect findings — a critical patient safety concern."},
  {q:"Hounsfield Units are used in which modality?",o:["MRI","Ultrasound","CT Computed Tomography","PET scan"],a:2,e:"HU measures X-ray attenuation in CT: water=0 HU, air=-1000 HU, dense bone ~+1000 HU."},
  {q:"What does Grad-CAM visualize?",o:["Training loss","Influential image regions for a prediction","Optimization paths","Camera calibration"],a:1,e:"Grad-CAM highlights which image regions most influenced the model decision — key for explainability."},
];
