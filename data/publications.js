// ─────────────────────────────────────────────────────────────────
// PUBLICATIONS — add your papers here
// Fields:
//   t:   paper title
//   a:   authors (your name, co-authors)
//   v:   venue (journal/conference · year)
//   ls:  link labels e.g. ['PDF','DOI','Code','Slides']
//   ab:  abstract text (shown in Abstract tab)
//   img: 'figures/paper1.png'   ← upload image to figures/ folder (shown in Figure tab)
//   fig: '<svg>...</svg>'       ← OR use inline SVG diagram instead of img
// ─────────────────────────────────────────────────────────────────
var PU = [
  {
    t:'Multi-AD: cross-domain unsupervised anomaly detection for medical and industrial applications',
    a:'Wahyu Rahmaniar and Kenji Suzuki',
    v:'Pattern Recognition &middot; Elsevier &middot; 2026',
    ls:['https://arxiv.org/abs/2602.05426','https://doi.org/10.1016/j.patcog.2025.112486','Code'],
    ab:'Traditional deep learning models often lack annotated data, especially in cross-domain applications such as anomaly detection, which is critical for early disease diagnosis in medicine and defect detection in industry. To address this challenge, we propose Multi-AD, an unsupervised convolutional neural network (CNN) model for robust anomaly detection across medical and industrial domain images. Our approach utilizes the squeeze-and-excitation (SE) block to enhance feature extraction by applying channel-wise attention, enabling the model to focus on the most relevant features and detect subtle anomalies. Additionally, knowledge distillation (KD) transfers informative features from the teacher to the student model, enabling effective learning of the differences between normal and anomalous data. Then, the discriminator network further enhances the model’s capacity to distinguish between normal and anomalous data. At the inference stage, by integrating multi-scale features, the student model gains the ability to detect anomalies of varying sizes. Teacher-student (T-S) architecture ensures consistency in representing high-dimensional features while adapting these features to improve anomaly detection. Multi-AD was evaluated on several medical datasets, including brain MRI, liver CT, and retina OCT, as well as industrial datasets, such as MVTec AD, demonstrating strong generalization across multiple domains. Experimental results demonstrated that our approach consistently outperformed state-of-the-art models, achieving the best average accuracy for anomaly localization at both the image level (81.4 % for medical and 99.6 % for industrial) and pixel level (97.0 % for medical and 98.4 % for industrial), making it effective for real-world applications.',
    img: 'figures/Multi-ad.png',  // e.g. 'figures/paper1.png' — set this to show your figure image
},
  {
    t:'Transformer-based Cardiac MRI Segmentation with Uncertainty Quantification',
    a:'Wahyu Rahmaniar, Co-Author C',
    v:'IEEE Transactions on Medical Imaging &middot; Vol. 42 &middot; 2023',
    ls:['PDF','DOI'],
    ab:'A transformer-based U-Net for cardiac MRI segmentation providing pixel-wise uncertainty estimates via Monte Carlo dropout. Uncertainty maps help clinicians identify regions where model predictions are less reliable, improving clinical trust.',
    img: null,  // e.g. 'figures/paper1.png' — set this to show your figure image
    fig:'<svg width="100%" height="110" viewBox="0 0 300 110"><rect x="10" y="20" width="60" height="70" rx="3" fill="rgba(139,92,246,.05)" stroke="rgba(139,92,246,.3)" stroke-width="1"/><text x="40" y="58" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(139,92,246,.7)">Cardiac MRI</text><rect x="90" y="30" width="120" height="50" rx="4" fill="rgba(0,229,255,.08)" stroke="rgba(0,229,255,.45)" stroke-width="1.5"/><text x="150" y="52" text-anchor="middle" font-family="monospace" font-size="7" fill="#00E5FF">Transformer</text><text x="150" y="63" text-anchor="middle" font-family="monospace" font-size="7" fill="#00E5FF">U-Net</text><rect x="230" y="20" width="60" height="30" rx="3" fill="rgba(16,185,129,.05)" stroke="rgba(16,185,129,.3)" stroke-width="1"/><text x="260" y="38" text-anchor="middle" font-family="monospace" font-size="6" fill="#6EE7B7">Segmentation</text><rect x="230" y="60" width="60" height="30" rx="3" fill="rgba(245,158,11,.05)" stroke="rgba(245,158,11,.3)" stroke-width="1"/><text x="260" y="78" text-anchor="middle" font-family="monospace" font-size="6" fill="#FCD34D">Uncertainty</text></svg>'
  },
  {
    t:'Self-Supervised Contrastive Learning for CT Scan Anomaly Detection',
    a:'Co-Author D, Wahyu Rahmaniar, Co-Author E',
    v:'MICCAI 2022',
    ls:['PDF','DOI','Slides'],
    ab:'Self-supervised contrastive learning for CT anomaly detection without labeled data during pretraining. By learning representations from unlabeled CT scans, the model detects anomalies as out-of-distribution samples, achieving competitive performance with only 10% labeled data.',
    img: null,  // e.g. 'figures/paper1.png' — set this to show your figure image
    fig:'<svg width="100%" height="110" viewBox="0 0 300 110"><circle cx="80" cy="55" r="35" fill="rgba(0,229,255,.05)" stroke="rgba(0,229,255,.3)" stroke-width="1"/><text x="80" y="50" text-anchor="middle" font-family="monospace" font-size="6.5" fill="rgba(0,229,255,.7)">Normal</text><text x="80" y="62" text-anchor="middle" font-family="monospace" font-size="6.5" fill="rgba(0,229,255,.7)">CT Scans</text><rect x="128" y="42" width="44" height="26" rx="4" fill="rgba(0,229,255,.1)" stroke="rgba(0,229,255,.5)" stroke-width="1.5"/><text x="150" y="58" text-anchor="middle" font-family="monospace" font-size="6" fill="#00E5FF">Contrastive</text><circle cx="225" cy="40" r="18" fill="rgba(16,185,129,.05)" stroke="rgba(16,185,129,.3)" stroke-width="1"/><text x="225" y="43" text-anchor="middle" font-family="monospace" font-size="6" fill="#6EE7B7">Normal</text><circle cx="255" cy="75" r="14" fill="rgba(239,68,68,.07)" stroke="rgba(239,68,68,.35)" stroke-width="1.5"/><text x="255" y="78" text-anchor="middle" font-family="monospace" font-size="6" fill="#FCA5A5">Anomaly</text></svg>'
  },
  {
    t:'Few-Shot Histopathology Classification via Prototype Networks with Domain Adaptation',
    a:'Wahyu Rahmaniar, Co-Author F',
    v:'CVPR Workshop on Medical Computer Vision &middot; 2021',
    ls:['PDF','DOI'],
    ab:'Combines prototype networks with domain adaptation for histopathology classification with as few as 5 labeled examples per cancer type, enabling rapid deployment to new cancer subtypes and staining protocols.',
    img: null,  // e.g. 'figures/paper1.png' — set this to show your figure image
    fig:'<svg width="100%" height="110" viewBox="0 0 300 110"><rect x="10" y="25" width="50" height="60" rx="3" fill="rgba(139,92,246,.05)" stroke="rgba(139,92,246,.25)" stroke-width="1"/><text x="35" y="55" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(139,92,246,.7)">Histopath</text><text x="35" y="65" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(139,92,246,.7)">Patches</text><circle cx="125" cy="35" r="12" fill="rgba(0,229,255,.07)" stroke="rgba(0,229,255,.4)" stroke-width="1"/><circle cx="125" cy="75" r="12" fill="rgba(16,185,129,.07)" stroke="rgba(16,185,129,.4)" stroke-width="1"/><circle cx="155" cy="55" r="12" fill="rgba(245,158,11,.07)" stroke="rgba(245,158,11,.4)" stroke-width="1"/><text x="140" y="100" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(0,229,255,.5)">Prototypes</text><rect x="195" y="25" width="95" height="60" rx="4" fill="rgba(0,229,255,.04)" stroke="rgba(0,229,255,.2)" stroke-width="1"/><text x="242" y="52" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(0,229,255,.7)">Cancer Type A</text><text x="242" y="65" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(16,185,129,.7)">Cancer Type B</text></svg>'
  },
  {
    t:'Attention-Guided U-Net for Automated Retinal Lesion Segmentation in Fundus Images',
    a:'Wahyu Rahmaniar, Co-Author G, Co-Author H',
    v:'Computers in Biology and Medicine &middot; 2020',
    ls:['PDF','DOI'],
    ab:'Attention gates selectively suppress irrelevant background regions and highlight lesion features across multiple scales, improving detection of hard exudates, microaneurysms, and hemorrhages in retinal fundus images.',
    img: null,  // e.g. 'figures/paper1.png' — set this to show your figure image
    fig:'<svg width="100%" height="110" viewBox="0 0 300 110"><circle cx="55" cy="55" r="38" fill="rgba(139,92,246,.04)" stroke="rgba(139,92,246,.2)" stroke-width="1"/><circle cx="55" cy="55" r="25" fill="rgba(139,92,246,.06)" stroke="rgba(139,92,246,.3)" stroke-width="1"/><circle cx="55" cy="43" r="5" fill="rgba(239,68,68,.5)" stroke="rgba(239,68,68,.8)" stroke-width="1"/><circle cx="67" cy="60" r="3" fill="rgba(245,158,11,.6)"/><circle cx="43" cy="62" r="4" fill="rgba(239,68,68,.4)"/><text x="55" y="100" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(139,92,246,.6)">Retinal Fundus</text><rect x="128" y="28" width="142" height="54" rx="4" fill="rgba(0,229,255,.04)" stroke="rgba(0,229,255,.25)" stroke-width="1"/><text x="199" y="50" text-anchor="middle" font-family="monospace" font-size="7" fill="#00E5FF">Attention U-Net</text><circle cx="165" cy="65" r="4" fill="rgba(239,68,68,.5)"/><circle cx="185" cy="62" r="3" fill="rgba(245,158,11,.5)"/><circle cx="205" cy="65" r="4" fill="rgba(239,68,68,.4)"/></svg>'
  },
  {
    t:'Deep Learning Based Lung Nodule Detection in Low-Dose CT with Data Augmentation',
    a:'Co-Author I, Wahyu Rahmaniar',
    v:'Medical Physics &middot; Vol. 47 &middot; 2019',
    ls:['PDF','DOI'],
    ab:'3D convolutional neural network for lung nodule detection in low-dose CT with aggressive data augmentation. Achieves 94.2% sensitivity at 1 false positive per scan on the LUNA16 challenge dataset.',
    img: null,  // e.g. 'figures/paper1.png' — set this to show your figure image
    fig:'<svg width="100%" height="110" viewBox="0 0 300 110"><rect x="10" y="15" width="80" height="80" rx="4" fill="rgba(0,0,0,.2)" stroke="rgba(0,229,255,.2)" stroke-width="1"/><circle cx="50" cy="55" r="28" fill="rgba(100,100,100,.12)" stroke="rgba(150,150,150,.2)" stroke-width="0.5"/><circle cx="55" cy="48" r="7" fill="rgba(239,68,68,.3)" stroke="rgba(239,68,68,.7)" stroke-width="1.5"/><text x="50" y="100" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(0,229,255,.5)">Low-Dose CT</text><rect x="115" y="35" width="70" height="40" rx="4" fill="rgba(0,229,255,.07)" stroke="rgba(0,229,255,.4)" stroke-width="1.5"/><text x="150" y="52" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#00E5FF">3D CNN</text><text x="150" y="63" text-anchor="middle" font-family="monospace" font-size="6.5" fill="#00E5FF">Detector</text><rect x="210" y="15" width="80" height="80" rx="4" fill="rgba(0,0,0,.2)" stroke="rgba(16,185,129,.2)" stroke-width="1"/><circle cx="250" cy="55" r="28" fill="rgba(100,100,100,.12)" stroke="rgba(150,150,150,.2)" stroke-width="0.5"/><circle cx="255" cy="48" r="7" fill="none" stroke="rgba(16,185,129,.9)" stroke-width="1.5" stroke-dasharray="2 1"/><text x="250" y="100" text-anchor="middle" font-family="monospace" font-size="6" fill="rgba(16,185,129,.6)">Detected</text></svg>'
  }
];
