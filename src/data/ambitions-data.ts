export interface Ambition {
  ambition: string;
  books: string[];
  courses: string[];
  universities: string[];
  certifications: string[];
  subjects: string[];
  exams: string[];
}

export const ambitionsData: Ambition[] = [
  {
    ambition: "Machine Learning Engineer",
    books: [
      "Deep Learning by Ian Goodfellow (https://www.deeplearningbook.org/)",
      "Hands-On Machine Learning with Scikit-Learn by Aurélien Géron",
      "Pattern Recognition and Machine Learning by Christopher Bishop",
      "The Hundred-Page Machine Learning Book by Andriy Burkov",
      "Python Machine Learning by Sebastian Raschka",
      "Artificial Intelligence: A Modern Approach by Stuart Russell"
    ],
    courses: [
      "Machine Learning by Andrew Ng (Coursera) - https://www.coursera.org/learn/machine-learning",
      "Deep Learning Specialization (Coursera) - https://www.coursera.org/specializations/deep-learning",
      "Machine Learning Engineer Nanodegree (Udacity)",
      "Applied AI with DeepLearning (edX)"
    ],
    universities: [
      "Technical University of Munich (TUM) - M.Sc. in Data Engineering and Analytics",
      "ETH Zurich - M.Sc. in Data Science",
      "KTH Royal Institute of Technology - M.Sc. in Machine Learning"
    ],
    certifications: [
      "TensorFlow Developer Certificate",
      "AWS Machine Learning Specialty",
      "Google Professional Machine Learning Engineer",
      "Azure AI Engineer Associate"
    ],
    subjects: [
      "Advanced Mathematics and Statistics",
      "Machine Learning Algorithms",
      "Deep Learning and Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "Big Data Processing"
    ],
    exams: [
      "AWS Certified Machine Learning - Specialty",
      "Google Cloud Professional Machine Learning Engineer",
      "Azure AI Engineer Associate (AI-102)",
      "TensorFlow Developer Certificate",
      "Deep Learning Specialization Certificate",
      "IBM AI Engineering Professional Certificate"
    ]
  },
  {
    ambition: "Data Scientist",
    books: [
      "Python for Data Analysis by Wes McKinney",
      "Storytelling with Data by Cole Nussbaumer Knaflic",
      "Data Science for Business by Foster Provost",
      "Introduction to Statistical Learning by Gareth James",
      "Data Science from Scratch by Joel Grus",
      "Practical Statistics for Data Scientists by Peter Bruce"
    ],
    courses: [
      "IBM Data Science Professional Certificate (Coursera)",
      "Data Science Specialization by Johns Hopkins (Coursera)",
      "Applied Data Science with Python (Michigan University)",
      "DataCamp Data Scientist Career Track"
    ],
    universities: [
      "TU Munich - M.Sc. in Data Engineering and Analytics",
      "KU Leuven - M.Sc. in Statistics and Data Science",
      "University of Amsterdam - M.Sc. in Data Science"
    ],
    certifications: [
      "IBM Data Science Professional Certificate",
      "Microsoft Certified: Azure Data Scientist Associate",
      "Google Data Analytics Professional Certificate",
      "SAS Certified Data Scientist"
    ],
    subjects: [
      "Statistics and Probability",
      "Linear Algebra and Calculus",
      "Data Mining and Warehousing",
      "Predictive Analytics",
      "Data Visualization",
      "Programming (Python/R)"
    ],
    exams: [
      "IBM Data Science Professional Certificate",
      "Google Data Analytics Professional Certificate",
      "Microsoft Azure Data Scientist Associate (DP-100)",
      "SAS Certified Data Scientist",
      "Cloudera Certified Associate Data Analyst",
      "DataCamp Data Scientist Professional Certification"
    ]
  },
  {
    ambition: "Full Stack Developer",
    books: [
      "Clean Code by Robert C. Martin",
      "You Don't Know JS by Kyle Simpson",
      "Design Patterns by Gang of Four",
      "The Pragmatic Programmer by Andy Hunt",
      "Node.js Design Patterns by Mario Casciaro",
      "Full Stack Development with Spring Boot and React by Juha Hinkula"
    ],
    courses: [
      "The Web Developer Bootcamp (Udemy)",
      "Full Stack Open (University of Helsinki)",
      "CS50's Web Programming with Python and JavaScript (Harvard)",
      "Full Stack Development Nanodegree (Udacity)"
    ],
    universities: [
      "TU Berlin - M.Sc. in Computer Science",
      "Technical University of Denmark - M.Sc. in Software Engineering",
      "Delft University of Technology - M.Sc. in Computer Science"
    ],
    certifications: [
      "AWS Certified Developer - Associate",
      "MongoDB Certified Developer",
      "Oracle Certified Professional, Java SE Developer",
      "Microsoft Certified: Azure Developer Associate"
    ],
    subjects: [
      "Frontend Development (HTML, CSS, JavaScript)",
      "Backend Programming",
      "Database Management Systems",
      "API Design and Development",
      "Web Security and Authentication",
      "Cloud Computing and DevOps"
    ],
    exams: [
      "AWS Certified Developer - Associate",
      "Microsoft Certified: Azure Developer Associate",
      "Oracle Certified Professional, Java SE Developer",
      "MongoDB Professional Certification",
      "Certified Kubernetes Application Developer (CKAD)",
      "Full Stack JavaScript Certificate (freeCodeCamp)"
    ]
  },
  {
    ambition: "Mechanical Engineer",
    books: [
      "Shigley's Mechanical Engineering Design by Richard Budynas",
      "Fundamentals of Heat and Mass Transfer by Theodore L. Bergman",
      "Engineering Mechanics: Dynamics by James L. Meriam",
      "Manufacturing Engineering and Technology by Serope Kalpakjian",
      "Introduction to Fluid Mechanics by William S. Janna",
      "Materials Science and Engineering by William D. Callister"
    ],
    courses: [
      "Mechanical Engineering: Crash Course (Coursera)",
      "CAD and Digital Manufacturing Specialization (Coursera)",
      "Mechanics of Materials (edX - TU Delft)",
      "Robotics Specialization (Coursera - UPenn)"
    ],
    universities: [
      "TU Munich - M.Sc. in Mechanical Engineering",
      "KTH Royal Institute of Technology - M.Sc. in Engineering Mechanics",
      "TU Delft - M.Sc. in Mechanical Engineering"
    ],
    certifications: [
      "Certified SolidWorks Professional (CSWP)",
      "AutoCAD Professional Certification",
      "ASME Professional Engineering Certification",
      "Six Sigma Green Belt"
    ],
    subjects: [
      "Engineering Mathematics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Strength of Materials",
      "Machine Design",
      "Manufacturing Processes"
    ],
    exams: [
      "Fundamentals of Engineering (FE)",
      "Professional Engineering (PE) Mechanical",
      "GATE Mechanical Engineering",
      "GRE Subject Test in Engineering",
      "ASME Certification Exams",
      "Six Sigma Certification Exams"
    ]
  },
  {
    ambition: "Electrical Engineer",
    books: [
      "Fundamentals of Electric Circuits by Charles Alexander",
      "Power Electronics by Daniel Hart",
      "Electric Machinery Fundamentals by Stephen Chapman",
      "Microelectronic Circuits by Adel S. Sedra",
      "Digital Design by Morris Mano",
      "Control Systems Engineering by Norman S. Nise"
    ],
    courses: [
      "Electrical Engineering: Circuit Theory (MIT OpenCourseWare)",
      "Power Electronics Specialization (Coursera - University of Colorado)",
      "Digital Signal Processing (edX - EPFL)",
      "Control of Mobile Robots (Coursera - Georgia Tech)"
    ],
    universities: [
      "ETH Zurich - M.Sc. in Electrical Engineering",
      "Technical University of Denmark - M.Sc. in Electrical Engineering",
      "RWTH Aachen - M.Sc. in Electrical Engineering"
    ],
    certifications: [
      "Professional Engineer (PE) License",
      "Certified Electrical Safety Worker (CESW)",
      "IEEE Power Electronics Certification",
      "NABCEP Certification"
    ],
    subjects: [
      "Circuit Theory",
      "Electromagnetic Fields",
      "Power Systems",
      "Control Systems",
      "Digital Electronics",
      "Microprocessors and Microcontrollers"
    ],
    exams: [
      "Fundamentals of Engineering (FE) Electrical",
      "Professional Engineering (PE) Electrical",
      "GATE Electrical Engineering",
      "GRE Subject Test in Engineering",
      "IEEE Certification Exams",
      "CompTIA A+ Certification"
    ]
  },
  {
    ambition: "Civil Engineer",
    books: [
      "Structural Analysis by Russell C. Hibbeler",
      "Reinforced Concrete Design by Chu-Kia Wang",
      "Geotechnical Engineering by Donald P. Coduto",
      "Transportation Engineering by C. Jotin Khisty",
      "Environmental Engineering by Howard S. Peavy",
      "Construction Project Management by S. Keoki Sears"
    ],
    courses: [
      "Structural Engineering: Art and Practice (edX - MIT)",
      "Construction Project Management (Coursera)",
      "BIM (Building Information Modeling) Specialization (Coursera)",
      "Environmental Engineering Fundamentals (edX)"
    ],
    universities: [
      "TU Delft - M.Sc. in Civil Engineering",
      "Technical University of Munich - M.Sc. in Civil Engineering",
      "KTH Royal Institute of Technology - M.Sc. in Civil and Architectural Engineering"
    ],
    certifications: [
      "Professional Engineer (PE) License",
      "LEED Green Associate",
      "PMP (Project Management Professional)",
      "AutoCAD Civil 3D Certification"
    ],
    subjects: [
      "Structural Engineering",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Environmental Engineering",
      "Construction Management",
      "Hydraulics and Water Resources"
    ],
    exams: [
      "Fundamentals of Engineering (FE) Civil",
      "Professional Engineering (PE) Civil",
      "GATE Civil Engineering",
      "GRE Subject Test in Engineering",
      "LEED Green Associate Exam",
      "PMP Certification Exam"
    ]
  },
  {
    ambition: "Chemical Engineer",
    books: [
      "Perry's Chemical Engineers' Handbook",
      "Unit Operations of Chemical Engineering by McCabe",
      "Chemical Process Safety by Daniel A. Crowl",
      "Transport Phenomena by Bird, Stewart, and Lightfoot",
      "Chemical Reaction Engineering by Octave Levenspiel",
      "Process Dynamics and Control by Seborg"
    ],
    courses: [
      "Chemical Engineering: Process Control (Coursera)",
      "Industrial Biotechnology (edX - TU Delft)",
      "Process Intensification in Chemical Engineering (Coursera)",
      "Chemical Engineering Thermodynamics (edX)"
    ],
    universities: [
      "TU Eindhoven - M.Sc. in Chemical Engineering",
      "RWTH Aachen - M.Sc. in Chemical Engineering",
      "Technical University of Denmark - M.Sc. in Chemical Engineering"
    ],
    certifications: [
      "Professional Engineer (PE) License",
      "Certified Process Safety Professional",
      "Six Sigma Black Belt",
      "Certified Quality Engineer (CQE)"
    ],
    subjects: [
      "Chemical Process Principles",
      "Transport Phenomena",
      "Chemical Reaction Engineering",
      "Process Control",
      "Thermodynamics",
      "Separation Processes"
    ],
    exams: [
      "Fundamentals of Engineering (FE) Chemical",
      "Professional Engineering (PE) Chemical",
      "GATE Chemical Engineering",
      "GRE Subject Test in Chemistry",
      "AIChE Certification Exams",
      "Process Safety Professional Certification"
    ]
  },
  {
    ambition: "Industrial Designer",
    books: [
      "The Design of Everyday Things by Don Norman",
      "Manufacturing Processes for Design Professionals by Rob Thompson",
      "Sketching: Drawing Techniques for Product Designers by Koos Eissen",
      "Product Design and Development by Karl Ulrich",
      "Change by Design by Tim Brown",
      "Universal Principles of Design by William Lidwell"
    ],
    courses: [
      "Industrial Design Essentials (Coursera)",
      "3D CAD Fundamental (LinkedIn Learning)",
      "Design Thinking Specialization (Coursera - UVA)",
      "Product Design: The Delft Design Approach (edX)"
    ],
    universities: [
      "TU Delft - M.Sc. in Industrial Design Engineering",
      "Royal College of Art - MA Design Products",
      "Eindhoven University of Technology - M.Sc. in Industrial Design"
    ],
    certifications: [
      "Certified Professional Industrial Designer (CPID)",
      "Autodesk Certified Professional",
      "Rhinoceros 3D Certification",
      "Adobe Certified Expert"
    ],
    subjects: [
      "Design Theory and Methodology",
      "3D Modeling and CAD",
      "Materials and Manufacturing Processes",
      "Human Factors and Ergonomics",
      "Design Visualization and Rendering",
      "Prototyping and Model Making"
    ],
    exams: [
      "Certified Professional Industrial Designer (CPID)",
      "Autodesk Certified Professional: Industrial Design",
      "Solidworks Professional Certification (CSWP)",
      "Adobe Certified Expert (ACE)",
      "Rhino Level 2 Certification",
      "IDSA Design Foundation Certificate"
    ]
  }
]; 