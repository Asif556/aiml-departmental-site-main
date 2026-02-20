export const departmentInfo = {
  name: "Computer Science & Engineering (Artificial Intelligence)",
  shortName: "CSE (AI)",
  institution: "University of Engineering & Management, Kolkata",
  institutionShort: "UEM KOLKATA",
  tagline: "Shaping the engineers of tomorrow through research, innovation, and excellence.",
  established: 2019,
  phone: "+91 94747 33974",
  email: "sudipta.sahana@uem.edu.in",
  address: "Department of CSE (AI), UEM Kolkata, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, Kolkata - 700160, West Bengal, India",
};

export const stats = [
  { label: "Students Enrolled", value: 915 },
  { label: "Research Publications", value: 180 },
  { label: "Placement + Higher Qualification", value: 100, suffix: "%" },
];

export const aboutSnippet = "One of the newest and most cutting-edge engineering departments of the University of Engineering and Management, Kolkata, is the Department of Computer Science & Engineering (Artificial Intelligence), or CSE(AI). It began operations in the academic year 2020–2021. The main goal of this department is to teach fundamental ideas like computational thinking, object-oriented programming, data structures, algorithms, machine learning, deep learning, database management systems, artificial intelligence (including search strategies and knowledge representation), natural language processing, and Python programming for problem-solving. As a result, students will have a thorough understanding of artificial intelligence and machine learning through the application of real-world issues in a wide range of application domains, including speech and natural language processing, computer vision, cognitive sciences, and others. Throughout their studies, students will get expertise in a variety of professional electives given by machine learning, computer vision, voice and natural language processing, data analytics, cyber security, blockchain, cloud computing and generative AI domain verticals.";

export const programs = [
  {
    name: "B.Tech in CSE (AI)",
    duration: "4 Years",
    intake: 60,
    description: "A rigorous undergraduate program blending core CS fundamentals with specialized AI and ML coursework, industry projects, and research exposure.",
    link: "/academics/programs",
    eligibility: "JEE Main qualified. Minimum 75% in 10+2 with PCM.",
    specializations: ["Deep Learning", "Computer Vision", "NLP", "Data Engineering"],
    careerOutcomes: ["ML Engineer", "Data Scientist", "AI Researcher", "Software Engineer"],
  },
  {
    name: "Ph.D. in CSE (AI)",
    duration: "3–5 Years",
    intake: 10,
    description: "Doctoral research program with specializations in reinforcement learning, generative AI, and interdisciplinary computing.",
    link: "/academics/programs",
    eligibility: "Master's degree with valid NET/GATE score or published research.",
    specializations: ["Autonomous Systems", "Federated Learning", "Explainable AI", "Quantum ML"],
    careerOutcomes: ["Professor", "Principal Scientist", "Research Lab Director", "CTO"],
  },
];

