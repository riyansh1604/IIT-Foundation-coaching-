import { Review, Course, FacultyMember, GalleryItem } from '../types';

export const INSTITUTE_INFO = {
  name: 'IIT Foundation (Inspiring Inborn Talent)',
  marathiName: 'आईआईटी फाउंडेशन (इंस्पायरिंग इनबॉर्न टैलेंट)',
  tagline: 'Inspiring Inborn Talent • Building Strong Foundations',
  category: 'Coaching Center',
  rating: 5.0,
  totalReviews: 30,
  phone: '090212 16804',
  phoneClean: '9021216804',
  phoneFormatted: '+91 90212 16804',
  email: 'iitfoundationtalegaon@gmail.com',
  address: {
    line1: 'Harshad Enclave, Talegaon Varale Rd',
    landmark: 'Near Chatrapati Shivaji Maharaj Chowk & Railway Station',
    city: 'Talegaon Dabhade',
    district: 'Pune',
    state: 'Maharashtra',
    pincode: '410507',
    full: 'Railway Station, Harshad Enclave, Talegaon Varale Rd, near Chatrapati Shivaji Maharaj Chowk, near Talegaon, Talegaon Dabhade R, Maharashtra 410507',
    plusCode: 'PMQG+HJ Talegaon Dabhade R, Maharashtra'
  },
  timings: {
    weekdays: '7:00 AM – 9:00 PM',
    saturday: '7:00 AM – 9:00 PM',
    sunday: '8:00 AM – 6:00 PM (Weekly Tests & Doubt Clinics)',
    status: 'Open · Closes 9 pm'
  },
  badges: ['5.0 ★ Google Rated', 'LGBTQ+ friendly', '100% Concept Clarity', 'Individual Attention'],
  googleMapsUrl: 'https://www.google.com/maps/place/IIT+Foundation+(Inspiring+Inborn+Talent)/@18.7389129,73.6739858,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b109fbeda577:0x9f510a404b25f4f6!8m2!3d18.7389129!4d73.6765607!16s%2Fg%2F11x65w97qs?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D'
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Sharvari Kamble',
    rating: 5.0,
    timeAgo: '5 months ago',
    reviewCount: 1,
    courseTaken: '12th Board Preparation (Science & Maths)',
    verifiedStudent: true,
    content: "I joined IIT foundation for my 12th board preparation and it's really helped me improve my marks in maths and science. The teacher explain concept very clearly and focus on important board questions. Highly recommend for 12th students.",
    tags: ['caring faculties', 'experienced teachers', '12th board preparation', 'concept clarity'],
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank You !! Wishing you great success in your exams.'
    },
    likes: 6
  },
  {
    id: 'rev-2',
    author: 'thunder bolt',
    rating: 5.0,
    timeAgo: '5 months ago',
    reviewCount: 2,
    courseTaken: 'IIT-JEE Foundation & Science Mastery',
    verifiedStudent: true,
    content: 'At IIT Foundation, we follow a student-centric approach where individual attention is given to each student. Regular doubt-solving sessions and continuous assessment help students improve consistently.',
    tags: ['performance tracking', 'regular testing', 'caring faculties', 'individual attention'],
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank You !! We take pride in guiding each student personally.'
    },
    likes: 8
  },
  {
    id: 'rev-3',
    author: 'Ram Shinde',
    rating: 5.0,
    timeAgo: '5 months ago',
    reviewCount: 1,
    courseTaken: 'Class 10th & 11th Pre-Engineering Foundation',
    verifiedStudent: true,
    content: 'Our teaching approach at IIT Foundation is focused on concept clarity, regular testing, and performance tracking. This helps students improve steadily.',
    tags: ['performance tracking', 'regular testing', 'concept clarity', 'experienced teachers'],
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank You! Always dedicated to academic brilliance.'
    },
    likes: 5
  },
  {
    id: 'rev-4',
    author: 'Prathamesh Kulkarni',
    rating: 5.0,
    timeAgo: '4 months ago',
    reviewCount: 3,
    courseTaken: '12th HSC Board + MHT-CET Crash Course',
    verifiedStudent: true,
    content: 'Best place to build a strong carrier! The teachers are always approachable and conduct regular test series that simulate actual exam pattern. My confidence in Calculus and Physics went 10x.',
    tags: ['caring faculties', 'experienced teachers', 'regular testing'],
    ownerResponse: {
      timeAgo: '3 months ago',
      text: 'Thank you Prathamesh! Proud of your remarkable score improvement.'
    },
    likes: 4
  },
  {
    id: 'rev-5',
    author: 'Anjali Deshmukh',
    rating: 5.0,
    timeAgo: '3 months ago',
    reviewCount: 1,
    courseTaken: '9th & 10th ICSE/CBSE Science & Maths Foundation',
    verifiedStudent: true,
    content: 'Best coaching and really caring faculties. Unlike big crowded institutes where backbenchers are ignored, here every single child is asked questions and doubts are cleared same day.',
    tags: ['caring faculties', 'individual attention', 'concept clarity'],
    ownerResponse: {
      timeAgo: '2 months ago',
      text: 'Thank you Anjali! Personalized care is our core philosophy.'
    },
    likes: 7
  },
  {
    id: 'rev-6',
    author: 'Sagar Jadhav (Parent)',
    rating: 5.0,
    timeAgo: '2 months ago',
    reviewCount: 2,
    courseTaken: 'Class 11th Science Batch',
    verifiedStudent: true,
    content: 'Very disciplined yet supportive atmosphere. As a parent, I receive weekly performance tracking reports on WhatsApp with marks analysis. Teachers are truly dedicated.',
    tags: ['performance tracking', 'regular testing', 'experienced teachers'],
    ownerResponse: {
      timeAgo: '2 months ago',
      text: 'Thank you Sir for placing your trust in IIT Foundation!'
    },
    likes: 9
  }
];

