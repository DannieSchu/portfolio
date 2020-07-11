import homeIcon from '../assets/icons/home.svg';
import homeActiveIcon from '../assets/icons/home-active.svg';
import aboutIcon from '../assets/icons/about.svg';
import aboutActiveIcon from '../assets/icons/about-active.svg';
import projectsIcon from '../assets/icons/projects.svg';
import projectsActiveIcon from '../assets/icons/projects-active.svg';
import contactIcon from '../assets/icons/contact.svg';
import contactActiveIcon from '../assets/icons/contact-active.svg';

export const navIconsData = [
  {
    to: 'home',
    text: 'Home',
    icon: homeIcon,
    activeIcon: homeActiveIcon
  },
  {
    to: 'aboutContainer',
    text: 'About',
    icon: aboutIcon,
    activeIcon: aboutActiveIcon
  },
  {
    to: 'projects',
    text: 'Projects',
    icon: projectsIcon,
    activeIcon: projectsActiveIcon
  },
  {
    to: 'contact',
    text: 'Contact',
    icon: contactIcon,
    activeIcon: contactActiveIcon
  },
];
