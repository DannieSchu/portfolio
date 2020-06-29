import apiClient from '../assets/projects/api-client/api-client.png';
import socialDistancePing from '../assets/projects/social-distance-ping/social-distance-ping.jpeg';
import { alcherithmImages } from './projects/alcherithm';
import { artistFinderImages } from './projects/artistFinder';
import { sewOrganizedImages, sewOrganizedContributors } from './projects/sewOrganized';
import { ripeBananaImages } from './projects/ripeBanana';
import { crossPondNewsroomImages } from './projects/crossPondNewsroom';

export const projectsArr = [
  {
    title: 'Alcherithm',
    stack: ['React', 'Node', 'Express', 'Jest', 'MongoDB', 'Mongoose'],
    year: 2020,
    description: 'A learning platform that helps budding developers navigate code challenges.',
    githubFE: 'https://github.com/DannieSchu/alcherithm-fe',
    githubBE: 'https://github.com/Alcherithm/alcherithm-be',
    website: 'https://alcherithm.netlify.app/',
    images: alcherithmImages
  },
  {
    title: 'Sew Organized',
    stack: ['React', 'Node', 'Express', 'Jest', 'PostgreSQL'],
    year: 2020,
    description: 'A personal catalogue of a user\'s embroidery thread stash that uses matching algorithms to compare DMC color numbers to HEX codes.',
    overview: 'A personal catalogue of a user\'s embroidery thread stash that uses matching algorithms to compare DMC color numbers to HEX codes.',
    process: 'A personal catalogue of a user\'s embroidery thread stash that uses matching algorithms to compare DMC color numbers to HEX codes.',
    githubFE: 'https://github.com/Sew-Organized/sew-organized-react',
    githubBE: 'https://github.com/Sew-Organized/sew-organized-server',    
    website: 'https://sew-organized.herokuapp.com/',
    contributors: sewOrganizedContributors,
    images: sewOrganizedImages
  },
  {
    title: 'Social Distance Ping',
    stack: ['MongoDB', 'Mongoose', 'Node', 'Express', 'Jest', 'Twilio', 'Puppeteer'],
    year: 2020,
    description: 'Up-to-date COVID-19 stats scraped from a dynamic website and sent to your phone on-demand or in a daily digest text.',
    githubFE: null,
    githubBE: 'https://github.com/Alchemy-Covid-19/covid-19-statbot',
    website: null,
    images: [socialDistancePing]
  },
  {
    title: 'API Client',
    stack: ['React', 'Redux', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'Postman clone for your browser built three times with different state management methods.',
    githubFE: 'link',
    githubBE: null,
    website: null,
    images: [apiClient]
  },
  {
    title: 'Ripe Banana',
    stack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest'],
    year: 2020,
    description: 'A RESTful API that navigates complex document relationships to return films, movie studios, actors, reviews and reviewers.',
    githubFE: null,
    githubBE: 'https://github.com/DannieSchu/ripe-banana',
    website: null,
    images: ripeBananaImages
  },
  {
    title: 'Artist Finder',
    stack: ['React', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'A RESTful API that returns films, movie studios, actors, reviews and reviewers. Targets the moviegoer with a penchant for animal-inspired films.',
    githubFE: 'https://github.com/DannieSchu/artist-finder',
    githubBE: null,
    website: null,
    images: artistFinderImages
  },
  {
    title: 'Cross-Pond Newsroom',
    stack: ['React', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'Toggle between two different views to render news headlines from your country of choice — UK or US — in corresponding color schemes.',
    githubFE: 'https://github.com/DannieSchu/themeable-list',
    githubBE: null,
    website: null,
    images: crossPondNewsroomImages
  }
];
