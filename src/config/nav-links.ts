export const navLinksConfig = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Dashboard',
    subLinks: [
      {
        title: 'User Dashboard',
        href: '/dashboard',
        description: 'Access your personalized dashboard with relevant information and features.',
        role: ['ALL'],
      },
      {
        title: 'Reporting and Analytics',
        href: '/analytics',
        description: 'Get a high-level overview of your most important metrics.',
        role: ['ALL'],
      },
      {
        title: 'Calendar',
        href: '/calendar',
        description: 'Schedule meetings and view your task list.',
        role: ['ALL'],
      },
      {
        title: 'Communication and Support',
        href: '/support',
        description: 'Reach out to our team and get your questions answered.',
        role: ['ALL'],
      },
      {
        title: 'Usability and User Satisfaction',
        href: '/feedback',
        description: 'Send us feedback on your experience using our services.',
        role: ['ALL'],
      },
    ],
  },
  {
    title: 'Program',
    subLinks: [
      {
        title: 'Program management',
        href: '/program',
        description: 'Manage program activities and schedules for sponsored children and create sub-programs',
        role: ['SRFO', 'PFO'],
      },
      {
        title: 'Sub-program management',
        href: '/subprogram',
        description: 'Create and manage activities, resources, and attendance for each sub-program.',
        role: ['SRFO', 'PFO'],
      },
    ],
  },
  {
    title: 'Child Management',
    href: '/child',
    description: '',
    role: ['SRFO', 'PFO'],
  },
  {
    title: 'Evaluation Management',
    href: '/evaluation',
    description: '',
    role: ['SRFO', 'PFO'],
  },
  {
    title: 'Sponsor Reporting',
    href: '/reporting',
    description: '',
    role: ['SPONSOR'],
  },
]
