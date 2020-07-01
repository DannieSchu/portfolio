import apiClient from '../assets/projects/api-client/api-client.png';
import { alcherithmImages, alcherithmContributors } from './projects/alcherithm';
import { artistFinderImages } from './projects/artistFinder';
import { sewOrganizedImages, sewOrganizedContributors } from './projects/sewOrganized';
import { ripeBananaImages } from './projects/ripeBanana';
import { crossPondNewsroomImages } from './projects/crossPondNewsroom';
import { socialDistancePingContributors, socialDistancePingImages } from './projects/socialDistancePing';

export const projectsArr = [
  {
    title: 'Alcherithm',
    stack: ['React', 'Node', 'Express', 'Jest', 'MongoDB', 'Mongoose'],
    year: 2020,
    description: 'A learning platform that helps budding developers navigate code challenges.',
    overview: 'Code challenges are among the most intimidating tasks for aspiring developers. This full-stack app displays pertinent text and video resources as a user attempts the code challenges. Tracking progress and rendering a playful GIF keep the user motivated. By viewing their previous solutions (and even those of other developers), the user\'s skills can expand even more.',
    process: 'To lay a solid foundation for the data our team would need to render, I wireframed a UI that would satisfy our end user and I fleshed out component diagrams. Then I designed the Mongoose models with complex relationships, and I reduced the logic burden on the front end by leveraging the Mongoose aggregation pipeline to munge data accessed via our Express routes. This preparation set the stage for an elegant React app; I leveraged these routes to build dual-purpose hooks, returning data from different routes that took the same shape. With so much business logic in the back end or in custom hooks, we were able to build presentation-focused components. After the project officially ended, I refactored extensively to make the app, handle errors and add a loading spinner; the front-end GitHub repo linked here is my forked version.',
    githubLinks: [
      {
        text: 'Back-End Repo',
        link: 'https://github.com/Alcherithm/alcherithm-be'
      },
      {
        text: 'Front-End Repo (fork)',
        link: 'https://github.com/DannieSchu/alcherithm-fe'
      }
    ],
    website: 'https://alcherithm.netlify.app/',
    contributors: alcherithmContributors,
    images: alcherithmImages
  },
  {
    title: 'Sew Organized',
    stack: ['React', 'Node', 'Express', 'Jest', 'PostgreSQL'],
    year: 2020,
    description: 'A personal catalogue of a user\'s embroidery thread stash that uses matching algorithms to compare DMC color numbers to HEX codes.',
    overview: 'The DMC numbering system for embroidery floss is notoriously nonsensical, leading crafters to lose track of what they own. This app not only provides a virtual inventory of a user\'s stash, it also generates and saves color schemes to inspire future projects.',
    process: 'This all-female team was extraordinarily collaborative, with most decision making and programming done in pairs or as a group. On the back end, I had a leading role in developing our Express routes and building our SQL database, where my advocacy for data normalization allowed for a cleaner front end. The contribution I am most proud of is pair-programming the JavaScript logic in our React app for generating, rendering and saving color palettes. This involved developing an algorithm to generate complementary colors from a random starting color and convert them from HEX to their nearest DMC color code.',
    githubLinks: [
      {
        text: 'Back-End Repo',
        link: 'https://github.com/Sew-Organized/sew-organized-server'
      },
      {
        text: 'Front-End Repo',
        link: 'https://github.com/Sew-Organized/sew-organized-react'
      }
    ],
    website: 'https://sew-organized.herokuapp.com/',
    contributors: sewOrganizedContributors,
    images: sewOrganizedImages
  },
  {
    title: 'Social Distance Ping',
    stack: ['MongoDB', 'Mongoose', 'Node', 'Express', 'Jest', 'Twilio', 'Puppeteer'],
    year: 2020,
    description: 'Up-to-date COVID-19 stats scraped from a dynamic website and sent to your phone on-demand or in a daily digest text.',
    overview: 'Americans hoping to stay apprised of the pandemic\'s progression are baraged with erronious data. This back-end app eliminates information overload by sending up-to-date, location-specific statistics from reliable sources to a user\'s phone on demand or daily at 5:00 pm.',
    process: 'An integral part of our app was scraping statistics from a reliable, comprehensive and frequently updated website. To wait for this data to render before capturing it, I implemented a headless browser Puppeteer. Then a teammate and I munged the scraped data to coincide with our Mongoose models, sent it to our MongoDB database, and instituted an hourly cron job to keep our data up-to-date. We then used Twilio to send the stats to users in the daily digest SMS. When our source website changed its shape (thereby halting our scraper\'s utility) two weeks later, my partner and I redirected our energy from other projects to quickly find a new source and adjust our scraper accordingly. Since this app was built in a mere five days, I saw plenty of room for improvement; I refactored code throughout the app to improve both readability and efficiency.',
    githubLinks: [
      {
        text: 'Back-End Repo',
        link: 'https://github.com/Alchemy-Covid-19/covid-19-statbot'
      }
    ],
    website: null,
    contributors: socialDistancePingContributors,
    images: socialDistancePingImages
  },
  {
    title: 'API Client',
    stack: ['React', 'Redux', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'Postman clone for your browser built three times with different state management methods.',
    overview: 'This API server client application allows users to send HTTP requests to RESTful APIs and view the responses. When a user selects a requests from their history section, the form autofills with the previous request parameters.',
    process: 'This application was built three times with different state management approaches: building custom hooks into a container/component model to manage state locally; storing state globally using ContextAPI; and integrating Redux to manage global state with pure functions. I built each presentation component individually with snapshot tests and CSS, and I worked in vertical slices to add functionality, maintaining a functioning app as new features were added by adhering to agile methodologies.',
    githubLinks: [
      {
        text: 'Hooks Repo',
        link: 'https://github.com/DannieSchu/api-client'
      },
      {
        text: 'Context API Repo',
        link: 'https://github.com/DannieSchu/api-client-react-context'
      },
      {
        text: 'Redux Repo',
        link: 'https://github.com/DannieSchu/api-client-redux'
      }
    ],
    website: null,
    contributors: null,
    images: [apiClient]
  },
  {
    title: 'Ripe Banana',
    stack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest'],
    year: 2020,
    description: 'A RESTful API that navigates complex document relationships to return films, movie studios, actors, reviews and reviewers.',
    overview: '',
    process: '',
    githubLinks: [
      {
        text: 'Back-End Repo',
        link: 'https://github.com/DannieSchu/ripe-banana'
      }],
    website: null,
    contributors: null,
    images: ripeBananaImages
  },
  {
    title: 'Artist Finder',
    stack: ['React', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'A RESTful API that returns films, movie studios, actors, reviews and reviewers. Targets the moviegoer with a penchant for animal-inspired films.',
    overview: '',
    process: 'Navigate your favorite recording artist’s music portfolio in this fun SPA. Worked in vertical slices with TDD and atomic design. Leveraged higher order components and PostCSS to maximize component reusability.',
    githubLinks: [
      {
        text: 'Front-End Repo',
        link: 'https://github.com/DannieSchu/artist-finder'
      }
    ],
    website: null,
    contributors: null,
    images: artistFinderImages
  },
  {
    title: 'Cross-Pond Newsroom',
    stack: ['React', 'ContextAPI', 'Jest', 'Enzyme'],
    year: 2020,
    description: 'Toggle between two different views to render news headlines from your country of choice — UK or US — in corresponding color schemes.',
    overview: '',
    process: '',
    githubLinks: [
      {
        text: 'Front-End Repo',
        link: 'https://github.com/DannieSchu/themeable-list'
      }
    ],
    website: null,
    contributors: null,
    images: crossPondNewsroomImages
  }
];