export const curriculum = {
  btech: [
    {
      semester: 1,
      courses: [
        { code: "CS101", name: "Introduction to Programming", credits: 4, type: "Theory" },
        { code: "MA101", name: "Engineering Mathematics I", credits: 4, type: "Theory" },
        { code: "PH101", name: "Engineering Physics", credits: 3, type: "Theory" },
        { code: "CS102", name: "Programming Lab", credits: 2, type: "Lab" },
        { code: "EE101", name: "Basic Electrical Engineering", credits: 3, type: "Theory" },
      ],
    },
    {
      semester: 2,
      courses: [
        { code: "CS201", name: "Data Structures", credits: 4, type: "Theory" },
        { code: "MA201", name: "Engineering Mathematics II", credits: 4, type: "Theory" },
        { code: "CS202", name: "Digital Logic Design", credits: 3, type: "Theory" },
        { code: "CS203", name: "Data Structures Lab", credits: 2, type: "Lab" },
        { code: "HS201", name: "Professional Communication", credits: 2, type: "Theory" },
      ],
    },
    {
      semester: 3,
      courses: [
        { code: "CS301", name: "Algorithms", credits: 4, type: "Theory" },
        { code: "CS302", name: "Discrete Mathematics", credits: 3, type: "Theory" },
        { code: "CS303", name: "Computer Organization", credits: 3, type: "Theory" },
        { code: "AI301", name: "Introduction to AI", credits: 3, type: "Theory" },
        { code: "CS304", name: "Algorithms Lab", credits: 2, type: "Lab" },
      ],
    },
    {
      semester: 4,
      courses: [
        { code: "CS401", name: "Operating Systems", credits: 4, type: "Theory" },
        { code: "CS402", name: "Database Systems", credits: 3, type: "Theory" },
        { code: "AI401", name: "Machine Learning", credits: 4, type: "Theory" },
        { code: "AI402", name: "Probability & Statistics for AI", credits: 3, type: "Theory" },
        { code: "AI403", name: "ML Lab", credits: 2, type: "Lab" },
      ],
    },
    {
      semester: 5,
      courses: [
        { code: "CS501", name: "Computer Networks", credits: 3, type: "Theory" },
        { code: "AI501", name: "Deep Learning", credits: 4, type: "Theory" },
        { code: "AI502", name: "Natural Language Processing", credits: 3, type: "Theory" },
        { code: "AI503", name: "Deep Learning Lab", credits: 2, type: "Lab" },
        { code: "CS502", name: "Elective I", credits: 3, type: "Elective" },
      ],
    },
    {
      semester: 6,
      courses: [
        { code: "AI601", name: "Computer Vision", credits: 4, type: "Theory" },
        { code: "AI602", name: "Reinforcement Learning", credits: 3, type: "Theory" },
        { code: "AI603", name: "Big Data Analytics", credits: 3, type: "Theory" },
        { code: "AI604", name: "CV & RL Lab", credits: 2, type: "Lab" },
        { code: "CS602", name: "Elective II", credits: 3, type: "Elective" },
      ],
    },
    {
      semester: 7,
      courses: [
        { code: "AI701", name: "Generative AI", credits: 3, type: "Theory" },
        { code: "AI702", name: "AI Ethics & Safety", credits: 2, type: "Theory" },
        { code: "CS701", name: "Elective III", credits: 3, type: "Elective" },
        { code: "CS702", name: "Elective IV", credits: 3, type: "Elective" },
        { code: "AI703", name: "Mini Project", credits: 4, type: "Lab" },
      ],
    },
    {
      semester: 8,
      courses: [
        { code: "AI801", name: "Major Project / Thesis", credits: 12, type: "Lab" },
        { code: "AI802", name: "Seminar", credits: 2, type: "Theory" },
        { code: "CS801", name: "Elective V", credits: 3, type: "Elective" },
      ],
    },
  ],
};

export const academicCalendar = [
  { event: "Odd Semester Begins", date: "July 21, 2025", type: "semester" },
  { event: "Independence Day", date: "August 15, 2025", type: "holiday" },
  { event: "Mid-Semester Exam (Odd)", date: "September 22–27, 2025", type: "exam" },
  { event: "Dussehra Break", date: "October 2–6, 2025", type: "holiday" },
  { event: "End-Semester Exam (Odd)", date: "November 24 – December 6, 2025", type: "exam" },
  { event: "Winter Vacation", date: "December 7–31, 2025", type: "holiday" },
  { event: "Even Semester Begins", date: "January 5, 2026", type: "semester" },
  { event: "Republic Day", date: "January 26, 2026", type: "holiday" },
  { event: "Mid-Semester Exam (Even)", date: "March 2–7, 2026", type: "exam" },
  { event: "Holi Break", date: "March 14–16, 2026", type: "holiday" },
  { event: "End-Semester Exam (Even)", date: "April 27 – May 9, 2026", type: "exam" },
  { event: "Summer Vacation Begins", date: "May 10, 2026", type: "holiday" },
];

export const notices = [
  { id: 1, title: "End Semester Examination Schedule — Spring 2026", date: "2026-02-15", category: "exam", isImportant: true },
  { id: 2, title: "Workshop on Large Language Models — Registration Open", date: "2026-02-12", category: "general", isImportant: true },
  { id: 3, title: "Placement Drive: Microsoft — Feb 28, 2026", date: "2026-02-10", category: "placement", isImportant: false },
  { id: 4, title: "Research Assistantship Applications — Deadline Extended", date: "2026-02-08", category: "circular", isImportant: false },
  { id: 5, title: "NAAC Peer Team Visit — Schedule Released", date: "2026-02-05", category: "general", isImportant: true },
];

