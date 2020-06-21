import stock_lookup from '../assets/images/stock-lookup.png';
import drugdecider from '../assets/images/drugdecider.png';
import zombie_dash from '../assets/images/zombie-dash.png';
import racing_dash from '../assets/images/racing-dashboard.png';
import bchat from '../assets/images/bchat-logo.png';

export default [
  {
    name: 'Stock Lookup',
    projectLink: 'https://stock-lookup.netlify.com',
    links: {
      project: 'https://stock-lookup.netlify.com',
      github: 'https://github.com/dhruvsharma78/stock-lookup',
    },
    description: `A web app that provides basic financial data for companies as well as links to trending news articles.
      This was my first 'real' web development project where I used a large framework (react) and APIs to make
      something functional. The App is limited in functionality and performance because of the high costs of
      financial data; making it impossible for me to source data at a reasonable cost, given that this website
      generates no revenue`,
    image: stock_lookup,
  },
  {
    name: 'Zombie Dash',
    projectLink: 'github',
    links: {
      project: null,
      github: 'https://github.com/dhruvsharma78/zombie-dash',
    },
    description: `A zombie apocalypse game developed in C++. This was developed as part of a school project. It was the
    first project where I made something that anyone, even with limited computer experience, could use.`,
    image: zombie_dash,
  },
  {
    name: 'bchat',
    projectLink: null,
    description: `bchat is a new, custom built chat solution designed specifically for UCLA. bchat automatically
    creates chat rooms for all classes at UCLA, eliminating the need for students to find a group chat for their 
    class on other platforms. In the future, bchat will also be extended to automatically create groups for 
    other communities like housing and campus organizations.`,
    image: bchat,
  },
  {
    name: 'DrugDecider',
    projectLink: 'https://www.drugdecider.org',
    links: {
      project: 'https://www.drugdecider.org',
    },
    image: drugdecider,
    description: `DrugDecider is a health app that uses machine learning to predict a patient’s treatment response 
    to antipsychotic drugs. The app was developed in collaboration with the UCLA School of Health and DevX. I built
    the backend and deployment infrastructure for the app, along with a few admin websites to allow webadmins
    to control the website.`,
  },
  {
    name: 'Racing Dash',
    projectLink: 'github',
    links: {
      project: null,
      github: 'https://github.com/dhruvsharma78/racing-dashboard',
    },
    image: racing_dash,
    description: `An arduino based customizable dashboard controller that displays vital car information on a dashboard screen.
      This was built for the UCLA Bruin Racing club. However, I designed the program to be highly customizable and
      extensible, even to the extent that this would work in any regular road car (given you can source the data).`,
  },
];