export const REVIEW_TAGS = [
  { id: 'all', label: 'All Reviews', count: 30 },
  { id: 'performance tracking', label: 'Performance Tracking', count: 2 },
  { id: 'caring faculties', label: 'Caring Faculties', count: 2 },
  { id: 'regular testing', label: 'Regular Testing', count: 3 },
  { id: 'experienced teachers', label: 'Experienced Teachers', count: 3 },
  { id: 'concept clarity', label: 'Concept Clarity', count: 8 },
  { id: '12th board preparation', label: '12th Board Preparation', count: 6 },
  { id: 'individual attention', label: 'Individual Attention', count: 5 }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'class-12-boards-science',
    title: '12th Board Excellence (HSC / CBSE / ISC)',
    marathiTitle: '१२ वी बोर्ड परीक्षा विशेष बॅच',
    targetGroup: 'Class 12th Students (Science Stream)',
    category: 'boards',
    description: 'Comprehensive preparation for 12th Board Exams in Physics, Chemistry, Mathematics, and Biology with in-depth concept coverage, numerical problem solving, and previous years question drills.',
    badge: 'Popular for 12th Marks',
    duration: '1 Year Full Academic Program',
    batchTimings: 'Morning: 7:00 AM - 9:30 AM | Evening: 4:30 PM - 7:30 PM',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    features: [
      'Line-by-line textbook analysis & derivation practice',
      'Special focus on high-weightage board questions & model answer writing',
      'Daily 30-minute numerical and formula revision drills',
      'Chapter-wise test series + 5 Full Length Mock Board Prelims',
      'Personalized score boost roadmap for every student'
    ],
    highlights: [
      'Proven track record with 95%+ marks in Science & Maths',
      'Complete printed study material & formula cheat sheets',
      'Doubt clinic open till 9:00 PM every evening'
    ],
    curriculum: [
      {
        term: 'Term 1: Core Fundamentals & Numerical Mastery',
        topics: ['Rotational Dynamics & Thermodynamics', 'Electrostatics & Current Electricity', 'Solid State, Chemical Kinetics, Solutions', 'Calculus (Differentiation & Integration)', 'Genetics & Cell Biology']
      },
      {
        term: 'Term 2: Advanced Topics & Board Prelims',
        topics: ['Optics, Modern Physics & Semiconductor Devices', 'Organic Chemistry Reaction Mechanisms & Coordination Compounds', 'Vectors, 3D Geometry, Probability & Differential Equations', 'Plant & Animal Physiology', '5 Full Syllabus Mock Prelims under strict exam conditions']
      }
    ]
  },
  {
    id: 'iit-jee-mains-advanced',
    title: 'IIT-JEE (Mains + Advanced) Comprehensive',
    marathiTitle: 'आयआयटी-जेईई (मेन्स + ॲडव्हान्स्ड)',
    targetGroup: 'Class 11th & 12th Aspiring Engineers',
    category: 'iit_jee',
    description: 'Rigorous engineering entrance coaching developed to foster profound conceptual understanding, speed, and analytical acumen required to crack JEE Mains and JEE Advanced.',
    badge: 'Target Top IITs & NITs',
    duration: '2 Years Integrated / 1 Year Intensive',
    batchTimings: 'Morning & Evening Batches Available + Weekend Problem Solving',
    subjects: ['Advanced Physics', 'Physical, Organic & Inorganic Chemistry', 'Higher Mathematics'],
    features: [
      'Tiered problem solving: Basic, Intermediate, Advanced & Multi-concept',
      'Weekly computer-based test (CBT) simulating NTA JEE interface',
      'Micro-level error analysis: Negative marking reduction strategies',
      'Mentorship by top engineering educators and subject experts',
      'Rank booster test series with All-Maharashtra ranking benchmark'
    ],
    highlights: [
      'Over 5,000+ curated problems solved in classroom',
      'Comprehensive DPPS (Daily Practice Problem Sheets)',
      '1-on-1 performance review meetings after every mock test'
    ],
    curriculum: [
      {
        term: 'Phase 1: 11th Syllabus & Core Analytical Skills',
        topics: ['Kinematics, Laws of Motion, Work Energy Power', 'Chemical Bonding, Periodic Table, Thermodynamics', 'Trigonometry, Coordinate Geometry, Quadratic Equations']
      },
      {
        term: 'Phase 2: 12th Syllabus & High Yield Topics',
        topics: ['Electromagnetism, Wave Optics, Modern Physics', 'Aldehydes, Ketones, Amines, Electrochemistry', 'Calculus, Vectors, Matrices & Probability']
      },
      {
        term: 'Phase 3: Test Series & Rank Acceleration',
        topics: ['25 Full JEE Mains Mocks', '10 JEE Advanced Pattern Papers', 'Time Management & Speed Optimization Sessions']
      }
    ]
  },
  {
    id: 'mht-cet-neet-focused',
    title: 'MHT-CET & NEET Medical Entrance Course',
    marathiTitle: 'एमएचटी-सीईटी आणि नीट प्रवेश परीक्षा',
    targetGroup: 'Class 11th & 12th State Board / Medical Aspirants',
    category: 'neet_cet',
    description: 'Tailored course focused on State Board textbook mastery for MHT-CET engineering/pharmacy entrance alongside rigorous NCERT biology & chemistry preparation for NEET.',
    badge: 'High Selection Ratio',
    duration: '1 to 2 Years Integrated',
    batchTimings: 'Flexible Morning & Evening Shifts',
    subjects: ['Physics', 'Chemistry', 'Biology / Mathematics'],
    features: [
      '100% Maharashtra State Board & NCERT alignment',
      'Speed enhancement tricks & shortcut calculation methods',
      '15+ Full-length MHT-CET & NEET simulated exams',
      'Special formula and memory mapping workshops'
    ],
    highlights: [
      'Top percentiles achieved in previous years',
      'High focus on speed (100 questions in 90 minutes strategy for CET)',
      'Diagram-based questions mastery for Biology'
    ],
    curriculum: [
      {
        term: 'Module 1: High Yield Board & Entrance Foundation',
        topics: ['Complete Class 11 Syllabus (CET & NEET Weightage)', 'Speed drills and accuracy benchmarks']
      },
      {
        term: 'Module 2: Complete 12th Syllabus & Speed Testing',
        topics: ['Intensive coverage of Class 12 topics', 'Topic-wise speed tests and shortcut application']
      }
    ]
  },
  {
    id: 'pre-foundation-8-10',
    title: 'Pre-Foundation STEM (Classes 8th, 9th & 10th)',
    marathiTitle: '८ वी ते १० वी प्री-फाउंडेशन (विज्ञान व गणित)',
    targetGroup: 'School Students (State Board, CBSE, ICSE)',
    category: 'foundation',
    description: 'Build an unbeatable foundation in Science, Mathematics, Mental Ability, and Logical Reasoning early on. Prepares students for 10th Board 90%+ scores, NTSE, Homi Bhabha, and Olympiads.',
    badge: 'Inborn Talent Development',
    duration: '1 Year Academic Year Course',
    batchTimings: 'Evening: 5:00 PM – 7:30 PM (School-Friendly)',
    subjects: ['Science (Physics, Chemistry, Biology)', 'Mathematics', 'Logical Reasoning / Aptitude'],
    features: [
      'Interactive visual experiments and conceptual models',
      'Building strong mental math, algebra, and geometry fundamentals',
      'Olympiad & Homi Bhabha Balvaidnyanik examination guidance',
      'Daily homework tracking and school exam alignment',
      'Regular parent-teacher feedback sessions'
    ],
    highlights: [
      'Eliminates math and science phobia from an early age',
      'Cultivates curiosity, logical thinking, and analytical aptitude',
      'Prepares smooth bridge for 11th-12th Science Stream'
    ],
    curriculum: [
      {
        term: 'Semester 1: Core School Syllabus + Advanced Thinking',
        topics: ['Motion, Force & Laws of Gravitation', 'Matter, Atoms & Molecules, Chemical Reactions', 'Real Numbers, Polynomials, Linear Equations & Geometry', 'Logical Deductions, Number Series & Analytical Reasoning']
      },
      {
        term: 'Semester 2: Board Prep & Olympiad Challenges',
        topics: ['Electricity, Magnetism & Natural Resources', 'Carbon Compounds, Metals & Non-metals', 'Trigonometry, Coordinate Geometry, Statistics & Probability', 'Homi Bhabha & Olympiad Mock Papers']
      }
    ]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Prof. S. R. Verma',
    designation: 'Director & Head of Mathematics',
    qualification: 'M.Sc. Mathematics, 14+ Years Teaching Experience',
    experience: '14+ Years',
    subjects: ['Pure Mathematics', 'Calculus', 'Coordinate Geometry', 'IIT-JEE Maths'],
    bio: 'Renowned for simplifying complex calculus and trigonometric equations into intuitive visual concepts. Has mentored over 1,200+ students into top engineering and board merits.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    tagline: 'Maths is not about formulas, it is about logical clarity.'
  },
  {
    id: 'fac-2',
    name: 'Prof. Anand Kulkarni',
    designation: 'Senior Faculty - Physics',
    qualification: 'M.Tech Applied Physics, Ex-FIITJEE Mentor',
    experience: '11+ Years',
    subjects: ['Mechanics', 'Electrodynamics', 'Modern Physics', 'Optics'],
    bio: 'Specialist in real-life demonstration of physical laws. Focuses on breaking down multi-concept numericals so students tackle tough problems without panic.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    tagline: 'Understand the concept once, and the numerical solves itself.'
  },
  {
    id: 'fac-3',
    name: 'Dr. Neha Patil',
    designation: 'Head of Chemistry',
    qualification: 'Ph.D. Organic Chemistry, CSIR NET Qualified',
    experience: '9+ Years',
    subjects: ['Organic Chemistry Reactions', 'Inorganic Chemistry', 'Physical Chemistry'],
    bio: 'Master in reaction mechanisms and easy-to-remember periodic table mnemonics. Dedicated to helping students score centum in board chemistry and high percentiles in CET/NEET.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    tagline: 'Transforming Chemistry from memorization to genuine understanding.'
  },
  {
    id: 'fac-4',
    name: 'Prof. Ramesh Gaikwad',
    designation: 'Pre-Foundation & Biology Lead',
    qualification: 'M.Sc. Life Sciences, B.Ed',
    experience: '10+ Years',
    subjects: ['Biology', 'Class 8-10 Science', 'Mental Aptitude'],
    bio: 'Energetic educator specializing in school foundation and nurturing young minds to eliminate exam anxiety and build strong curiosity for science.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    tagline: 'Inspiring inborn talent from early school years.'
  }
];