export const researchHighlights = [
  {
    title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
    pi: "Dr. Ananya Sharma",
    agency: "DST-SERB",
    amount: "₹42 Lakhs",
  },
  {
    title: "Explainable AI for Autonomous Driving Systems",
    pi: "Dr. Rajesh Kumar",
    agency: "DRDO",
    amount: "₹65 Lakhs",
  },
  {
    title: "Multi-modal Sentiment Analysis using Transformer Networks",
    pi: "Dr. Priya Nair",
    agency: "CSIR",
    amount: "₹28 Lakhs",
  },
];

export const faculty = [
  { id: "Sudipta Sahana", name: "Prof. Dr. Sudipta Sahana", designation: "Head of the Department", email: "ananya@uem.edu.in", qualification: "Ph.D. IISc Bangalore", experience: 18, publications: 65, googleScholar: "#", scopus: "#", image: "/sudipta-sahana.jpeg" },
  { id: " Aniruddha Ghosh", name: "Prof. Dr. Aniruddha Ghosh", designation: "Assistant Head of Department", email: "rajesh@uem.edu.in", qualification: "Ph.D. IIT Bombay", experience: 15, publications: 52, googleScholar: "#", scopus: "#" },
  { id: "Anasuya Sengupta", name: "Prof. Anasuya Sengupta", designation: "Associate Professor", email: "priya@uem.edu.in", qualification: "Ph.D. IIT Madras", experience: 12, publications: 38, googleScholar: "#", scopus: "#" },
  { id: "Anjan Kumar Payra", name: "Prof. Anjan Kumar Payra", designation: "Associate Professor", email: "vikram@uem.edu.in", qualification: "Ph.D. CMU", experience: 10, publications: 30, googleScholar: "#", scopus: "#" },
  { id: "Debdatta Chatterjee ", name: "Prof. Debdatta Chatterjee", designation: "Assistant Professor", email: "meera@uem.edu.in", qualification: "Ph.D. UEM KOLKATA", experience: 5, publications: 18, googleScholar: "#", scopus: "#" },
  { id: "Himadri Sekhar Panda", name: "Prof. Dr. Himadri Sekhar Panda", designation: "Assistant Professor", email: "siddharth@uem.edu.in", qualification: "Ph.D. IIIT Hyderabad", experience: 4, publications: 14, googleScholar: "#", scopus: "#" },
];

export const fundedProjects = [
  { id: 1, title: "Federated Learning for Privacy-Preserving Healthcare Analytics", pi: "Dr. Ananya Sharma", coPi: "Dr. Siddharth Rao", agency: "DST-SERB", amount: "₹42 Lakhs", duration: "2024–2027", status: "ongoing" as const, year: 2024 },
  { id: 2, title: "Explainable AI for Autonomous Driving Systems", pi: "Dr. Rajesh Kumar", coPi: "", agency: "DRDO", amount: "₹65 Lakhs", duration: "2023–2026", status: "ongoing" as const, year: 2023 },
  { id: 3, title: "Multi-modal Sentiment Analysis using Transformer Networks", pi: "Dr. Priya Nair", coPi: "Dr. Meera Iyer", agency: "CSIR", amount: "₹28 Lakhs", duration: "2023–2025", status: "ongoing" as const, year: 2023 },
  { id: 4, title: "Deep Reinforcement Learning for Smart Grid Optimization", pi: "Dr. Vikram Patel", coPi: "", agency: "DST-SERB", amount: "₹35 Lakhs", duration: "2022–2025", status: "ongoing" as const, year: 2022 },
  { id: 5, title: "AI-Powered Crop Disease Detection System", pi: "Dr. Meera Iyer", coPi: "Dr. Rajesh Kumar", agency: "ICAR", amount: "₹20 Lakhs", duration: "2021–2023", status: "completed" as const, year: 2021 },
  { id: 6, title: "Edge Computing for Real-Time Object Detection", pi: "Dr. Siddharth Rao", coPi: "", agency: "MeitY", amount: "₹18 Lakhs", duration: "2021–2023", status: "completed" as const, year: 2021 },
  { id: 7, title: "Bias Detection and Mitigation in ML Models", pi: "Dr. Ananya Sharma", coPi: "Dr. Priya Nair", agency: "DST", amount: "₹22 Lakhs", duration: "2020–2022", status: "completed" as const, year: 2020 },
  { id: 8, title: "Neural Machine Translation for Indian Languages", pi: "Dr. Priya Nair", coPi: "", agency: "MeitY", amount: "₹30 Lakhs", duration: "2020–2023", status: "completed" as const, year: 2020 },
];

