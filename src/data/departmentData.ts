export const departmentInfo = {
  name: "Computer Science & Engineering (Artificial Intelligence)",
  shortName: "CSE (AI)",
  institution: "Institute of Engineering & Management, Kolkata",
  institutionShort: "IEM Kolkata",
  tagline: "Shaping the engineers of tomorrow through research, innovation, and excellence.",
  established: 2019,
  phone: "+91 94747 33974",
  email: "sudipta.sahana@uem.edu.in",
  address: "Department of CSE (AI), IEM Kolkata, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, Kolkata - 700160, West Bengal, India",
};

export const stats = [
  { label: "Students Enrolled", value: 915 },
  { label: "Research Publications", value: 180 },
  { label: "Projects Ongoing", value: 28 },
  { label: "Placement + Higher Qualification", value: 100, suffix: "%" },
];

export const aboutSnippet = "One of the newest and most cutting-edge engineering departments of the Institute of Engineering & Management, Kolkata (School of University of Engineering and Management, Kolkata), is the Department of Computer Science & Engineering (Artificial Intelligence), or CSE(AI). It began operations in the academic year 2020–2021. The main goal of this department is to teach fundamental ideas like computational thinking, object-oriented programming, data structures, algorithms, machine learning, deep learning, database management systems, artificial intelligence (including search strategies and knowledge representation), natural language processing, and Python programming for problem-solving. As a result, students will have a thorough understanding of artificial intelligence and machine learning through the application of real-world issues in a wide range of application domains, including speech and natural language processing, computer vision, cognitive sciences, and others. Throughout their studies, students will get expertise in a variety of professional electives given by machine learning, computer vision, voice and natural language processing, data analytics, cyber security, blockchain, cloud computing and generative AI domain verticals.";

