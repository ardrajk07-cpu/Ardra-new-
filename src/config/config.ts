// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Ardra Jyothikumar',
    title: 'Economics with Data Science Undergraduate',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
    'I am an undergraduate student pursuing Economics with Data Science at Christ University, Bangalore. ' +
      'My interests lie at the intersection of economic theory, data analysis, and real-world problem solving. ' +
      'Through internships, academic projects, and volunteering, I enjoy using data to understand markets, ' +
      'evaluate policies, and build more inclusive economic systems.',
    tagline: 'Exploring Economics through Data Science',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Ardra Jyothikumar – Economics with Data Science',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText:['Economics Student',
'Data Science Enthusiast',
'Finance Learner',
'Aspiring analyst'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'Christ University',
      degree: 'Economics with Data Science Undergarduate',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Relevant coursework: Statistics, Microeconomics, Macroeconomics, Advanced Excel, Programming Fundamentals',
        'GPA: 3.56 (Semester 1)',
      ],              
    },
    {
      institution: 'GEMS Our Own English High School, Dubai',
      degree: 'High School Diploma',
      year: '2023-2025',
      image: getAsset('images/education/placeholder.png'),
      description: [ 'Score: 90.3%',
        'Subjects: Economics, Accountancy, Business Studies, Mathematics, English',
      ],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Fundamentals of Digital Marketing',
      specialization: false,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Business Course – University of Wollongong Dubai',
      specialization: false,
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Data Analyst',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'FLEKT by KIRIX (Remote)',
      time: '(Dec 2025 – Present)',
      desp: ['Cleaned and transformed raw datasets into structured formats for analysis',
        'Performed end-to-end data analysis to identify gaps and propose solutions',
        'Developed dashboards and visualisations to communicate insights',],
    },
    {
      title: 'Marketing & Research Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'iX Launchpad',
      time: '2022',
      desp: ['Conducted SWOT analysis of businesses',
        'Assisted with digital marketing research and social media analytics',
         ],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'ardrajk07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ardra-jyothikumar-210747306/',
    github: 'https://github.com/ardrajk07-cpu',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