export const publications = [
  { id: 1, title: "FedHealth: A Federated Learning Framework for Privacy-Preserving Healthcare Analytics", authors: ["A. Sharma", "S. Rao", "M. Gupta"], journal: "IEEE Transactions on Neural Networks and Learning Systems", year: 2025, doi: "10.1109/TNNLS.2025.001", type: "journal" as const, indexedIn: "SCI" as const },
  { id: 2, title: "Attention-Guided Explainability for Autonomous Driving Perception", authors: ["R. Kumar", "P. Singh"], journal: "CVPR 2025", year: 2025, doi: "10.1109/CVPR.2025.123", type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 3, title: "CrossLingual Sentiment Analysis with Transformer Ensembles", authors: ["P. Nair", "M. Iyer", "K. Reddy"], journal: "ACL 2025", year: 2025, doi: "10.18653/v1/2025.acl", type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 4, title: "Multi-Agent Deep RL for Urban Traffic Signal Control", authors: ["V. Patel", "A. Das"], journal: "Neural Computing and Applications", year: 2024, doi: "10.1007/s00521-024", type: "journal" as const, indexedIn: "SCI" as const },
  { id: 5, title: "GANs for Medical Image Super-Resolution: A Comprehensive Survey", authors: ["M. Iyer", "R. Kumar"], journal: "ACM Computing Surveys", year: 2024, doi: "10.1145/3624918", type: "journal" as const, indexedIn: "SCI" as const },
  { id: 6, title: "Efficient Federated Learning on Edge Devices with Model Pruning", authors: ["S. Rao", "A. Sharma"], journal: "AAAI 2024", year: 2024, doi: "10.1609/aaai.v38i", type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 7, title: "Transformer-Based Code Generation for Low-Resource Languages", authors: ["P. Nair", "L. Joseph"], journal: "EMNLP 2024", year: 2024, doi: "10.18653/v1/2024.emnlp", type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 8, title: "Bias-Aware Fairness Constraints in Credit Scoring Models", authors: ["A. Sharma", "P. Nair"], journal: "Data Mining and Knowledge Discovery", year: 2023, doi: "10.1007/s10618-023", type: "journal" as const, indexedIn: "SCI" as const },
  { id: 9, title: "Real-time Object Detection on Low-Power Edge Accelerators", authors: ["S. Rao", "V. Patel"], journal: "IEEE Internet of Things Journal", year: 2023, doi: "10.1109/JIOT.2023", type: "journal" as const, indexedIn: "SCI" as const },
  { id: 10, title: "Deep Learning in Agriculture: Challenges and Opportunities", authors: ["M. Iyer", "R. Kumar", "A. Sharma"], journal: "Springer Book Chapter", year: 2023, doi: "10.1007/978-3-031", type: "book_chapter" as const, indexedIn: "Scopus" as const },
];

export const patents = [
  { id: 1, title: "AI-Based Real-Time Crop Disease Detection System Using Edge Devices", inventors: "Dr. Meera Iyer, Dr. Rajesh Kumar", applicationNo: "IN202341001234", year: 2023, status: "Published" as const },
  { id: 2, title: "Privacy-Preserving Federated Learning Protocol for Healthcare Data", inventors: "Dr. Ananya Sharma, Dr. Siddharth Rao", applicationNo: "IN202441005678", year: 2024, status: "Filed" as const },
  { id: 3, title: "Explainable Neural Network Architecture for Autonomous Navigation", inventors: "Dr. Rajesh Kumar", applicationNo: "IN202241009012", year: 2022, status: "Granted" as const },
  { id: 4, title: "Multi-Modal Sentiment Analysis Engine for Indian Languages", inventors: "Dr. Priya Nair, Dr. Meera Iyer", applicationNo: "IN202341003456", year: 2023, status: "Published" as const },
  { id: 5, title: "Energy-Efficient Deep Learning Inference on Edge Computing Platforms", inventors: "Dr. Siddharth Rao", applicationNo: "IN202541007890", year: 2025, status: "Filed" as const },
];

