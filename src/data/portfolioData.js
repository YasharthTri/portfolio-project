/**
 * SHASHWAT JOSHI - PORTFOLIO DATA CONFIGURATION
 * 
 * Verified against official resume, educational records, 
 * internship experience, and certified credentials.
 * 
 * TO ADD A NEW CERTIFICATE:
 * 1. Place your PDF or image file into: /public/certificates/
 * 2. Add a new object to the `certificationsData` array below:
 *    {
 *      id: "cert-new",
 *      title: "Your Certificate Title",
 *      issuer: "Issuing Organization",
 *      issueDate: "Month Day, Year",
 *      type: "pdf", // use "pdf" for PDF files or "image" for JPG/PNG files
 *      fileUrl: "/certificates/your-filename.pdf",
 *      credentialId: "Your Credential ID / Code",
 *      skillsCovered: ["Skill 1", "Skill 2"],
 *      description: "Brief summary of the certification."
 *    }
 */

export const personalInfo = {
  name: "Shashwat Joshi",
  title: "MBA Candidate | Business Administration & Marketing Analytics",
  tagline: "Currently pursuing Master of Business Administration (MBA) at Invertis University. Experienced in banking operations and inventory management at India Post Payments Bank, with certified competencies in Power BI, Marketing Analytics, Project Management, Digital Marketing, and Generative AI.",
  about: `I am an ambitious Master of Business Administration (MBA) candidate at Invertis University with a foundational background in Arts (B.A. from MJPRU). My practical experience spans operations and client documentation at India Post Payments Bank, where I coordinated cross-functional activities, conducted onsite inspections, and managed device inventories.

I combine analytical capabilities—certified in Power BI, Marketing Analytics, and Generative AI Studio—with practical organizational leadership. Having led student cohorts in live case studies and strategic vision planning, I am focused on delivering data-informed business strategies, effective project execution, and operational excellence.`,
  email: "shashwatjoshi2003@gmail.com",
  phone: "+91 9027557371",
  location: "Bareilly, Uttar Pradesh, India",
  availability: "Available for MBA Internships & Executive Roles",
  profileImage: "/images/profile-placeholder.svg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/shashwat-joshi-39aba4380",
    email: "mailto:shashwatjoshi2003@gmail.com",
    phone: "tel:+919027557371"
  }
};

export const skillsData = [
  {
    category: "Business Analytics & Digital Tools",
    skills: [
      { name: "Power BI (Microsoft)", level: "Certified" },
      { name: "Marketing Analytics", level: "Certified" },
      { name: "Generative AI Studio (Google Cloud)", level: "Certified" },
      { name: "Digital Marketing", level: "Certified" },
      { name: "Data Presentation & Reporting", level: "Advanced" }
    ]
  },
  {
    category: "Project & Operations Management",
    skills: [
      { name: "Project Management", level: "Certified" },
      { name: "Inventory Management", level: "Experienced" },
      { name: "Onsite Surveys & Inspection", level: "Experienced" },
      { name: "Process & Documentation Coordination", level: "Experienced" },
      { name: "Task Prioritization & Punctuality", level: "Advanced" }
    ]
  },
  {
    category: "Leadership & Interpersonal Strengths",
    skills: [
      { name: "Team Leadership & Mentoring", level: "Advanced" },
      { name: "Interpersonal Collaboration", level: "Advanced" },
      { name: "Conflict Resolution", level: "Proficient" },
      { name: "Emotional Intelligence", level: "Proficient" },
      { name: "Verbal & Written Communication", level: "Advanced" },
      { name: "Adaptability in Fast-Paced Environments", level: "Advanced" }
    ]
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Intern / Operations Support",
    organization: "India Post Payments Bank (IPPB)",
    location: "Bareilly, Uttar Pradesh",
    duration: "Jun 2026 – Aug 2026",
    type: "Internship / Practical Experience",
    responsibilities: [
      "Facilitated customer coordination and supported banking operations teams to ensure seamless completion of official documentation.",
      "Managed inventory records of banking devices, hardware terminals, and critical administrative records.",
      "Conducted onsite customer surveys and field inspections as required to assess service delivery.",
      "Honed practical competencies in team coordination, client communication, and structured reporting under institutional standards."
    ]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Vision Board – Future in Frame",
    subtitle: "MBA Strategic Self-Development & Career Framework",
    organization: "Master of Business Administration (MBA), Invertis University",
    description: "An active participation project designed for MBA students to systematically align academic learning, personal leadership milestones, and long-term career planning with professional executive presentation.",
    highlights: [
      "Structured comprehensive personal career planning mapping academic MBA coursework to industry opportunities",
      "Created milestone timelines integrating skill development in analytics, project management, and leadership",
      "Delivered formal presentations synthesizing business concepts into clear career objectives"
    ],
    tags: ["Career Planning", "Strategic Alignment", "Executive Presentation", "Self-Development"]
  },
  {
    id: "proj-2",
    title: "Student Team Case Study & Live Project Leadership",
    subtitle: "Invertis University Management Curriculum",
    organization: "Academic Live Projects",
    description: "Led an academic cohort of 4–5 students in evaluating management case studies, delegating operational responsibilities, and ensuring high-quality analytical outputs delivered within tight deadlines.",
    highlights: [
      "Supervised delegation, timeline management, and quality control across a 4-5 member peer group",
      "Facilitated team conflict resolution and fostered collaborative decision-making",
      "Synthesized core management theories into actionable findings and structured presentations"
    ],
    tags: ["Team Leadership", "Case Analysis", "Conflict Resolution", "Project Coordination"]
  }
];