export const programs = [
  {
    name: "B.Tech in CSE (AI)",
    duration: "4 Years",
    intake: 300,
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
  { id: 1, title: "NPTEL Examination Dates — March 21-22, 2026", date: "2026-03-21", publishedDate: "2026-01-02", category: "exam", isImportant: true },
  { id: 2, title: "Term – II Examinations – Theory Papers (30 Marks) — March 23 to March 31, 2026", date: "2026-03-23", publishedDate: "2026-01-02", category: "exam", isImportant: true },
  { id: 3, title: "End Semester Practical / Sessional Examinations & Viva-Voce (100 Marks) — April 1 to April 10, 2026", date: "2026-04-01", publishedDate: "2026-01-02", category: "exam", isImportant: true },
  { id: 4, title: "End Semester Theoretical Examinations – Theory Papers (100 Marks) — April 13 to May 9, 2026", date: "2026-04-13", publishedDate: "2026-01-02", category: "exam", isImportant: true },
  { id: 5, title: "NPTEL Examination Dates — April 17-18, April 25-26, 2026 & May 2-3, 2026", date: "2026-04-17", publishedDate: "2026-01-02", category: "exam", isImportant: false },
  { id: 6, title: "Summer Internship Period (for Students) — May 11 to June 6, 2026", date: "2026-05-11", publishedDate: "2026-01-02", category: "general", isImportant: false },
  { id: 7, title: "Inter – Semester Break (for Faculty members) — May 18 to June 5, 2026", date: "2026-05-18", publishedDate: "2026-01-02", category: "general", isImportant: false },
  { id: 8, title: "Summer Semester — June 8 to July 5, 2026", date: "2026-06-08", publishedDate: "2026-01-02", category: "general", isImportant: false },
  { id: 9, title: "Commencement of Classes of Odd Semester 2026 (for existing batches) — July 6, 2026", date: "2026-07-06", publishedDate: "2026-01-02", category: "general", isImportant: false },
  { id: 10, title: "Publication of Results of Even Semester — By July, 2026", date: "2026-07-01", publishedDate: "2026-01-02", category: "exam", isImportant: false },
];

export const researchHighlights = [
  {
    title: "AI-Driven Thermal Imaging: A Comprehensive Web-Based Tool for Non-Invasive Medical Diagnostics",
    pi: "Sudipta Sahana",
    agency: "ISACC 2025",
    amount: "February 2025",
  },
  {
    title: "Comparative Analysis for Conversion of Double Base Number System (DBNS) from Conventional Number System using Binary Search Algorithm by changing Base patterns for ANN-based Applications",
    pi: "Aniruddha Ghosh",
    agency: "ICACA-2024",
    amount: "December 2024",
  },
  {
    title: "Empowering 5G Networks: Machine Learning Solutions to Optimization Challenges",
    pi: "Anasuya Sengupta",
    agency: "ICHCSC-2024",
    amount: "July 2024",
  },
];

export const faculty = [
  { id: "Sudipta Sahana", name: "Prof. Dr. Sudipta Sahana", designation: "Head of the Department", email: "ananya@uem.edu.in", qualification: "Ph.D. IISc Bangalore", experience: 18, publications: 65, googleScholar: "#", scopus: "#", image: "/sudipta-sahana.jpeg" },
  { id: " Aniruddha Ghosh", name: "Prof. Dr. Aniruddha Ghosh", designation: "Assistant Head of Department", email: "rajesh@uem.edu.in", qualification: "Ph.D. IIT Bombay", experience: 15, publications: 52, googleScholar: "#", scopus: "#" },
  { id: "Anasuya Sengupta", name: "Prof. Anasuya Sengupta", designation: "Associate Professor", email: "priya@uem.edu.in", qualification: "Ph.D. IIT Madras", experience: 12, publications: 38, googleScholar: "#", scopus: "#" },
  { id: "Anjan Kumar Payra", name: "Prof. Anjan Kumar Payra", designation: "Associate Professor", email: "vikram@uem.edu.in", qualification: "Ph.D. CMU", experience: 10, publications: 30, googleScholar: "#", scopus: "#" },
  { id: "Debdatta Chatterjee ", name: "Prof. Debdatta Chatterjee", designation: "Assistant Professor", email: "meera@uem.edu.in", qualification: "Ph.D. IEM Kolkata", experience: 5, publications: 18, googleScholar: "#", scopus: "#" },
  { id: "Himadri Sekhar Panda", name: "Prof. Dr. Himadri Sekhar Panda", designation: "Assistant Professor", email: "siddharth@uem.edu.in", qualification: "Ph.D. IIIT Hyderabad", experience: 4, publications: 14, googleScholar: "#", scopus: "#" },
];

export const fundedProjects = [
  { id: 1, title: "Non-GPS Based Car Tracking System", pi: "Dr. Sudipta Sahana", coPi: "", agency: "Internal", amount: "₹1,00,000", duration: "29.01.2024 – 17.02.2024", status: "completed" as const, year: 2024 },
  { id: 2, title: "Smart Cloud based System for Early-Stage Identification & Removal of Infected Fish using Deep Learning Pattern", pi: "Dr. Aniruddha Ghosh", coPi: "Dr. Subhalaxmi Chakraborty", agency: "Internal", amount: "₹45,000", duration: "30.01.2024 – 17.02.2024", status: "completed" as const, year: 2024 },
  { id: 3, title: "Recognition for Finding Shortest Path for an Ambulance Rescue Rover: A Disaster Response Robotics", pi: "Anasuya Sengupta", coPi: "Dr. Aniruddha Ghosh", agency: "Internal", amount: "₹49,200", duration: "30.01.2024 – 17.02.2024", status: "completed" as const, year: 2024 },
  { id: 4, title: "SmartDrivePi", pi: "Dr. Ramen Pal", coPi: "Aniruddha Das", agency: "Internal", amount: "₹25,000", duration: "30.01.2024 – 17.02.2024", status: "completed" as const, year: 2024 },
  { id: 5, title: "Optimizing Traffic Flow in Peak Hours", pi: "Aniruddha Das", coPi: "Dr. Ramen Pal", agency: "Internal", amount: "₹25,000", duration: "31.01.2024 – 17.02.2024", status: "completed" as const, year: 2024 },
  { id: 6, title: "Full Stack Development of Real Time AQI and Prediction Created a real time air quality index system using Data analytics approach", pi: "Prof. Harshit Srivastava", coPi: "Prof. Namrata Shaw", agency: "Internal", amount: "₹50,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 7, title: "Enhancing Hydroponic Farming through Real-Time Predictive Analytics NS Sensor Networks", pi: "Prof. Harshit Srivastava", coPi: "Dr. Sudipta Sahana", agency: "Internal", amount: "₹30,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 8, title: "Real Time IoT based Crop Prediction and Irrigation System Using Data Analysis", pi: "Prof. Harshit Srivastava", coPi: "Dr. Sudipta Sahana", agency: "Internal", amount: "₹60,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 9, title: "AI-Enhanced CCTV system for Accident Detection and Women's Security Advanced online voting system for India", pi: "Prof. Harshit Srivastava", coPi: "Prof. Anasuya Sengupta", agency: "Internal", amount: "₹25,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 10, title: "Migrants Using Secure Authentication Encryption Techniques and Face Recognition", pi: "Prof. Harshit Srivastava", coPi: "Dr. Aniruddha Ghosh", agency: "Internal", amount: "₹50,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 11, title: "FPV Drone", pi: "Prof. Harshit Srivastava", coPi: "Prof. Purbita Chatterjee", agency: "Internal", amount: "₹25,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 12, title: "Household Energy Consumption Optimization using Data Analytics approach", pi: "Prof. Harshit Srivastava", coPi: "Prof. Amit Kumar", agency: "Internal", amount: "₹25,000", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 13, title: "VisionRec: Record Everything You See", pi: "Prof. Purbita Chatterjee", coPi: "Prof. (Dr.) Harshit Srivastava", agency: "Internal", amount: "₹13,600", duration: "19.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 14, title: "Tag-Less Hardware-Based Cloud Password Manager", pi: "Sudipta Sahana", coPi: "", agency: "Internal", amount: "₹60,000", duration: "14.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 15, title: "Navigation and Vision Assistance for Differently Abled People", pi: "Prof. (Dr.) Sudipta Sahana", coPi: "", agency: "Internal", amount: "₹60,000", duration: "14.08.2024 – 24.08.2024", status: "completed" as const, year: 2024 },
  { id: 16, title: "Smart AQI detection", pi: "Dr. Harshit Srivastava", coPi: "Prof. Purbita Chatterjee", agency: "Internal", amount: "₹28,300", duration: "15.01.2025 – 24.03.2025", status: "completed" as const, year: 2025 },
  { id: 17, title: "Real-Time destruction reading using deep learning Hydro Float: Drone-Based Garbage Detection and Collection", pi: "Dr. Harshit Srivastava", coPi: "Dr. Namrata Shaw", agency: "Internal", amount: "₹53,000", duration: "15.01.2025 – 24.03.2025", status: "completed" as const, year: 2025 },
  { id: 18, title: "System for water bodies", pi: "Prof. Sramana Mukherjee", coPi: "", agency: "Internal", amount: "₹1,00,000", duration: "15.02.2025 – 24.04.2025", status: "completed" as const, year: 2025 },
];

export const publications = [
  { id: 1, title: "Directed Interaction Network Prediction Using Functional Activity and Topological Approach", authors: ["Anjan Kumar Payra", "Banani Saha", "Anupam Ghosh"], journal: "The International Conference on Web 6.0 and Industry 6.0 (WIN 6.0 2025)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 2, title: "An Efficient Image Classification Technique using Transfer Learning Mechanism in the Context of Tumor Detection", authors: ["Anasuya Sengupta", "Alok Ranjan Pal"], journal: "Fifth IEEE Sponsored International Conference on Advances in Electrical, Computing, Communications and Sustainable Technologies (ICAECCT 2025)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 3, title: "Aspect-Based Sentiment Analysis on Movie Reviews Using Machine Learning", authors: ["Riju Roy", "Gargee Das", "Srijori Dev Prttha Dutta", "Debaima Bacchi", "Anjan Kumar Payra"], journal: "3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 4, title: "The EcoSync: A Comprehensive Study on Recycling Waste Management using Image Recognition", authors: ["Alapu Mukherjee", "Bignsa Chatterjee", "Indrakshi Das", "Koustik Chakraborty", "Mouniree Pramanik", "Anjan Kumar Payra"], journal: "3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 5, title: "Steganographic Key embedding in AI generated images", authors: ["Aniruddha Das", "Arpan Bacchi", "Swappel Banerjee", "Sampurna Dhar", "Ankita Mondal"], journal: "VIT International Conference on Innovations in Software Architecture and Computational Systems", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 6, title: "Smart Traffic Monitoring System for rush hours Using Raspberry pi", authors: ["Aniruddha Das Sobhadeep Ghosh", "Sreedeco Ghosh", "Soumyajeet Panda Souvik Modak", "Uday Sankar De"], journal: "ICAEMT 2024 19 th and 20 th Dec, I.T.S Engineering College Greater Noida India", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 7, title: "Non-GPS Based Car Location Tracking System Using Deep Learning and IOT in 3-tier Architecture", authors: ["Sarnyak Gauri", "Soumyadeep Chakraborty", "Saniya Goonwardute", "Sudipta Sahana"], journal: "The International Conference on Smart Mobility Systems (ICSMS 2025)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 8, title: "SolvIt: AI-Powered Mango Leaf Disease Detection System with Organic Chat Support", authors: ["Sayan Maiti", "Sanjuana Chatterjee", "Soumya Dutta Ujjam Banerjee", "Anjan Kumar Payra"], journal: "at Intelligent Electrical Systems in Industrial Automation 2025(Accepted)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 9, title: "Predicting Plant Diseases with Deep Learning", authors: ["Debdatta Chatterjee", "Dibyanshu Ghosh", "Pryavit Deb"], journal: "at third International Conference on Intelligent and Secure Engineering Solutions", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 10, title: "LLaMA 2-Based End-to-End Medical Chatbot", authors: ["Debdatta Chatterjee", "Suryanash Chaubey", "Rudranuj Ghosh", "Ayus Datta", "Satarupa Kar", "Muskan Das"], journal: "at 2nd National Conference on Research Advancements and Innovations in Computing, Communications, and Applications (RAICCA)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 11, title: "Comparative Analysis for Conversion of Double Base Number System (DBNS) From Conventional Number System using Binary Search Algorithm by changing Base patterns for ANN-based Applications", authors: ["Satrughna Singha", "Aniruddha Ghosh"], journal: "3rd International Conference on Advanced Computing and Applications (ICACA-2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 12, title: "Multimodal Sentiment Analysis: Impact of LSTM Architecture on Text Data for Understanding Sentiments", authors: ["Srishti Dey"], journal: "3rd International Conference on Human-Centric Smart Computing (ICHCSC 2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 13, title: "Beyond Flight: Investigating UAV Swarm Topology via Deep Learning and Metaheuristic Approach for Intruder Drone Detection", authors: ["Priti Mandal", "Harshit Srivastava", "Santos Kumar Das"], journal: "2nd International Conference on Recent Advances in Artificial Intelligence & Smart Applications (RAISA) 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 14, title: "Virtual Selection: Performing Pointer Based Interaction Techniques through Touchless Operation with OpenCV", authors: ["Jahed Khan", "Kashmisetti Gavara", "Surya Tej Malli", "Manifipram Manas", "Srujan Pokkuru", "E. Jenadeswara Rao", "Harshit Srivasta"], journal: "2nd International Conference on Recent Advances in Artificial Intelligence & Smart Applications (RAISA) 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 15, title: "Parkinson: A Web-based Parkinson's Disease Detector based on Machine Learning to detect the presence of Parkinson's Disease in human beings", authors: ["Debmitra Ghosh", "Sourabh Sahu", "Tisha Dutta", "Afrin Banu", "Arya Bhattacharya", "Dhannjal Singh", "Soumyarj Chowdhury", "Sudipta"], journal: "International Conference on Smart Systems and Wireless Communication (SSWC 2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 16, title: "Heart Disease Prediction by Machine Learning: In Mendal, IoT (CCIS), Springer Learning for Social Transformation: EAIT 2024", authors: ["Anubhav Mishra", "Simran Sharma", "Eshaan Mandal", "Arjit Banerjee", "Anuja Kumar Patra", "Banani Saha", "Anupam Ghosh"], journal: "Lecture Notes in Networks and Systems, vol 113, Springer, Singapore", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 17, title: "Multi-Modal AI for Mental Health Prediction and Intervention", authors: ["Anasuya Sengupta", "Sankalya Das", "Mayurkh Nayak"], journal: "The International Conference on Web 6.0 and Industry 6.0 (WIN 6.0 2025)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 18, title: "Essential Protein Identification Using Strategic Network-Degree based and Human-Centered Approach", authors: ["Anjan Kumar Payra", "Khondkar Mahbub Remu", "Kunal Das", "Bipilj Chakraborty", "Banani Saha", "Anupam Ghosh", "Anirban Roy"], journal: "Doctoral Symposium on Human Centered Computing 2024 (HUMAN – 2024) published: 1st May 2025", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 19, title: "B92 protocol for Encryption and detection", authors: ["Debdatta Chatterjee", "Sanjoy Bhattacharjee"], journal: "at Second International Conference on Security, Surveillance and Artificial Intelligence (ICSSAI-2025) (Accepted)", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 20, title: "Smart Traffic Management: Automated Rerouting and Congestion using IoT and Sensor Technology", authors: ["Debdatta Chatterjee", "Sanjoy Bhattacharjee", "Dipankar Misra", "Kaushibv Sharma", "Paroj Ghosh"], journal: "at Springer Nature", year: 2025, type: "book_chapter" as const, indexedIn: "Scopus" as const },
  { id: 21, title: "A Machine Learning-Powered Navigation System for Smart Cities: Optimizing Traffic Flow and Air Quality", authors: ["Nilanjana De", "Anjit Bhattacharya", "Sumeeba Das", "Sayan Sangha Pal", "Sudipta Sahana"], journal: "Doctoral Symposium on Human Centered Computing, 2024 (HUMAN – 2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 22, title: "Machine Learning Driven Blood Demand Prediction Model", authors: ["Srijan Bandyopadhyay", "Titiksha Dey", "Moubasera Karmakar", "Sumeli Dekkaa", "Anustka Das", "Sudipta Sahana"], journal: "3rd International Conference on Human-Centric Smart Computing (ICHCSC 2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 23, title: "Cement Quality Prediction and Fraud Detection by using AI", authors: ["Aniruddha Das", "Irfan Wahid", "Debmalya Panja"], journal: "Recent Advances in Operations Research and Statistics & Analytics (RAORSA-2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 24, title: "Empowering 5G Networks: Machine Learning Solutions to Combat Security Challenges", authors: ["Anasuya Sengupta", "Antro Pal", "Karnab Biswas", "Debivoti Dutta", "Ankan Paul", "Uday Das"], journal: "International Conference on Human Centric Smart Computing (ICHCSC-2024)", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 25, title: "Leveraging Generative AI for Effective Medical Diagnosis and Delivery of Healthcare Services", authors: ["Dhyanendra Pal", "Dipayan Mondal", "Attaba Gupta", "Kashmira Sengupta", "Saumip Das", "Sudipta Sahana"], journal: "3rd International Conference on Human Centric Smart Computing 2024 July, 26th 26, 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 26, title: "INTELLITRACK: A Realtime AI Based Employee Attendance And Recognition System", authors: ["Aniruddha Ghosh", "Barshan Dutta Soham Bera", "Sayan Vijayanth", "Debarun Manna", "Sobhan Panja"], journal: "4th International Conference On Interdisciplinary Research In Technology & Management(IRTM) – 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 27, title: "LOGIOUS: An instant messaging (IM) platform using AI", authors: ["Aniruddha Ghosh", "Anirban Ghosh", "Souvik Das", "Koustav Samadra", "Prayinsh Sen Sharma", "Rutojit Sarma"], journal: "2nd International Conference on Recent Advances in Artificial Intelligence & Smart Applications (RAISA) 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 28, title: "AI enabled Real-time Next Generation Attendance Monitoring System with Facial Recognition", authors: ["Sagnik Chatterjee", "Rony Hait", "Titun Chowdhury", "Sudipta Sahana"], journal: "2nd International Conference on Recent Advances in Artificial Intelligence & Smart Applications (RAISA) 2024", year: 2024, type: "conference" as const, indexedIn: "Scopus" as const },
  { id: 29, title: "AI-Driven Thermal Imaging: A Comprehensive Web-Based Tool for Non-Invasive Medical Diagnostics", authors: ["Aniruddha Ghosh", "Sayan Sangha Pal", "Sumeeba Das", "Spardan Bhattacharya", "Arjit Bhattacharya", "Nilanjana De", "Sudipta Sahana"], journal: "3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC), 2025", year: 2025, type: "conference" as const, indexedIn: "Scopus" as const },
];

export const patents = [
  { id: 1, title: "Attend-Ease: Face Recognition Based Automated Attendance Recording System", inventors: "Prof. (Dr.) Sudipta Sahana", applicationNo: "IN202541001234", year: 2025, status: "Filed" as const },
  { id: 2, title: "A System Based on Data Hiding Technique for Efficient Quality Access Control of Images and a Method Thereof", inventors: "Prof. (Dr.) Aniruddha Ghosh", applicationNo: "PCT/IN2025/050234", year: 2025, status: "Filed" as const },
  { id: 3, title: "VisionRec", inventors: "Prof. (Dr.) Harshit Srivastava, Prof. Purbita Chatterjee", applicationNo: "IN202541003456", year: 2025, status: "Filed" as const },
  { id: 4, title: "Attendance Keyboard", inventors: "Prof. (Dr.) Harshit Srivastava, Prof. (Dr.) Namrata Shaw", applicationNo: "IN202541004567", year: 2025, status: "Filed" as const },
  { id: 5, title: "Digital Authentication Based Laptop Security Lock", inventors: "Prof. (Dr.) Namrata Shaw, Prof. (Dr.) Harshit Srivastava", applicationNo: "IN202541005678", year: 2025, status: "Filed" as const },
  { id: 6, title: "Tap2Key: Bluetooth-Based USB Hardware Password Manager with 2-Factor Authentication for Secure and Cross-Platform Credential Management", inventors: "Prof. (Dr.) Sudipta Sahana", applicationNo: "IN202541006789", year: 2025, status: "Filed" as const },
  { id: 7, title: "Adaptive Wearable Navigation System for the Visually Impaired with Real-Time Sensor Fusion and Multi-Modal Feedback", inventors: "Prof. (Dr.) Sudipta Sahana", applicationNo: "IN202541007890", year: 2025, status: "Filed" as const },
  { id: 8, title: "Smart Walker with Health Assistance & Emergency Alert System", inventors: "Avik Agarwala", applicationNo: "IN202541008901", year: 2025, status: "Filed" as const },
  { id: 9, title: "A Smart Safety Footwear for Next Generation", inventors: "Avik Agarwala", applicationNo: "IN202541009012", year: 2025, status: "Filed" as const },
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
  { name: "Arjun Nambiar", batch: "2020", quote: "The rigorous curriculum and research exposure at IEM Kolkata's AI department directly prepared me for a career in cutting-edge AI research at Google." },
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
  { id: 7, title: "Campus Aerial View", category: "campus" as const, description: "Bird's eye view of IEM Kolkata" },
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