export const phdScholars = [
  { id: 1, name: "Rahul Menon", supervisor: "Dr. Ananya Sharma", coSupervisor: "Dr. Siddharth Rao", topic: "Federated Meta-Learning for Heterogeneous Medical Data", yearOfJoining: 2022, status: "ongoing" as const },
  { id: 2, name: "Deepika Joshi", supervisor: "Dr. Rajesh Kumar", coSupervisor: "", topic: "Unsupervised Domain Adaptation in Autonomous Driving Scenarios", yearOfJoining: 2021, status: "ongoing" as const },
  { id: 3, name: "Arun Krishnan", supervisor: "Dr. Priya Nair", coSupervisor: "", topic: "Cross-Lingual Transfer Learning for Low-Resource Indian Languages", yearOfJoining: 2021, status: "ongoing" as const },
  { id: 4, name: "Sneha Patil", supervisor: "Dr. Vikram Patel", coSupervisor: "Dr. Rajesh Kumar", topic: "Safe Multi-Agent Reinforcement Learning for Autonomous Systems", yearOfJoining: 2023, status: "ongoing" as const },
  { id: 5, name: "Karthik Raman", supervisor: "Dr. Meera Iyer", coSupervisor: "", topic: "Conditional Diffusion Models for High-Fidelity Image Synthesis", yearOfJoining: 2023, status: "ongoing" as const },
  { id: 6, name: "Anjali Desai", supervisor: "Dr. Ananya Sharma", coSupervisor: "", topic: "Fairness-Aware Machine Learning in Financial Services", yearOfJoining: 2020, status: "awarded" as const },
  { id: 7, name: "Manoj Hegde", supervisor: "Dr. Rajesh Kumar", coSupervisor: "", topic: "Monocular 3D Object Detection Using Transformers", yearOfJoining: 2019, status: "awarded" as const },
  { id: 8, name: "Preethi Sundaram", supervisor: "Dr. Priya Nair", coSupervisor: "", topic: "Aspect-Based Sentiment Analysis with Graph Neural Networks", yearOfJoining: 2019, status: "awarded" as const },
];

export const labs = [
  { id: "ai-research-lab", name: "AI Research Lab", incharge: "Dr. Ananya Sharma", location: "Block A, Room 301", description: "State-of-the-art research lab equipped with high-performance GPU clusters for deep learning research in computer vision, NLP, and reinforcement learning.", equipment: [{ name: "NVIDIA DGX A100", model: "A100 80GB", quantity: 2 }, { name: "GPU Workstation", model: "RTX 4090 x4", quantity: 4 }, { name: "High-Memory Server", model: "256GB RAM", quantity: 2 }], coursesSupported: ["Deep Learning", "Computer Vision", "NLP", "Generative AI"] },
  { id: "ml-systems-lab", name: "Machine Learning Systems Lab", incharge: "Dr. Vikram Patel", location: "Block A, Room 305", description: "Focused on ML infrastructure, model deployment, edge computing, and scalable distributed ML systems. Students work on real-world deployment pipelines.", equipment: [{ name: "Edge Computing Kit", model: "NVIDIA Jetson AGX Orin", quantity: 10 }, { name: "Raspberry Pi Cluster", model: "RPi 5", quantity: 20 }, { name: "Cloud Server Access", model: "AWS/GCP", quantity: 1 }], coursesSupported: ["ML Lab", "Big Data Analytics", "Edge AI", "Reinforcement Learning"] },
  { id: "data-science-lab", name: "Data Science & Analytics Lab", incharge: "Dr. Priya Nair", location: "Block B, Room 201", description: "Lab for data preprocessing, statistical analysis, and large-scale data engineering. Equipped with workstations running Spark, Hadoop, and modern data stack.", equipment: [{ name: "Workstation", model: "Intel Xeon W-2295", quantity: 30 }, { name: "Storage Server", model: "100TB NAS", quantity: 1 }, { name: "Interactive Display", model: "85-inch 4K", quantity: 1 }], coursesSupported: ["Data Structures Lab", "Database Systems", "Big Data Analytics", "Probability & Statistics"] },
  { id: "cv-robotics-lab", name: "Computer Vision & Robotics Lab", incharge: "Dr. Rajesh Kumar", location: "Block C, Room 102", description: "Research lab for 3D vision, autonomous navigation, and robotic manipulation. Features robotic arms, drones, and depth-sensing cameras.", equipment: [{ name: "Robotic Arm", model: "UR5e", quantity: 2 }, { name: "Autonomous Drone", model: "DJI Matrice 300", quantity: 1 }, { name: "Depth Camera", model: "Intel RealSense D455", quantity: 6 }, { name: "GPU Workstation", model: "RTX 3090 x2", quantity: 3 }], coursesSupported: ["Computer Vision", "Robotics", "Reinforcement Learning"] },
  { id: "nlp-lab", name: "Natural Language Processing Lab", incharge: "Dr. Priya Nair", location: "Block B, Room 205", description: "Dedicated to NLP research including machine translation, text generation, and conversational AI. Access to large language model fine-tuning infrastructure.", equipment: [{ name: "GPU Server", model: "A6000 x4", quantity: 2 }, { name: "Annotation Workstation", model: "Dell Precision", quantity: 15 }, { name: "Smart Speaker Array", model: "For speech research", quantity: 5 }], coursesSupported: ["NLP", "Algorithms Lab", "Generative AI"] },
  { id: "general-computing-lab", name: "General Computing Lab", incharge: "Dr. Siddharth Rao", location: "Block A, Room 101", description: "Teaching lab for undergraduate courses. 60 workstations with GPU access for programming assignments, algorithm design, and introductory ML experiments.", equipment: [{ name: "Student Workstation", model: "Core i7 + RTX 3060", quantity: 60 }, { name: "Projector", model: "4K Laser", quantity: 1 }, { name: "Whiteboard", model: "Interactive", quantity: 2 }], coursesSupported: ["Introduction to Programming", "Data Structures Lab", "Algorithms Lab", "ML Lab"] },
];

