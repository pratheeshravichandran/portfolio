import { Monitor, Server, Code, Briefcase } from 'lucide-react';

export const skills = [
  {
    name: 'Frontend Development',
    icon: Monitor,
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML & CSS', level: 92 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    items: [
      { name: 'PHP', level: 88 },
      { name: 'Laravel', level: 88 },
      { name: 'CodeIgniter', level: 85 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    name: 'Development Tools',
    icon: Code,
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Linux', level: 50 },
      { name: 'AWS', level: 35 },
      { name: 'CI/CD', level: 52 },
    ],
  },
  {
    name: 'Office & Design',
    icon: Briefcase,
    items: [
      { name: 'Excel', level: 80 },
      { name: 'PowerPoint', level: 80 },
      { name: 'Word', level: 85 },
      { name: 'Adobe Photoshop', level: 82 },
    ],
  },
];