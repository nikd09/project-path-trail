export function getCareerSummary(ambition: string): string {
  const summaries: { [key: string]: string } = {
    "Mechanical Engineer": `Mechanical Engineers are innovative problem-solvers who design, manufacture, and maintain mechanical systems that power our world. This dynamic field combines principles of physics, mathematics, and materials science to create everything from medical devices to spacecraft. As a Mechanical Engineer, you'll be at the forefront of technological advancement, working on projects that range from renewable energy systems to robotics.`,
    
    "Electrical Engineer": `Electrical Engineers are the architects of our electronic world, designing and developing electrical systems that power modern life. From microchips to power grids, they work at the intersection of electricity, electronics, and electromagnetic systems. This field offers diverse opportunities in sectors like renewable energy, telecommunications, and artificial intelligence, making it crucial for technological advancement.`,
    
    "Civil Engineer": `Civil Engineers are the masterminds behind our built environment, creating the infrastructure that shapes modern civilization. They design, construct, and maintain essential structures like bridges, buildings, and transportation systems. This profession combines technical expertise with creative problem-solving to address challenges in urbanization, sustainability, and environmental protection.`,
    
    "Chemical Engineer": `Chemical Engineers are innovators who transform raw materials into valuable products that society needs. They design and optimize processes in industries ranging from pharmaceuticals to renewable energy. This field combines chemistry, physics, and engineering principles to solve complex problems in manufacturing, environmental protection, and sustainable development.`,

    "Industrial Designer": `Industrial Designers blend creativity with technical expertise to create products that enhance people's lives. They focus on the intersection of aesthetics, functionality, and user experience. This field requires a unique combination of artistic vision, engineering knowledge, and understanding of human behavior to develop innovative solutions for everyday challenges.`
  };
  return summaries[ambition] || `A comprehensive guide to becoming a successful ${ambition}. This roadmap covers everything from essential books and courses to certifications and key requirements.`;
}

export function getSalaryRange(ambition: string): string {
  const salaries: { [key: string]: string } = {
    "Mechanical Engineer": "$65,000 - $120,000+ annually (Entry Level to Senior)",
    "Electrical Engineer": "$70,000 - $130,000+ annually (Entry Level to Senior)",
    "Civil Engineer": "$60,000 - $115,000+ annually (Entry Level to Senior)",
    "Chemical Engineer": "$70,000 - $125,000+ annually (Entry Level to Senior)",
    "Industrial Designer": "$55,000 - $110,000+ annually (Entry Level to Senior)"
  };
  return salaries[ambition] || `$60,000 - $120,000+ annually (varies by experience and location)`;
}

export function getJobGrowth(ambition: string): string {
  const growth: { [key: string]: string } = {
    "Mechanical Engineer": "7% growth expected over the next decade with increasing focus on automation and renewable energy systems.",
    "Electrical Engineer": "9% growth projected, driven by technological advancement and green energy initiatives.",
    "Civil Engineer": "8% growth anticipated due to infrastructure development and sustainable construction projects.",
    "Chemical Engineer": "9% growth expected, driven by innovation in materials and sustainable processes.",
    "Industrial Designer": "6% growth projected, with emphasis on user experience and sustainable design."
  };
  return growth[ambition] || "Positive growth expected over the next decade with evolving industry demands.";
}

export function getKeySkills(ambition: string): string[] {
  const skills: { [key: string]: string[] } = {
    "Mechanical Engineer": [
      "3D CAD Software Proficiency",
      "Thermal and Mechanical Analysis",
      "Project Management",
      "Problem-Solving",
      "Technical Documentation"
    ],
    "Electrical Engineer": [
      "Circuit Design",
      "Programming (C++, Python)",
      "PCB Design",
      "Signal Processing",
      "Power Systems Analysis"
    ],
    "Civil Engineer": [
      "Structural Analysis",
      "AutoCAD & BIM Software",
      "Project Management",
      "Environmental Regulations",
      "Construction Methods"
    ],
    "Chemical Engineer": [
      "Process Design",
      "Thermodynamics",
      "Reaction Engineering",
      "Process Control",
      "Safety Protocols"
    ],
    "Industrial Designer": [
      "3D Modeling",
      "Sketching",
      "User Research",
      "Prototyping",
      "Material Science"
    ]
  };
  return skills[ambition] || [
    "Technical Expertise",
    "Problem Solving",
    "Project Management",
    "Communication",
    "Industry Knowledge"
  ];
}

export function getCareerPath(ambition: string): Array<{title: string, description: string}> {
  const defaultPath = [
    {
      title: "Entry Level",
      description: "Begin your career with foundational responsibilities and learning opportunities."
    },
    {
      title: "Mid-Level Professional",
      description: "Take on more complex projects and start leading small teams."
    },
    {
      title: "Senior Professional",
      description: "Lead major projects and mentor junior team members."
    },
    {
      title: "Expert/Lead",
      description: "Direct strategic initiatives and shape the future of your field."
    }
  ];

  const paths: { [key: string]: Array<{title: string, description: string}> } = {
    "Mechanical Engineer": [
      {
        title: "Junior Mechanical Engineer",
        description: "Start with design assistance and project support under supervision."
      },
      {
        title: "Project Engineer",
        description: "Lead small to medium projects and mentor junior engineers."
      },
      {
        title: "Senior Engineer",
        description: "Manage complex projects and make key technical decisions."
      },
      {
        title: "Principal Engineer",
        description: "Direct technical strategy and lead innovation initiatives."
      }
    ],
    // Add specific paths for other careers here
  };
  return paths[ambition] || defaultPath;
} 