export const events = [
  { id: 1, title: "HackSnippet 4.0", date: "2026-02-28", type: "Hackathon" as const, description: "Annual coding hackathon organized by the department.", speakers: [], venue: "TBA" },
  { id: 2, title: "Innofusion 3.0", date: "2026-03-15", type: "Hackathon" as const, description: "Innovation and technology fusion event.", speakers: [], venue: "TBA" },
  { id: 3, title: "RAAISA 3.0", date: "2025-12-15", type: "Conference" as const, description: "Research and Advances in AI and Smart Applications symposium.", speakers: [], venue: "Main Auditorium" },
  { id: 4, title: "Innofusion 2.0", date: "2025-10-20", type: "Hackathon" as const, description: "Innovation and technology fusion event.", speakers: [], venue: "Seminar Hall" },
];

export const placementStats = [
  { year: "2025-26", studentsPlaced: 55, avgPackage: "₹18.5 LPA", highestPackage: "₹52 LPA", companiesVisited: 28 },
  { year: "2024-25", studentsPlaced: 52, avgPackage: "₹16.8 LPA", highestPackage: "₹48 LPA", companiesVisited: 25 },
  { year: "2023-24", studentsPlaced: 48, avgPackage: "₹14.2 LPA", highestPackage: "₹42 LPA", companiesVisited: 22 },
  { year: "2022-23", studentsPlaced: 42, avgPackage: "₹12.5 LPA", highestPackage: "₹38 LPA", companiesVisited: 18 },
];

export const placementTestimonials = [
  { name: "Aditi Menon", company: "Google", role: "ML Engineer", batch: "2025", quote: "The department's emphasis on both theory and hands-on projects gave me the confidence to tackle Google's challenging interviews. The research exposure was invaluable." },
  { name: "Rohan Deshmukh", company: "Microsoft", role: "Software Engineer II", batch: "2024", quote: "From competitive programming labs to ML research projects, every experience at the department shaped my career. Microsoft's interview felt like a natural extension of our coursework." },
  { name: "Kavya Srinivasan", company: "Amazon", role: "Applied Scientist", batch: "2024", quote: "The AI Ethics course and hands-on NLP projects set me apart. Our faculty mentors were incredibly supportive throughout the placement season." },
];