export const educationData = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Invertis University",
    location: "Bareilly, Uttar Pradesh",
    duration: "2025 – 2027",
    status: "Currently Pursuing",
    description: "Postgraduate degree focusing on core business administration, management principles, strategic decision making, and organizational leadership.",
    highlights: [
      "Active participant in 'Vision Board – Future in Frame' strategic initiative",
      "Cohort leader in student case studies and live management simulations",
      "Completed professional certifications in Marketing Analytics, Power BI, and Generative AI alongside degree coursework"
    ]
  },
  {
    degree: "Bachelor of Arts (B.A.)",
    institution: "Mahatma Jyotiba Phule Rohilkhand University (MJPRU)",
    location: "Bareilly, Uttar Pradesh",
    duration: "Graduated 2023",
    status: "Completed",
    grade: "Score: 68%",
    description: "Undergraduate degree providing foundational perspective in human sciences, analytical writing, critical evaluation, and structured inquiry.",
    highlights: [
      "Achieved a 68% cumulative score across undergraduate coursework",
      "Strengthened written and verbal communication, research, and interpersonal presentation"
    ]
  },
  {
    degree: "Senior Secondary School Examination (Class XII)",
    institution: "Madhavrao Scindia Public School",
    location: "Bareilly, Uttar Pradesh",
    duration: "Completed 2020",
    status: "Completed",
    grade: "Score: 62%",
    description: "Senior secondary educational qualification under CBSE/State curriculum."
  },
  {
    degree: "Higher Secondary Examination (Class X)",
    institution: "Springdale College",
    location: "Pilibhit, Uttar Pradesh",
    duration: "Completed 2018",
    status: "Completed",
    grade: "Score: 65%",
    description: "Secondary education foundational studies."
  }
];

/**
 * CERTIFICATIONS CONFIGURATION
 * 
 * Verified against official certificate PDFs and images.
 * All PDFs open in a new browser tab via View Certificate links.
 * All images render directly with full modal lightbox zoom.
 */
export const certificationsData = [
  {
    id: "cert-1",
    title: "Marketing Analytics Foundations",
    issuer: "LinkedIn Learning",
    issueDate: "September 07, 2026",
    type: "pdf",
    fileUrl: "/certificates/marketing-analytics-foundations-linkedin.pdf",
    credentialId: "368f0e91e7447759e836002234a9655770018990d453540a34171b52494e5bdd",
    skillsCovered: ["Marketing Analytics", "Data-Driven Decision Making", "Performance Metrics"],
    description: "Course completed by Shashwat Joshi under Shea Hanson (Head of Learning Content Strategy), verifying foundational proficiency in marketing analytics."
  },
  {
    id: "cert-2",
    title: "Power BI for Beginners",
    issuer: "Microsoft | Simplilearn SkillUp",
    issueDate: "September 12, 2026",
    type: "pdf",
    fileUrl: "/certificates/power-bi-for-beginners-simplilearn-microsoft.pdf",
    credentialId: "Certificate Code: 10724511",
    skillsCovered: ["Microsoft Power BI", "Business Intelligence", "Dashboard Creation", "Data Visualization"],
    description: "Official declaration of completion recognizing initiative and mastery of beginner business intelligence concepts in Microsoft Power BI."
  },
  {
    id: "cert-3",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud | Simplilearn SkillUp",
    issueDate: "September 11, 2026",
    type: "pdf",
    fileUrl: "/certificates/introduction-to-generative-ai-studio-simplilearn-google.pdf",
    credentialId: "Certificate Code: 10722690",
    skillsCovered: ["Generative AI Studio", "Google Cloud", "AI Capabilities", "Prompt Engineering"],
    description: "Official declaration of completion awarded to Shashwat Joshi for successful completion of the Google Cloud Introduction to Generative AI Studio curriculum."
  },
  {
    id: "cert-4",
    title: "Digital Marketing",
    issuer: "Lernx",
    issueDate: "September 08, 2026",
    type: "image",
    fileUrl: "/certificates/digital-marketing-lernx.jpg",
    credentialId: "UID: 0fmbrq9ent6",
    skillsCovered: ["Digital Marketing", "Online Promotion", "Campaign Strategy", "Audience Engagement"],
    description: "Certificate of Completion awarded to Shashwat Joshi by Pushkar Poonia (Founder, Lernx) upon successful completion of the Digital Marketing curriculum."
  },
  {
    id: "cert-5",
    title: "Project Management",
    issuer: "Lernx",
    issueDate: "September 07, 2026",
    type: "image",
    fileUrl: "/certificates/project-management-lernx.jpg",
    credentialId: "UID: ygsm8sjb5wm",
    skillsCovered: ["Project Management", "Resource Planning", "Timeline Execution", "Team Collaboration"],
    description: "Certificate of Completion awarded to Shashwat Joshi by Pushkar Poonia (Founder, Lernx) for mastering structured project planning and execution frameworks."
  }
];

export const resumeData = {
  resumePath: "/documents/resume.pdf",
  fileName: "Shashwat_Joshi_Resume.pdf",
  lastUpdated: "September 2026",
  highlights: [
    "Currently pursuing MBA at Invertis University (2025–2027) with BA from MJPRU (68%)",
    "Hands-on banking operations, inventory management, and customer coordination at India Post Payments Bank",
    "Certified in Power BI (Microsoft/Simplilearn) and Marketing Analytics Foundations (LinkedIn Learning)",
    "Certified in Google Cloud Generative AI Studio (Simplilearn SkillUp)",
    "Certified in Project Management and Digital Marketing from Lernx",
    "Demonstrated team leadership, mentoring cohorts of 4–5 students in case study delivery"
  ]
};
