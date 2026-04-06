// ─────────────────────────────────────────────────────────────────
// PUBLICATIONS
// ls: array of {l:'Label', u:'https://...'} for clickable links
//     OR just ['PDF','DOI'] if no URLs yet
// img: 'figures/paper1.png'  upload to figures/ folder in repo
// ─────────────────────────────────────────────────────────────────
var PU = [
  {
    t:'Multi-AD: cross-domain unsupervised anomaly detection for medical and industrial applications',
    a:'Wahyu Rahmaniar and Kenji Suzuki',
    v:'Pattern Recognition &middot; Elsevier &middot; 2026',
    ls:[{l:'arXiv',u:'https://arxiv.org/abs/2602.05426'},{l:'DOI',u:'https://doi.org/10.1016/j.patcog.2025.112486'},{l:'Code',u:'#'}],
    ab:'Traditional deep learning models often lack annotated data, especially in cross-domain applications such as anomaly detection, which is critical for early disease diagnosis in medicine and defect detection in industry. To address this challenge, we propose Multi-AD, an unsupervised convolutional neural network (CNN) model for robust anomaly detection across medical and industrial domain images. Our approach utilizes the squeeze-and-excitation (SE) block to enhance feature extraction by applying channel-wise attention, enabling the model to focus on the most relevant features and detect subtle anomalies. Additionally, knowledge distillation (KD) transfers informative features from the teacher to the student model, enabling effective learning of the differences between normal and anomalous data. Then, the discriminator network further enhances the model’s capacity to distinguish between normal and anomalous data. At the inference stage, by integrating multi-scale features, the student model gains the ability to detect anomalies of varying sizes. Teacher-student (T-S) architecture ensures consistency in representing high-dimensional features while adapting these features to improve anomaly detection. Multi-AD was evaluated on several medical datasets, including brain MRI, liver CT, and retina OCT, as well as industrial datasets, such as MVTec AD, demonstrating strong generalization across multiple domains. Experimental results demonstrated that our approach consistently outperformed state-of-the-art models, achieving the best average accuracy for anomaly localization at both the image level (81.4 % for medical and 99.6 % for industrial) and pixel level (97.0 % for medical and 98.4 % for industrial), making it effective for real-world applications.',
    img:'figures/Multi-ad.png'
  },
  {
    t:'Practical Applications of Artificial Intelligence: A Sector-Wise Review of Challenges and Future Directions',
    a:'Wahyu Rahmaniar, Qazi Mazhar ul Haq, Muchammad Edo Iskandar, and Alfian Maarif',
    v:'IT Professional &middot; IEEE &middot; 2025',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/11125707'},{l:'DOI',u:'https://doi.org/10.1109/MITP.2025.3578694'}],
    ab:'Artificial intelligence (AI) has developed rapidly and is becoming a technological foundation that drives innovation and efficiency in various sectors. This article examines real-world applications of AI in several key industries. Several case studies are explained to better understand the practical applications, outcomes, and challenges of implementing AI. This review aims to provide important points regarding the application of AI for professionals and researchers as well as possible solutions to face AI challenges in the real world. As AI continues to develop, it opens challenges and opportunities for current research and technology. In the future, it will be necessary to develop an AI framework that can adapt to various sectors.',
    img:'figures/itpro-1.png'
  },
  {
    t:'Future of the medical world: collaborative medical imaging AI with federated learning',
    a:'Wahyu Rahmaniar, Zhipeng Deng, Yuqiao Yang, Ze Jin, and Kenji Suzuki',
    v:'IEEE Consumer Electronics Magazine &middot; IEEE &middot; 2025',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/10876609'},{l:'DOI',u:'https://doi.org/10.1109/MCE.2025.3539474'}],
    ab:'Integrating federated learning with medical imaging represents a significant development in the rapidly evolving field of healthcare technology. Federated learning can enable medical institutions to train AI models collaboratively while preserving patient privacy by keeping data localized, addressing regulatory, and ethical concerns associated with centralized data sharing. Moreover, federated learning can affect a shift from hospital-centric care to proactive and continuous care in everyday settings by ensuring real-time data-driven support beyond the clinical environment. In particular, federated learning can take advantage of new consumer technologies by aggregating data from wearable health devices, smart home monitoring systems, and patient-centric tools, empowering individuals to manage their health actively. However, while federated learning shows great promise in improving diagnostics, fostering research collaborations, and facilitating continuous care, it also faces challenges, such as data heterogeneity and model aggregation complexity. As healthcare technology evolves toward a future where privacy, collaboration, and personalization coexist, federated learning has emerged as a critical framework for driving ethically responsible and innovative medical practices. This review explores the transformative potential of federated learning, including its methodologies, associated challenges, and future implications.',
    img:'figures/fl.png'
  },
  {
    t:'ChatGPT for Software Development: Opportunities and Challenges',
    a:'Wahyu Rahmaniar',
    v:'IT Professional &middot; IEEE &middot; 2024',
    ls:[{l:'IEEE',u:'https://www.computer.org/csdl/magazine/it/2024/03/10572230/1Y5ARhBvqla'},{l:'DOI',u:'https://doi.ieeecomputersociety.org/10.1109/MITP.2024.3379831'}],
    ab:'Rapid natural language processing advances, such as OpenAI’s ChatGPT, promise profound transformations across multiple domains, including software development. This article discusses ChatGPT’s role in software engineering, including an investigation of implications and applications highlighting ChatGPT’s code-assistance capabilities. Through a series of analyses, we discuss the real impact of ChatGPT on open source software development. However, apart from offering efficiency and innovation, ChatGPT mandates a careful and well-informed approach to integration into software development paradigms.',
    img:null
  },
  {
    t:'Deep learning and quantum algorithms approach to investigating the feasibility of wormholes: A review',
    a:'Wahyu Rahmaniar, B Ramzan, and Alfian Maarif',
    v:'Astronomy and Computing &middot; Elsevier &middot; 2024',
    ls:[{l:'ScienceDirect',u:'https://www.sciencedirect.com/science/article/pii/S2213133724000179'},{l:'DOI',u:'https://doi.org/10.1016/j.ascom.2024.100802'}],
    ab:'Wormholes, hypothetical structures connecting distant regions of spacetime, have long captured the imagination of scientists and science fiction fans alike. Wormholes are a complex phenomenon with challenges that require innovative approaches and interdisciplinary investigations. In this review, we investigate the potential of deep learning and quantum algorithms to explain the implications of wormholes as an alternative to traditional analytical methods of this phenomenon. A comprehensive analysis of the current understanding of wormholes is elaborated to discuss its theoretical foundations and limitations further. Next, deep learning techniques and quantum algorithms are examined for their application in the context of wormhole research. Previous approaches and findings were discussed to evaluate the effectiveness of these computational techniques in unraveling the mysteries surrounding wormholes. Our review is expected to provide new perspectives for future research. Emphasizes the synergistic potential of deep learning and quantum algorithms in advancing our understanding of wormholes and their existence as interesting shortcuts in spacetime.',
    img:'figures/wormhole.png'
  },
  {
    t:'In Vitro Anti-Oxidant, In Vivo Anti-Hyperglycemic, and Untargeted Metabolomics-Aided-In Silico Screening of Macroalgae Lipophilic Extracts',
    a:'Anggit Listyacahyani Sunarwidhi, Wahyu Rahmaniar, et al.',
    v:'Metabolites &middot; MDPI &middot; 2023',
    ls:[{l:'MDPI',u:'https://www.mdpi.com/2218-1989/13/12/1177'},{l:'DOI',u:'https://doi.org/10.3390/metabo13121177'}],
    ab:'COVID-19 patients with comorbid DM face more severe outcomes, indicating that hyperglycemic conditions exacerbate SARS-CoV-2 infection. Negative side effects from existing hyperglycemia treatments have urged the need for safer compounds. Therefore, sourcing potential compounds from marine resources becomes a new potential approach. Algal lipids are known to possess beneficial activities for human health. However, due to limitations in analyzing large amounts of potential anti-hyperglycemic and anti-COVID-19-related marine metabolites, there is an increasing need for new approaches to reduce risks and costs. Therefore, the main aim of this study was to identify potential compounds in macroalgae Sargassum cristaefolium, Tricleocarpa cylindrica, and Ulva lactuca lipophilic extracts for treating DM and COVID-19 by an integrated approach utilizing in vitro anti-oxidant, in vivo anti-hyperglycemic, and metabolomic-integrated in silico approaches. Among them, S. cristaefolium and T. cylindrica showed potential anti-hyperglycemic activity, with S. cristaefolium showing the highest anti-oxidant activity. A GC-MS-based untargeted metabolomic analysis was used to profile the lipophilic compounds in the extracts followed by an in silico molecular docking analysis to examine the binding affinity of the compounds to anti-DM and anti-COVID-19 targets, e.g., α-amylase, α-glucosidase, ACE2, and TMPRSS2. Notably, this study reveals for the first time that steroid-derived compounds in the macroalgae T. cylindrica had higher binding activity than known ligands for all the targets mentioned. Studies on drug likeliness indicate that these compounds possess favorable drug properties. These findings suggest the potential for these compounds to be further developed to treat COVID-19 patients with comorbid DM. The information in this study would be a basis for further in vitro and in vivo analysis. It would also be useful for the development of these candidate compounds into drug formulations.',
    img:'figures/silico.png'
  }
];
