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
// b: nb-p=paper  nb-t=talk  nb-a=award/position  nb-n=milestone  nb-w=event/media
// url: optional link  |  img: optional thumbnail

// b: nb-p=paper  nb-t=talk  nb-a=award/position  nb-n=milestone  nb-w=event/media
// url: optional link  |  img: optional thumbnail

var NA = [
  // ── 2026 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Award',   t:'Proposal accepted for the “Diaspora Berdampak” program in collaboration with Telkom University', d:'2026',
   url:null, img:null},
  {b:'nb-p', l:'Conference Paper',   t:'Our paper has been accepted to the 2nd MICCAI Workshop on Efficient Medical, France', d:'2026',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'Artificial Intelligence for Anticancer Drug Discovery from Natural Products of Macroalgae and Sponges: A Systematic Review (Computational Biology and Chemistry, Elsevier)', d:'2026',
   url:'https://www.sciencedirect.com/science/article/abs/pii/S147692712600407X', img:null},
  {b:'nb-w', l:'Guest Editor',   t:'Guest Editor for the Special Issue “AI-Based Sensing and Imaging Applications” in Sensors (MDPI)', d:'2026',
   url:'https://www.mdpi.com/journal/sensors/special_issues/EB29LD56CW', img:null},
  {b:'nb-t', l:'Lecture',      t:'Global Classroom, Universitas Diponegoro (UNDIP)', d:'2026',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'Guest Lecture: AI in Medical Imaging, Universitas Brawijaya (UB)', d:'2026',
   url:null, img:null},
  {b:'nb-a', l:'Position',   t:'Appointed as Adjunct Professor, Universitas Brawijaya, Indonesia', d:'2026',
   url:null, img:null},
  {b:'nb-w', l:'Fun',        t:'Visited Disneyland and took a picture with Donald Duck!', d:'2026',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'A Narrative Review of AI Frameworks for Chronic Stress Detection Using Physiological Sensing (Sensors, MDPI)', d:'2026',
   url:'https://www.mdpi.com/1424-8220/26/8/2345', img:null},
  {b:'nb-p', l:'Book Chapter', t:'Computer-Aided Diagnosis and Monitoring of Rheumatoid Arthritis in Conventional Radiography (Artificial Intelligence in Diagnostics and Imaging Technologies in Healthcare, Springer)', d:'2026',
   url:'https://link.springer.com/chapter/10.1007/978-3-031-98149-4_7', img:null},
  {b:'nb-p', l:'Book Chapter', t:'Segmentation and Classification of Lung Nodule Images from the LIDC-IDRI Database Using a Massive-Training Artificial Neural Network, MTANN (Detection Systems in Lung Cancer and Imaging, Volume 2, IOP Publishing)', d:'2026',
   url:'https://iopscience.iop.org/book/edit/978-0-7503-3359-7/chapter/bk978-0-7503-3359-7ch2', img:null},
  {b:'nb-p', l:'New Paper',  t:'Multi-AD: Cross-domain Unsupervised Anomaly Detection for Medical and Industrial Applications (Pattern Recognition, Elsevier)', d:'2026',
   url:'https://www.sciencedirect.com/science/article/abs/pii/S0031320325011495', img:null},

  // ── 2025 ──────────────────────────────────────────────────────
  {b:'nb-w', l:'Conference', t:'Attended RSNA 2025, Radiological Society of North America Annual Meeting, Chicago, USA', d:'2025',
   url:null, img:null},
  {b:'nb-t', l:'Invited Talk', t:'AI in Medical Imaging, 3rd Trunojoyo Madura International Conference (TMIC)', d:'2025',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'AI in Medical Imaging and Assistive Device, Universitas Lambung Mangkurat (ULM)', d:'2025',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'Practical Applications of Artificial Intelligence: A Sector-Wise Review of Challenges and Future Directions (IT Professional, IEEE)', d:'2025',
   url:'https://ieeexplore.ieee.org/abstract/document/11125707', img:null},
  {b:'nb-p', l:'New Paper',  t:'Future of the Medical World: Collaborative Medical Imaging AI with Federated Learning (IEEE Consumer Electronics Magazine)', d:'2025',
   url:'https://ieeexplore.ieee.org/abstract/document/10876609', img:null},

  // ── 2024 ──────────────────────────────────────────────────────
  {b:'nb-t', l:'Invited Talk', t:'AI in Medical Imaging and Assistive Device, 3rd International Conference on Physics and Physics Education (ICONPHYEDU)', d:'2024',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'AI in Medical Imaging and Assistive Device, Universitas Harapan Bangsa (UHB)', d:'2024',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'AI in Medical Imaging and Assistive Device, Prince Sultan University (PSU), Saudi Arabia', d:'2024',
   url:null, img:null},
  {b:'nb-n', l:'Milestone',  t:'Tokyo Institute of Technology officially renamed to Institute of Science Tokyo', d:'2024',
   url:null, img:null},
  {b:'nb-p', l:'Book Chapter', t:'Decentralized Diagnostics: The Role of Federated Learning in Modern Medical Imaging (Advances in Intelligent Disease Diagnosis and Treatment, Springer)', d:'2024',
   url:'https://link.springer.com/chapter/10.1007/978-3-031-65640-8_9', img:null},
  {b:'nb-p', l:'New Paper',  t:'ChatGPT for Software Development: Opportunities and Challenges (IT Professional, IEEE)', d:'2024',
   url:'https://www.computer.org/csdl/magazine/it/2024/03/10572230/1Y5ARhBvqla', img:null},
  {b:'nb-p', l:'New Paper',  t:'Deep Learning and Quantum Algorithms Approach to Investigating the Feasibility of Wormholes: A Review (Astronomy and Computing, Elsevier)', d:'2024',
   url:'https://www.sciencedirect.com/science/article/pii/S2213133724000179', img:null},

  // ── 2023 ──────────────────────────────────────────────────────
  {b:'nb-t', l:'Seminar',      t:'Women in Engineering: AI and Computer Vision in Industry and Academia, Sciencemind', d:'2023',
   url:null, img:null},
  {b:'nb-t', l:'Invited Talk', t:'AI in Medical Imaging and Assistive Device, 1st Engineering Trunojoyo Madura International Conference (ETMIC)', d:'2023',
   url:null, img:null},
  {b:'nb-a', l:'Position',   t:'Appointed as Assistant Professor (Specially Appointed) at Tokyo Institute of Technology (Tokyo Tech), Japan', d:'2023',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'Auto-CA: Automated Cobb Angle Measurement Based on Vertebrae Detection for Assessment of Spinal Curvature Deformity (IEEE Transactions on Biomedical Engineering)', d:'2023',
   url:'https://ieeexplore.ieee.org/abstract/document/10244104', img:null},
  {b:'nb-p', l:'New Paper',  t:'In Vitro Anti-Oxidant, In Vivo Anti-Hyperglycemic, and Untargeted Metabolomics Screening of Macroalgae Lipophilic Extracts (Metabolites, MDPI)', d:'2023',
   url:'https://www.mdpi.com/2218-1989/13/12/1177', img:null},

  // ── 2022 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Position',   t:'Started as Postdoctoral Researcher at Tokyo Institute of Technology, Japan', d:'2022',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'Wide Range Head Pose Estimation Using a Single RGB Camera for Intelligent Surveillance (IEEE Sensors Journal)', d:'2022',
   url:'https://ieeexplore.ieee.org/document/9810969/', img:null},
  {b:'nb-p', l:'New Paper',  t:'Touchless Head-Control (THC): Head Gesture Recognition for Cursor and Orientation Control (IEEE Transactions on Neural Systems and Rehabilitation Engineering)', d:'2022',
   url:'https://ieeexplore.ieee.org/document/9810969/', img:null},
  {b:'nb-t', l:'Seminar',      t:'Publications in AI and Medical Technology, Sekolah Tinggi Teknologi Bandung (STTB)', d:'2022',
   url:null, img:null},
  {b:'nb-t', l:'Invited Talk', t:'Publications in AI and Medical Technology, Universitas Harapan Bangsa (UHB)', d:'2022',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'AI Technology in Medical Imaging and Assistive Devices, Universitas Indonesia (UI)', d:'2022',
   url:null, img:null},
  {b:'nb-a', l:'Best Paper', t:'Best Paper Award at 2nd International Conference on Electronics, Biomedical Engineering, and Health Informatics (ICEBEHI) for AutoSpine-Net', d:'2022',
   url:'https://link.springer.com/book/10.1007/978-981-19-1804-9', img:null},
  {b:'nb-w', l:'Conference', t:'Mobile Robot Path Planning in a Trajectory with Multiple Obstacles Using Genetic Algorithms (Journal of Robotics and Control)', d:'2022',
   url:null, img:null},
  {b:'nb-w', l:'Conference', t:'AutoSpine-Net: Spine Detection Using Convolutional Neural Networks for Cobb Angle Classification in Adolescent Idiopathic Scoliosis (2nd International Conference on Electronics, Biomedical Engineering, and Health Informatics, ICEBEHI, Indonesia)', d:'2022',
   url:'https://link.springer.com/book/10.1007/978-981-19-1804-9', img:null},
  {b:'nb-w', l:'Conference', t:'Sensor Integration for Real-Time Data Acquisition in Aerial Surveillance (Australian Journal of Electrical and Electronics Engineering)', d:'2022',
   url:'https://www.tandfonline.com/doi/full/10.1080/1448837X.2021.2023070', img:null},
  {b:'nb-p', l:'New Paper',  t:'Automated Cobb Angle Measurement for Adolescent Idiopathic Scoliosis Using Convolutional Neural Network (Diagnostics, MDPI)', d:'2022',
   url:'https://www.mdpi.com/2075-4418/12/2/396', img:null},

  // ── 2021 ──────────────────────────────────────────────────────
  {b:'nb-t', l:'Seminar',      t:'When Remote Sensing Meets Artificial Intelligence, Universitas Negeri Makassar (UNM)', d:'2021',
   url:null, img:null},
  {b:'nb-t', l:'Lecture',      t:'Artificial Intelligence Applications in Real-Life, Sekolah Tinggi Teknologi Bandung (STTB)', d:'2021',
   url:null, img:null},
  {b:'nb-a', l:'Position',   t:'Started as Postdoctoral Researcher at National Taipei University of Technology (NTUT), Taiwan', d:'2021',
   url:null, img:null},
  {b:'nb-p', l:'New Paper',  t:'Development of Surface EMG Game Control Interface for Persons with Upper Limb Functional Impairments (Signals, MDPI)', d:'November 2021',
   url:'https://www.mdpi.com/2624-6120/2/4/48', img:null},
  {b:'nb-p', l:'New Paper',  t:'Real-Time Human Detection Using Deep Learning on Embedded Platforms: A Review (Journal of Robotics and Control)', d:'November 2021',
   url:'https://journal.umy.ac.id/index.php/jrc/article/view/10558', img:null},
  {b:'nb-w', l:'Conference', t:'Distance Measurement of Unmanned Aerial Vehicles Using Vision-Based Systems in Unknown Environments (Electronics, MDPI)', d:'July 2021',
   url:'https://www.mdpi.com/2079-9292/10/14/1647', img:null},
  {b:'nb-w', l:'Conference', t:'Online Digital Image Stabilization for an Unmanned Aerial Vehicle (UAV) (Journal of Robotics and Control)', d:'July 2021',
   url:'https://journal.umy.ac.id/index.php/jrc/article/view/10006', img:null},
  {b:'nb-w', l:'Conference', t:'Design and Implementation of a Mobile Robot for Carbon Monoxide Monitoring (Journal of Robotics and Control)', d:'January 2021',
   url:'https://journal.umy.ac.id/index.php/jrc/article/view/8547', img:null},

  // ── 2020 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Work',       t:'Joined Issa Technology as full-time Computer Vision Engineer', d:'June 2020',
   url:null, img:null},
  {b:'nb-n', l:'Milestone',  t:'Graduated with Ph.D. in Electrical Engineering from National Central University, Taiwan', d:'April 2020',
   url:null, img:null},

  // ── 2019 ──────────────────────────────────────────────────────
  {b:'nb-w', l:'Conference', t:'Real-Time Detection and Recognition of Multiple Moving Objects for Aerial Surveillance (Electronics, MDPI)', d:'2019',
   url:'https://www.mdpi.com/2079-9292/8/12/1373', img:null},
  {b:'nb-p', l:'New Paper',  t:'Real-Time Automated Segmentation and Classification of Calcaneal Fractures in CT Images (Applied Sciences, MDPI)', d:'2019',
   url:null, img:null},

  // ── 2018 ──────────────────────────────────────────────────────
  {b:'nb-a', l:'Work',       t:'Started part-time at Issa Technology as Computer Vision Engineer', d:'December 2018',
   url:null, img:null},

  // ── 2017 ──────────────────────────────────────────────────────
  {b:'nb-n', l:'Exchange',   t:'Research exchange student at Shibaura Institute of Technology, Tokyo, Japan', d:'October 2017',
   url:null, img:null},

  // ── 2015 ──────────────────────────────────────────────────────
  {b:'nb-w', l:'Conference', t:'A Novel Object Detection Method Based on Fuzzy Sets Theory and SURF (International Conference on System Science and Engineering, ICSSE, Japan)', d:'2015',
   url:null, img:null},
];
