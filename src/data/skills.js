import { Monitor, Server, Code, Rocket, Database, Layers } from 'lucide-react';

export const skills = [
  {
    name: 'Backend & Systems',
    icon: Server,
    items: [
      { name: 'Node.js & Express', level: 95 },
      { name: 'BullMQ & Redis Queues', level: 90 },
      { name: 'REST APIs & Webhooks', level: 95 },
      { name: 'WebSockets (Real-time)', level: 88 },
    ],
  },
  {
    name: 'Logistics & Geospatial',
    icon: Rocket,
    items: [
      { name: 'OSRM Routing Engines', level: 90 },
      { name: 'Uber H3 Geospatial Indexing', level: 88 },
      { name: 'Multi-Carrier APIs (Shiprocket/Porter)', level: 92 },
      { name: 'ONDC & Rail Parcel Integrations', level: 85 },
    ],
  },
  {
    name: 'Frontend Development',
    icon: Monitor,
    items: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Real-time Dashboards', level: 88 },
    ],
  },
  {
    name: 'Database & DevOps',
    icon: Code,
    items: [
      { name: 'MySQL & Query Optimization', level: 90 },
      { name: 'Docker Containerization', level: 85 },
      { name: 'CI/CD Pipelines & Linux', level: 82 },
      { name: 'Git & NPM Publishing', level: 88 },
    ],
  },
];
