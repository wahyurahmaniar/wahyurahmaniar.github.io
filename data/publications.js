// ─────────────────────────────────────────────────────────────────
// PUBLICATIONS
// ls: array of {l:'Label', u:'https://...'} for clickable links
// img: 'figures/paper1.png'  — single image
// imgs: ['figures/a.png','figures/b.png']  — multiple images (arrow slideshow)
// ─────────────────────────────────────────────────────────────────
var PU = [
  {
    t:'Multi-AD: cross-domain unsupervised anomaly detection for medical and industrial applications',
    a:'Wahyu Rahmaniar and Kenji Suzuki',
    v:'Pattern Recognition &middot; Elsevier &middot; 2026',
    ls:[{l:'arXiv',u:'https://arxiv.org/abs/2602.05426'},{l:'DOI',u:'https://doi.org/10.1016/j.patcog.2025.112486'},{l:'Code',u:'#'}],
    ab:'Traditional deep learning models often lack annotated data, especially in cross-domain applications such as anomaly detection, which is critical for early disease diagnosis in medicine and defect detection in industry. To address this challenge, we propose Multi-AD, an unsupervised convolutional neural network (CNN) model for robust anomaly detection across medical and industrial domain images. Our approach utilizes the squeeze-and-excitation (SE) block to enhance feature extraction by applying channel-wise attention, enabling the model to focus on the most relevant features and detect subtle anomalies. Additionally, knowledge distillation (KD) transfers informative features from the teacher to the student model, enabling effective learning of the differences between normal and anomalous data. Multi-AD was evaluated on several medical datasets, including brain MRI, liver CT, and retina OCT, as well as industrial datasets, such as MVTec AD, demonstrating strong generalization across multiple domains. Experimental results demonstrated that our approach consistently outperformed state-of-the-art models, achieving the best average accuracy for anomaly localization at both the image level (81.4% for medical and 99.6% for industrial) and pixel level (97.0% for medical and 98.4% for industrial).',
    imgs:['figures/multi-ad-1.png','figures/multi-ad-1b.png','figures/multi-ad-1c.png','figures/multi-ad-1d.png','figures/multi-ad-1e.png','figures/multi-ad-2.png','figures/multi-ad-3.png']
  },
  {
    t:'Practical Applications of Artificial Intelligence: A Sector-Wise Review of Challenges and Future Directions',
    a:'Wahyu Rahmaniar, Qazi Mazhar ul Haq, Muchammad Edo Iskandar, and Alfian Maarif',
    v:'IT Professional &middot; IEEE &middot; 2025',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/11125707'},{l:'DOI',u:'https://doi.org/10.1109/MITP.2025.3578694'}],
    ab:'Artificial intelligence (AI) has developed rapidly and is becoming a technological foundation that drives innovation and efficiency in various sectors. This article examines real-world applications of AI in several key industries. Several case studies are explained to better understand the practical applications, outcomes, and challenges of implementing AI. This review aims to provide important points regarding the application of AI for professionals and researchers as well as possible solutions to face AI challenges in the real world.',
    img:'figures/itpro-1.png'
  },
  {
    t:'Future of the medical world: collaborative medical imaging AI with federated learning',
    a:'Wahyu Rahmaniar, Zhipeng Deng, Yuqiao Yang, Ze Jin, and Kenji Suzuki',
    v:'IEEE Consumer Electronics Magazine &middot; IEEE &middot; 2025',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/10876609'},{l:'DOI',u:'https://doi.org/10.1109/MCE.2025.3539474'}],
    ab:'Integrating federated learning with medical imaging represents a significant development in the rapidly evolving field of healthcare technology. Federated learning can enable medical institutions to train AI models collaboratively while preserving patient privacy by keeping data localized, addressing regulatory and ethical concerns associated with centralized data sharing. This review explores the transformative potential of federated learning, including its methodologies, associated challenges, and future implications.',
    imgs:['figures/fl1.png','figures/fl2.png']
  },
  {
    t:'ChatGPT for Software Development: Opportunities and Challenges',
    a:'Wahyu Rahmaniar',
    v:'IT Professional &middot; IEEE &middot; 2024',
    ls:[{l:'IEEE',u:'https://www.computer.org/csdl/magazine/it/2024/03/10572230/1Y5ARhBvqla'},{l:'DOI',u:'https://doi.ieeecomputersociety.org/10.1109/MITP.2024.3379831'}],
    ab:'Rapid natural language processing advances, such as OpenAI ChatGPT, promise profound transformations across multiple domains, including software development. This article discusses ChatGPT role in software engineering, including an investigation of implications and applications highlighting ChatGPT code-assistance capabilities. Through a series of analyses, we discuss the real impact of ChatGPT on open source software development. However, apart from offering efficiency and innovation, ChatGPT mandates a careful and well-informed approach to integration into software development paradigms.',
    img:'figures/chatgpt.png'
  },
  {
    t:'Deep learning and quantum algorithms approach to investigating the feasibility of wormholes: A review',
    a:'Wahyu Rahmaniar, B Ramzan, and Alfian Maarif',
    v:'Astronomy and Computing &middot; Elsevier &middot; 2024',
    ls:[{l:'ScienceDirect',u:'https://www.sciencedirect.com/science/article/pii/S2213133724000179'},{l:'DOI',u:'https://doi.org/10.1016/j.ascom.2024.100802'}],
    ab:'Wormholes, hypothetical structures connecting distant regions of spacetime, have long captured the imagination of scientists and science fiction fans alike. In this review, we investigate the potential of deep learning and quantum algorithms to explain the implications of wormholes as an alternative to traditional analytical methods. A comprehensive analysis of the current understanding of wormholes is elaborated to discuss its theoretical foundations and limitations further.',
    imgs:['figures/wormhole-1.png','figures/wormhole-2.png','figures/wormhole-3.png','figures/wormhole-4.png']
  },
  {
    t:'In Vitro Anti-Oxidant, In Vivo Anti-Hyperglycemic, and Untargeted Metabolomics-Aided-In Silico Screening of Macroalgae Lipophilic Extracts',
    a:'Anggit Listyacahyani Sunarwidhi, Wahyu Rahmaniar, et al.',
    v:'Metabolites &middot; MDPI &middot; 2023',
    ls:[{l:'MDPI',u:'https://www.mdpi.com/2218-1989/13/12/1177'},{l:'DOI',u:'https://doi.org/10.3390/metabo13121177'}],
    ab:'COVID-19 patients with comorbid DM face more severe outcomes, indicating that hyperglycemic conditions exacerbate SARS-CoV-2 infection. This study identifies potential compounds in macroalgae Sargassum cristaefolium, Tricleocarpa cylindrica, and Ulva lactuca lipophilic extracts for treating DM and COVID-19 using in vitro, in vivo, and metabolomic-integrated in silico approaches. Notably, steroid-derived compounds in T. cylindrica showed higher binding activity than known ligands for anti-DM and anti-COVID-19 targets.',
    imgs:['figures/silico1.png','figures/silico2.png','figures/silico3.png','figures/silico4.png','figures/silico5.png','figures/silico6.png','figures/silico7.png','figures/silico8.png','figures/silico9.png']
  }
];