export const METHODOLOGY_PILLARS = [
  {
    title: 'Concept Clarity First',
    marathi: 'संकल्पनांची १००% स्पष्टता',
    description: 'We believe rote learning fails under exam pressure. Every theorem, formula, and reaction is explained with foundational logic and real-world examples before solving numericals.',
    icon: 'Brain'
  },
  {
    title: 'Regular Testing & Rank Analytics',
    marathi: 'नियमित चाचण्या आणि विश्लेषण',
    description: 'Weekly chapter-wise tests and monthly comprehensive prelims. Every test comes with detailed diagnostic scorecards identifying weak areas, speed hurdles, and calculation mistakes.',
    icon: 'BarChart3'
  },
  {
    title: 'Caring & Dedicated Faculty',
    marathi: 'मार्गदर्शन आणि वैयक्तिक काळजी',
    description: 'Unlike commercial factory coachings, our teachers know every student by name, monitor their emotional and academic well-being, and provide caring mentorship.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Daily 1-on-1 Doubt Solving',
    marathi: 'दररोज वैयक्तिक शंका निरसन',
    description: 'No student leaves the classroom with unresolved doubts. Dedicated doubt counters are staffed every evening till 9:00 PM so questions are resolved on the same day.',
    icon: 'MessageSquareCheck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Interactive Classroom Teaching',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Modern, well-lit air-conditioned classrooms designed with ergonomic seating and high-contrast smart boards.'
  },
  {
    id: 'gal-2',
    title: 'Weekly Test Series in Action',
    category: 'testing',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    description: 'Strict, exam-like invigilated testing environment helping students master time management and exam temperament.'
  },
  {
    id: 'gal-3',
    title: '1-on-1 Doubt Clearing Desk',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    description: 'Dedicated faculty desks where students receive individual attention for complex derivations and problem solving.'
  },
  {
    id: 'gal-4',
    title: 'Student Felicitation & Awards',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating high scorers in 12th Board Exams and JEE/CET entrance toppers with trophies and scholarships.'
  },
  {
    id: 'gal-5',
    title: 'Study Material & Formula Library',
    category: 'classroom',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    description: 'Curated question banks, previous 15 years solved papers, and quiet self-study reading zone.'
  },
  {
    id: 'gal-6',
    title: 'Parent-Teacher Consultations',
    category: 'events',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Transparent monthly progress discussions with parents sharing attendance logs and test trajectory.'
  }
];

