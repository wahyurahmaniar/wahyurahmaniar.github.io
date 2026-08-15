// ─────────────────────────────────────────────────────────────────
// PUBLICATIONS
// ls: array of {l:'Label', u:'https://...'} for clickable links
// img: 'figures/paper1.png'  — single image
// imgs: ['figures/a.png','figures/b.png']  — multiple images (arrow slideshow)
// ─────────────────────────────────────────────────────────────────
var PU = [
  {
    t:'Artificial intelligence for anticancer drug discovery from natural products of macroalgae and sponges: A systematic review',
    a:'Wahyu Rahmaniar, Anggit Listyacahyani Sunarwidhi, and Ari Hernawan',
    v:'Computational Biology and Chemistry &middot; Elsevier &middot; 2026',
    ls:[{l:'ScienceDirect',u:'https://www.sciencedirect.com/science/article/abs/pii/S147692712600407X'},{l:'DOI',u:'https://doi.org/10.1016/j.compbiolchem.2026.109280'}],
    ab:'Marine natural products (MNPs) from macroalgae and marine sponges have inspired clinically important anticancer agents, including the cytarabine pharmacophore and the eribulin scaffold, while cyanobacterial dolastatin chemistry supplies the auristatin payloads of several marine-inspired antibody-drug conjugates (ADCs) such as brentuximab vedotin. Artificial intelligence (AI) methods, encompassing both classical machine learning (ML) with hand-engineered features and modern deep learning (DL) with many-layered neural networks, are increasingly supporting key decisions in natural-product anticancer drug discovery, including bioactivity prediction, target identification, absorption, distribution, metabolism, excretion and toxicity (ADMET) filtering, generative analogue design, and the selection of preclinical candidates. DL architectures relevant to this field include graph neural networks, transformer-based molecular generators, diffusion models for protein–ligand docking, and convolutional networks for mass spectrometry, while classical ML contributes interpretable fingerprint-based bioactivity models and molecular networking for dereplication. This review follows a systematic literature review methodology to organize the landscape of AI methods now applied to MNP anticancer discovery, distinguishing ML and DL approaches where relevant, situating them within the chemical context of macroalgal and sponge-derived oncology leads, and critically examining published case studies, including validation level (computational, in vitro, in vivo, clinical). The principal bottleneck for medical translation has shifted partly from algorithmic capability toward data infrastructure and experimental validation. Sparse, heterogeneous, and taxonomically biased bioactivity records limit what current models can learn and reduce the reliability of AI-prioritized candidates entering the preclinical pipeline. A roadmap is proposed that prioritizes open MNP-specific benchmarks, symbiont-aware modeling, and active learning loops with synthesizability and ADMET constraints. These AI workflows may accelerate the prioritization of marine-derived anticancer leads and support earlier, more evidence-based translational decisions in oncology drug development.',
    imgs:['']
  },
   {
    t:'A Narrative Review of AI Frameworks for Chronic Stress Detection Using Physiological Sensing: Resting, Longitudinal, and Reactivity Perspectives',
    a:'Totok Nugroho, Wahyu Rahmaniar, and Alfian Maarif',
    v:'Sensors &middot; MDPI &middot; 2026',
    ls:[{l:'MDPI',u:'https://www.mdpi.com/1424-8220/26/8/2345'},{l:'DOI',u:'https://doi.org/10.3390/s26082345'}],
    ab:'Chronic stress is a time-dependent condition characterized by sustained dysregulation across neural, autonomic, and endocrine systems, with important consequences for both health and socioeconomic outcomes. Unlike acute stress, which is typically characterized by short-lived physiological activation, chronic stress reflects an accumulated allostatic load and a longer-term recalibration of stress response systems. Recent advances in physiological sensing and artificial intelligence (AI) have supported the development of computational approaches for chronic stress detection using electroencephalography (EEG), heart rate variability (HRV), photoplethysmography (PPG), electrodermal activity (EDA), and wearable multimodal platforms. This narrative review examines current AI-based studies through three main inferential paradigms: resting baseline dysregulation, longitudinal physiological monitoring, and reactivity-based inference. Across modalities, classical machine learning (ML) methods, particularly support vector machines (SVMs) and tree-based ensembles, remain the most commonly used approaches, largely because available datasets are small and most pipelines still depend on engineered features. Deep learning (DL) methods are beginning to emerge, but their use remains constrained by the lack of large, standardized, longitudinal datasets specifically designed for chronic stress research. Major challenges include ambiguity in stress labeling, limited longitudinal validation, circadian confounding, inter-individual variability, and small cohort sizes. Future progress will depend on standardized datasets, biologically grounded multimodal integration, hybrid baseline-reactivity modeling, adaptive personalization, and more interpretable AI systems. Greater emphasis is also needed on clinical relevance and generalizability if AI-based chronic stress monitoring is to move beyond experimental settings.',
    imgs:['figures/eeg1.png','figures/eeg2.png','figures/eeg3.png','figures/eeg4.png','figures/eeg5.png','figures/eeg6.png','figures/eeg7.png']
  },
  {
    t:'Multi-AD: cross-domain unsupervised anomaly detection for medical and industrial applications',
    a:'Wahyu Rahmaniar and Kenji Suzuki',
    v:'Pattern Recognition &middot; Elsevier &middot; 2026',
    ls:[{l:'arXiv',u:'https://arxiv.org/abs/2602.05426'},{l:'ScienceDirect',u:'https://www.sciencedirect.com/science/article/abs/pii/S0031320325011495'},{l:'DOI',u:'https://doi.org/10.1016/j.patcog.2025.112486'},{l:'Code',u:'#'}],
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
    imgs:['figures/silico1.png','figures/silico1b.png','figures/silico2.png','figures/silico3.png','figures/silico4.png','figures/silico5.png','figures/silico6.png','figures/silico7.png','figures/silico8.png','figures/silico9.png']
  },
  {
    t:'Auto-CA: automated Cobb angle measurement based on vertebrae detection for assessment of spinal curvature deformity',
    a:'Wahyu Rahmaniar, Kenji Suzuki, and Ting-Lan Lin',
    v:'IEEE Transactions on Biomedical Engineering &middot; IEEE &middot; 2023',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/10244104'},{l:'DOI',u:'https://doi.org/10.1109/TBME.2023.3313126'}],
    ab:'An accurate identification and localization of vertebrae in X-ray images can assist doctors in measuring Cobb angles for treating patients with adolescent idiopathic scoliosis. It is useful for clinical decision support systems for diagnosis, surgery planning, and spinal health analysis. Currently, publicly available annotated datasets on spinal vertebrae are small, making deep-learning-based detection methods that are highly data-dependent less accurate. In this article, we propose an algorithm based on convolutional neural networks that can be trained to detect vertebrae from a small set of images. This method can display critical information on a patients spine, display vertebrae and their labels on the thoracic and lumbar, calculate the Cobb angle, and evaluate the severity of spinal deformities. The proposed achieved an average accuracy of 0.958 and 0.962 for classifying spinal deformities (i.e., C-shaped, S-shaped type 1, and S-shaped type 2) and severity of Cobb angle (i.e., normal, mild, moderate, and severe), respectively. The Cobb angle measurement had a median difference of less than 5° from the ground-truth with SMAPE of 5.27% and an error on landmark detection of 19.73. In addition, Lenke classification is used to analyze spinal deformities as types A, B, and C, which have an average accuracy of 0.924. Physicians can use the proposed system in clinical practice by providing X-ray images via the user interface.',
    imgs:['figures/ca1.png','figures/ca2.png','figures/ca3.png','figures/ca4.png','figures/ca5.png','figures/ca6.png','figures/ca7.png','figures/ca8.png']
  },
  {
    t:'Touchless Head-Control (THC): Head Gesture Recognition for Cursor and Orientation Control',
    a:'Wahyu Rahmaniar, Alfian Maarif, and Ting-Lan Lin',
    v:'IEEE Transactions on Neural Systems and Rehabilitation Engineering &middot; IEEE &middot; 2022',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/9810969'},{l:'DOI',u:'https://doi.org/10.1109/TNSRE.2022.3187472'}],
    ab:'The touchless techniques in human-computer interaction (HCI) can effectively expand computer access capabilities for disabled people. This paper presents Touchless Head-Control (THC), an assistive system method for computer cursor control based on head pose captured with an RGB camera. Our work aimed to replace the standard cursor control using a device on the user’s head. The convolutional neural networks with predicted fine-grained feature maps and binned classification were applied to estimate the head pose angles. The mouse pointer or cursor is moved to actual locations on the screen based on head movement (yaw and pitch) and the center position of the face. Head tilt to the right or left (roll) to control the mouse button. In addition, the proposed method can be used to simulate the movement of the robot or joystick using the head to control objects within three degrees of freedom (DOF). Various participants were involved in the interaction design evaluation, in which target selection accuracy, travel time, and path efficiency were measured. This technology allows people with limited motor skills to easily control a PC cursor and 3D object orientation without the use of additional equipment or sensors.',
    imgs:[]
  },
  {
    t:'Wide Range Head Pose Estimation Using a Single RGB Camera for Intelligent Surveillance',
    a:'Wahyu Rahmaniar, Qazi Mazhar ul Haq, and Ting-Lan Lin',
    v:'IEEE Sensors Journal &middot; IEEE &middot; 2022',
    ls:[{l:'IEEE',u:'https://ieeexplore.ieee.org/abstract/document/9760377'},{l:'DOI',u:'https://doi.org/10.1109/JSEN.2022.3168863'}],
    ab:'Head pose estimation is one of the sensing systems needed for some intelligent surveillance, such as human behavior analysis, intelligent driver assistance, visual attention, and monitoring. These systems require accurate alignment and head movement direction prediction. The previous methods are greatly dependent on the facial landmarks and depth information. Usually, the head pose is measured by estimating several keypoints that require a correct head pose mapping to get accurate results. Moreover, facial landmarks have a detrimental effect on performance when the face is occluded or not adequately visualized. This paper proposes a method for head pose estimation of various facial conditions, such as occlusion and challenging viewpoints. We present a combination of coarse and fine feature maps classification to train a multi-loss deep Convolutional Neural Networks (CNN) to get precise Euler angles (yaw, pitch, roll) of the head position without keypoints and landmarks. Our proposed method uses more quantization units for angle classification to learn coarse and fine structure mapping for better spatial clustering features on an RGB image of a single camera. The experiments are performed on benchmark datasets and some head poses in real cases. The mean average error of prediction is 5.06°, 4.06°, and 2.96°, for the AFLW2000, AFLW, and BIWI datasets, which significantly improves the head pose estimation performance compared to the previous methods. Additionally, the proposed method outperforms previous approaches in computation time of 11 frames per second that is beneficial for real-life applications.',
    imgs:[]
  }
];