export const industryMous = [
  { company: "Intel Corporation", date: "2024", purpose: "Joint research in Edge AI and model optimization" },
  { company: "NVIDIA", date: "2023", purpose: "GPU computing infrastructure and CUDA training" },
  { company: "TCS Research", date: "2023", purpose: "Industry internships and collaborative AI projects" },
  { company: "Infosys Springboard", date: "2022", purpose: "Curriculum co-development and student mentoring" },
  { company: "Robert Bosch", date: "2024", purpose: "Autonomous systems research collaboration" },
];

export const achievements = {
  facultyAwards: [
    { award: "Best Paper Award", recipient: "Dr. Rajesh Kumar", body: "AAAI 2025", year: 2025 },
    { award: "Young Scientist Award", recipient: "Dr. Meera Iyer", body: "DST India", year: 2024 },
    { award: "ACM Distinguished Educator", recipient: "Dr. Ananya Sharma", body: "ACM", year: 2024 },
    { award: "Best Researcher Award", recipient: "Dr. Priya Nair", body: "CSI India", year: 2023 },
    { award: "INAE Young Engineer Award", recipient: "Dr. Siddharth Rao", body: "INAE", year: 2023 },
  ],
  studentAchievements: [
    { 
      student: "Team led by Anwesha Ghosh", 
      achievement: "Smart India Hackathon (SIH) Winner", 
      event: "SIH 2025", 
      year: 2025, 
      rank: "1st Place",
      description: "Led by Anwesha Ghosh, the team secured the winner's title by delivering a real-time solution to an industry-level problem. Their innovative use of AI and system design stood out among 200+ national finalists."
    },
    { 
      student: "Team led by Avik Agarwala", 
      achievement: "Arjuna 1.0 Hackathon – Winner", 
      event: "North East Tech Summit", 
      year: 2025, 
      rank: "1st Place",
      description: "The CSE (AI & ML) team led by Avik Agarwala secured 1st place among 669 participants at the North East Tech Summit's Arjuna 1.0 Hackathon, hosted by NIT Agartala, for their AI-based Landslide Detection & Warning System. The team also won the summit's quiz competition."
    },
    { 
      student: "Team led by Tonima Das", 
      achievement: "Best GenAI Track Winner", 
      event: "Diversion 2K25", 
      year: 2025, 
      rank: "Winner",
      description: "The team from CSE (AI & ML) led by Tonima Das won the Best AI Hack at Diversion 2K25 for developing Pocket Legal Aid, a multilingual AI chatbot that delivers Constitution-based legal guidance to underserved communities."
    },
    { 
      student: "Department Team", 
      achievement: "Tech Expo (Senior) – 2nd Position", 
      event: "IIT Guwahati", 
      year: 2025, 
      rank: "2nd Position",
      description: "The department team secured 2nd position at this national innovation expo, earning a cash prize of ₹40,000. The project was mentored by Prof. Dr. Sudipta Sahana, HOD, CSE (AI)"
    },
    { 
      student: "Department Team", 
      achievement: "InnoFusion 2.0 - 2nd Position", 
      event: "InnoFusion 2.0", 
      year: 2025, 
      rank: "2nd Position",
      description: "Secured 2nd position with an AI-powered DevOps solution, demonstrating innovative automation and intelligent deployment capabilities."
    },
    { 
      student: "Department Team", 
      achievement: "HackSpire 2025 - 1st Runner Up & Best Innovation Prize", 
      event: "HackSpire 2025", 
      year: 2025, 
      rank: "1st Runner Up",
      description: "In a 30-hour sprint, prioritized utility over complexity to win the Innovation Track. The ultimate validation that deep tech needs to solve real problems."
    },
    { 
      student: "Department Team", 
      achievement: "Metamorph 2025 - 2nd Runner-up", 
      event: "GNIT Sodepur", 
      year: 2025, 
      rank: "2nd Runner-up",
      description: "Secured 2nd Runner-up position at Guru Nanak Institute of Technology, Sodepur. An intense, high-energy event that pushed thinking sharper, building faster, and innovating under pressure in Robotics & AI."
    },
  ],
  rankings: [
    { body: "NIRF", metric: "Engineering Rankings 2025", rank: "#12" },
    { body: "NAAC", metric: "Accreditation Grade", rank: "A++" },
    { body: "NBA", metric: "Accreditation Status", rank: "Accredited" },
  ],
};

