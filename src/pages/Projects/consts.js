import {
  isometricOutstorePng,
  isometricOngkirPng,
  isometricPortfolioPng,
} from '../../assets/images'

export const PROJECTS = [
  {
    title: 'E-Commerce',
    background: isometricOutstorePng,
    githubUrl: '#',
    appUrl: '#',
    description:
      'A fully functioning RESTful e-commerce website project with ReactJS, Express, MySQL, JWT Auth, and BCrypt for storing passwords.',
    tags: ['React', 'Express', 'MySQL'],
  },
  {
    title: 'Raja Ongkir',
    background: isometricOngkirPng,
    githubUrl: '#',
    appUrl: '#',
    description:
      'A simple website using external API to check delivery cost estimation from some courier services.',
    tags: ['React', 'NodeJS', 'Express'],
  },
  {
    title: 'Portfolio v1',
    background: isometricPortfolioPng,
    githubUrl: '#',
    appUrl: '#',
    description:
      'My very first portfolio website, I like this web personally because I put all my effort to draw all the assets from scratch using Adobe Illustrator.',
    tags: ['React', 'NodeJS', 'Express'],
  },
]