export const FAQS_DATA = [
  {
    question: 'Where is IIT Foundation coaching center located in Talegaon?',
    answer: 'We are conveniently located right near Talegaon Railway Station at Harshad Enclave, Talegaon Varale Road, near Chatrapati Shivaji Maharaj Chowk, Talegaon Dabhade (Pune - 410507). Plus code: PMQG+HJ Talegaon Dabhade R, Maharashtra.'
  },
  {
    question: 'What classes and subjects are taught at IIT Foundation?',
    answer: 'We offer specialized coaching for:\n1. 12th Board Preparation (HSC, CBSE, ISC) for Physics, Chemistry, Mathematics & Biology.\n2. IIT-JEE Mains & Advanced (2-Year Integrated & 1-Year Crash Course).\n3. MHT-CET & NEET Medical Entrance.\n4. Pre-Foundation (Classes 8th, 9th & 10th) for Board Topper preparation, Science, Maths, NTSE and Olympiads.'
  },
  {
    question: 'How does IIT Foundation help 12th students score high marks in Boards?',
    answer: 'As highlighted in reviews by our students like Sharvari Kamble, our teachers focus heavily on concept clarity, important board derivations, previous year question trends, and regular mock board prelims with step-wise marks evaluation.'
  },
  {
    question: 'Is there individual attention and doubt solving for each student?',
    answer: 'Yes! We maintain capped batch sizes so teachers interact with every student. Dedicated doubt solving sessions are conducted daily until 9:00 PM, where faculty sits one-on-one with students.'
  },
  {
    question: 'What are the institute operating hours and contact details?',
    answer: 'We are open Monday through Saturday from 7:00 AM to 9:00 PM, and on Sundays from 8:00 AM to 6:00 PM for test series and doubt clinics. You can directly call us at 090212 16804 or message us on WhatsApp.'
  },
  {
    question: 'Can a student attend demo trial classes before taking admission?',
    answer: 'Absolutely! We offer a 2-Day Free Demo Class Pass for all new students to experience our teaching methodology, interact with faculties, and review our study material before enrolling.'
  }
];

