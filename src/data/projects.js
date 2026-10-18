export const projects = [
  {
    title: 'Green Drive Delivery',
    subtitle: 'End-to-End Multi-Modal Logistics & Delivery Platform',
    description: 'Developed a full-stack logistics and delivery platform similar to Swiggy, Zomato, and Porter using Node.js, React.js, and MySQL. Integrated Indian Railways Rail Parcel services and ONDC Seller APIs, implemented WebSocket-based real-time order management, and built scalable APIs for booking, tracking, driver allocation, and delivery operations. Managed the complete SDLC including system design, development, testing, deployment, and production support.',
    tech: ['Node.js', 'React.js', 'MySQL', 'WebSockets', 'ONDC', 'Indian Railways', 'Docker', 'REST APIs'],
    github: '#',
    live: 'https://greendrivedelivery.com/',
    category: 'Logistics / Full Stack',
    highlights: [
      'Architected end-to-end SDLC from system design and API engineering to production deployment and monitoring',
      'Integrated Indian Railways Rail Parcel services & ONDC Seller APIs for nationwide intercity & intracity logistics',
      'Engineered real-time WebSocket infrastructure for live order dispatching, driver allocation, and milestone tracking'
    ]
  },
  {
    title: 'Delivar',
    subtitle: 'Multi-Vendor Logistics & Parallel Routing Aggregator',
    description: 'Developed a multi-vendor logistics platform that integrates providers such as Shiprocket, Porter, Qwqer, Adloggs, GDD, and Shadowfax. Built scalable APIs to check serviceability across multiple partners in parallel, identify the most cost-effective delivery option, and automatically route orders to the selected provider for parcel and hyperlocal delivery services.',
    tech: ['Node.js', 'React.js', 'MySQL', 'Redis', 'BullMQ', 'OSRM Routing', 'H3 Geospatial', 'Shiprocket', 'Porter'],
    github: '#',
    live: 'https://delivar.in',
    category: 'Logistics / Aggregator',
    highlights: [
      'Built parallel query engines checking serviceability across 6+ carrier partners concurrently',
      'Implemented cost-optimization routing algorithm that automatically assigns orders to the cheapest and fastest provider',
      'Deployed OSRM routing engine and Uber H3 geospatial indexing for low-latency distance calculations and rider matching'
    ]
  },
  {
    title: 'Node Log Extractor',
    subtitle: 'Open-Source NPM Package for Node.js Application Debugging',
    description: 'Developed and published the node-log-extractor NPM package for extracting, filtering, and analysing application logs, simplifying log management and runtime debugging in high-throughput Node.js microservices.',
    tech: ['Node.js', 'NPM Package', 'JavaScript', 'CLI Tool', 'Log Parsing', 'Stream Processing'],
    github: 'https://github.com/pratheeshravichandran',
    live: 'https://www.npmjs.com/package/node-log-extractor',
    category: 'Open Source / NPM',
    highlights: [
      'Authored and published open-source utility package on npm registry for structured log extraction',
      'Provides high-performance filtering, pattern matching, and error isolation for production log streams'
    ]
  },
  {
    title: 'Assistive Toy – Smart India Hackathon 2024',
    subtitle: 'AI-Powered Communication Solution for Deaf and Mute',
    description: 'Led the development of a smart assistive toy that assists deaf and mute individuals in communication using real-time computer vision and gesture recognition. Selected as the 1st place winning solution in the prestigious national Smart India Hackathon 2024.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React.js', 'Arduino', 'OpenCV'],
    github: '#',
    live: '#',
    category: 'AI/ML & IoT',
    highlights: [
      'Winner of Smart India Hackathon 2024 (National Level Competition)',
      'Integrated real-time hand gesture detection with hardware sensors to translate gestures into spoken language and visual feedback'
    ]
  },
  {
    title: 'Node Localization using ML in WSNs',
    subtitle: 'Research Publication & Network Simulation Framework',
    description: 'Developed a hybrid network simulation and machine learning system using NS-3 and regression models like SVR, Random Forest, and CatBoost to predict node transmission ranges and optimize topology in Wireless Sensor Networks.',
    tech: ['Python', 'NS-3', 'CatBoost', 'Random Forest', 'SVR', 'C++'],
    github: 'https://github.com/pratheeshravichandran/Node-Localization-using-ML-in-Wireless-Sensor-Networks',
    live: '#',
    category: 'Research / ML',
    highlights: [
      'Conducted extensive network simulation in NS-3 paired with ensemble machine learning regressors',
      'Significantly reduced node localization error rates and published source code research repository'
    ]
  }
];
