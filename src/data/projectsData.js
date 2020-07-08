import apiClient from '../assets/projects/api-client/api-client.png';
import { alcherithmImages, alcherithmContributors } from './projects/alcherithm';
import { safePlaceForYouthImages, safePlaceForYouthContributors } from './projects/safePlaceForYouth';
import { sewOrganizedImages, sewOrganizedContributors } from './projects/sewOrganized';
import { socialDistancePingImages, socialDistancePingContributors } from './projects/socialDistancePing';

export const projectsData = [
  {
    title: 'Alcherithm',
    stack: ['React', 'Node', 'Express', 'Jest', 'MongoDB', 'Mongoose'],
    year: 2020,
    description: 'A learning platform that helps budding developers navigate code challenges.',
    overview: ['Code challenges are among the most intimidating tasks for aspiring developers. This full-stack app displays pertinent text and video resources as a user attempts the code challenges. Tracking progress and rendering a playful GIF keep the user motivated. By viewing their previous solutions (and even those of other developers), the user can glean additional insights.'],
    process: ['To synthesize my team\'s direction during this project, I distilled our conceptual vision into wireframes that would satisfy our end user; then I mapped out our React app with component diagrams. Delineating the data we\'d need to render helped me design Mongoose models with complex relationships.', 'Working independently and with a partner, I was able to reduce the logic burden on the front end by leveraging the Mongoose aggregation pipeline on the back end, which allowed me to munge data accessed via our Express routes into the most efficient shape.', 'This preparation set the stage for an elegant React app; I was able to harness these efficient routes to build clean service calls, dual-purpose hooks and presentation-focused components. Styling as a team can be challenging, so I implemented CSS variables, global styles and a reusable button component that ensured visual consistency; and I undertook styling of list, test and results pages myself. In the forked version of the app, I refactored extensively to improve the general code quality and add a loading spinner.'],
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
    title: 'Safe Place for Youth',
    stack: ['React Native', 'Airtable', 'Geolocation'],
    year: 2020,
    description: 'This tech-agnostic mobile app helps youth in crisis quickly navigate to safe locations.',
    overview: ['Designated safe places are available to Portland youth seeking safe harbor through a national network — but the first step in getting connected to a trusted adult is finding the nearest facility. This tech-agnostic mobile app strives to fill the gap. Winner among Social Service contestants for the Technology Association of Oregon\'s 2020 Design Sprint. Prototype requested by Portland nonprofit New Avenues for Youth.'],
    process: ['Our approach began with mapping out the problem and outlining our design priorities to meet our audience\'s needs. I created wireframes in Sketch that presented the prioritized information in a friendly and intuitive UI directed at young adults. Feedback from our target audience helped us further hone the design and content.', 'My team agreed that in a time of crisis, viewing a location\'s open/closed status is crucial. One of my favorite contributions to this project was implementing this logic in React Native — from creating reusable text components with hard-coded data to developing and integrating the algorithm that compared the current time to each organization\'s opening and closing hours. To execute the latter, I broke the problem down into small steps; implemented each; tested functionality incrementally to ensure each step was working; handled edge cases; and refactored the functioning algorithm for reusability by other components.', 'The team mob-programmed our most important and technically complex screen: a map that displays the nearest safe places based on a user\'s current location. Among my other individual contributions were setting up stack and tabs navigation across the app and passing data through params; building the list and home screens; implementing all styling; and ensuring a consistent UI by creating color constants and reusable components (for text/fonts, buttons, cards, etc.).'],
    githubLinks: [
      {
        text: 'Front-End Repo',
        link: 'https://github.com/safe-place-for-youth/safe-place-for-youth-fe'
      }
    ],
    demo: ['https://expo.io/@dannieschu/safe-place-for-youth', 'Have the ExpoClient app on your mobile device? Enter @dannieschu/safe-place-for-youth to view the published app.'],
    contributors: safePlaceForYouthContributors,
    images: safePlaceForYouthImages
  },
  {
    title: 'Sew Organized',
    stack: ['React', 'Node', 'Express', 'Jest', 'PostgreSQL'],
    year: 2020,
    description: 'A personal catalogue of a user\'s embroidery thread stash that uses matching algorithms to compare DMC color numbers to HEX codes.',
    overview: ['The DMC numbering system for embroidery floss is notoriously nonsensical, leading crafters to lose track of what they own. This app not only provides a virtual inventory of a user\'s stash, it also generates and saves color schemes to inspire future projects.'],
    process: ['This all-female team was extraordinarily collaborative, with most decision making and programming done in pairs or as a group. On the back end, I had a leading role in developing our Express routes and building our SQL database, where my advocacy for data normalization allowed for a cleaner front end.', 'The contribution I am most proud of is pair-programming the JavaScript logic in our React app for generating, rendering and saving color palettes. This involved developing an algorithm to generate complementary colors from a random starting color and convert them from HEX to their nearest DMC color code.'],
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
    overview: ['Americans hoping to stay apprised of the pandemic\'s progression are barraged with erronious data. This back-end app eliminates information overload by sending up-to-date, location-specific statistics from reliable sources to a user\'s phone on demand or daily at 5:00 pm.'],
    process: ['An integral part of our app was scraping statistics from a reliable, comprehensive and frequently updated website. To wait for this data to render before capturing it, I implemented a headless browser with Puppeteer.', 'A teammate and I munged the scraped data to coincide with our Mongoose models, sent it to our MongoDB database, and instituted an hourly cron job to keep our data up-to-date. We then used Twilio to send the stats to users in the daily digest SMS.', 'When our source site changed its shape (thereby halting our scraper\'s utility) two weeks after we built it, my partner and I redirected our energy from other projects to quickly find a new source and adjust our scraper accordingly. Since this app was built in a mere five days, I saw plenty of opporunity for growth; I refactored code throughout the app to improve both readability and efficiency.'],
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
    overview: ['This API server client application allows users to send HTTP requests to RESTful APIs and view the responses. When a user selects a request from their history section, the form autofills with the previous request parameters.'],
    process: ['This application was built three times with different state management approaches: 1) building custom hooks into a container/component model to manage state locally; 2) storing state globally using ContextAPI; and 3) integrating Redux to manage global state with pure functions.', 'I built each presentation component individually with snapshot tests and CSS modules; and I worked in vertical slices to add functionality, maintaining a functioning app as new features were added by adhering to agile methodologies.'],
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
  }
];