export const alumniData = [
  { id: 1, name: "Arjun Nambiar", batch: "2020", role: "Research Scientist", company: "Google Brain", linkedin: "#" },
  { id: 2, name: "Shreya Kapoor", batch: "2019", role: "Senior ML Engineer", company: "Meta AI", linkedin: "#" },
  { id: 3, name: "Vishal Reddy", batch: "2020", role: "Data Scientist", company: "Goldman Sachs", linkedin: "#" },
  { id: 4, name: "Nandini Krishnan", batch: "2018", role: "AI Product Manager", company: "Microsoft", linkedin: "#" },
  { id: 5, name: "Aditya Jain", batch: "2019", role: "ML Engineer", company: "NVIDIA", linkedin: "#" },
  { id: 6, name: "Pooja Nair", batch: "2021", role: "Applied Scientist", company: "Amazon", linkedin: "#" },
  { id: 7, name: "Rahul Bhat", batch: "2018", role: "CTO", company: "AI Startup (Funded)", linkedin: "#" },
  { id: 8, name: "Divya Shetty", batch: "2020", role: "Research Engineer", company: "DeepMind", linkedin: "#" },
];

export const alumniTestimonials = [
  { name: "Arjun Nambiar", batch: "2020", quote: "The rigorous curriculum and research exposure at UEM KOLKATA's AI department directly prepared me for a career in cutting-edge AI research at Google." },
  { name: "Shreya Kapoor", batch: "2019", quote: "The faculty mentorship and industry connections I built during my time here were instrumental in landing my role at Meta. Truly a world-class department." },
  { name: "Nandini Krishnan", batch: "2018", quote: "From hackathons to research papers, every experience at the department shaped my ability to bridge technical AI expertise with product thinking." },
];

export const galleryImages = [
  { id: 1, title: "AI Research Lab", category: "labs" as const, description: "Students working on deep learning projects" },
  { id: 2, title: "HackAI 2025 Winners", category: "events" as const, description: "Winners of the national AI hackathon" },
  { id: 3, title: "Faculty Group Photo", category: "faculty" as const, description: "Department faculty at the annual retreat" },
  { id: 4, title: "Convocation 2025", category: "students" as const, description: "Graduating batch of 2025" },
  { id: 5, title: "NVIDIA GPU Cluster", category: "labs" as const, description: "DGX A100 cluster in the AI Research Lab" },
  { id: 6, title: "Workshop on LLMs", category: "events" as const, description: "Hands-on workshop on Large Language Models" },
  { id: 7, title: "Campus Aerial View", category: "campus" as const, description: "Bird's eye view of UEM KOLKATA" },
  { id: 8, title: "IEEE Conference 2025", category: "events" as const, description: "Keynote session at the IEEE conference" },
  { id: 9, title: "Student Project Demo", category: "students" as const, description: "Students demonstrating AI projects at tech fest" },
  { id: 10, title: "Robotics Lab Equipment", category: "labs" as const, description: "UR5e robotic arms in the CV & Robotics Lab" },
  { id: 11, title: "Guest Lecture Series", category: "faculty" as const, description: "International guest lecture on Quantum ML" },
  { id: 12, title: "Campus Lake", category: "campus" as const, description: "Serene lake view from the department building" },
];

export const recruiters = [
  "Google", "Microsoft", "Amazon", "Adobe", "Goldman Sachs",
  "Flipkart", "Qualcomm", "Samsung", "Oracle", "Infosys",
  "TCS", "Wipro",
];

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the Department", href: "/about" },
      { label: "Message from HoD", href: "/about/hod-message" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
    ],
  },
  // { label: "Faculty", href: "/faculty" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Programs Offered", href: "/academics/programs" },
      { label: "Curriculum & Syllabus", href: "/academics/curriculum" },
      { label: "Academic Calendar", href: "/academics/calendar" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Overview", href: "/research" },
      { label: "Funded Projects", href: "/research/projects" },
      { label: "Publications", href: "/research/publications" },
      { label: "Patents", href: "/research/patents" },
      { label: "Ph.D. Scholars", href: "/research/phd-scholars" },
    ],
  },
  { label: "Labs", href: "/labs" },
  { label: "Placements", href: "/placements" },
  { label: "Events", href: "/events" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Achievements", href: "/achievements" },
      { label: "Alumni", href: "/alumni" },
      { label: "Gallery", href: "/gallery" },
      { label: "Notices", href: "/notices" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