export const SAMPLE_STUDENT_TRACKER = {
  studentName: 'Rohan Deshpande',
  batch: '12th Science (PCM + CET Target)',
  enrollmentId: 'IITF-2026-884',
  attendance: '96.5%',
  testsTaken: 18,
  averageScore: '89.4%',
  recentTests: [
    { subject: 'Mathematics (Calculus & Integration)', score: 94, maxScore: 100, date: '24 Aug 2026', remarks: 'Flawless in definite integrals. Excellent step marking.' },
    { subject: 'Physics (Electromagnetism & AC)', score: 88, maxScore: 100, date: '17 Aug 2026', remarks: 'Good derivation recall; improve circuit numerical speed.' },
    { subject: 'Chemistry (Organic Reaction Mechanisms)', score: 92, maxScore: 100, date: '10 Aug 2026', remarks: 'Great command over Aldehydes & Ketones conversions.' },
    { subject: 'Full MHT-CET PCM Mock Test #4', score: 172, maxScore: 200, date: '03 Aug 2026', remarks: 'Rank 2 in batch. High percentile projection.' }
  ],
  subjectMastery: [
    { name: 'Mathematics', mastery: 93, color: 'emerald' },
    { name: 'Physics', mastery: 86, color: 'blue' },
    { name: 'Chemistry', mastery: 91, color: 'amber' }
  ]
};
