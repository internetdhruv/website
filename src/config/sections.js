import Resume from '../files/Dhruv_Sharma_Resume_v11.pdf';

export default [
  {
    name: 'about',
    path: '#about',
    type: 'internal',
  },
  {
    name: 'experience',
    path: '#experience',
    type: 'internal',
  },
  {
    name: 'projects',
    path: '#projects',
    type: 'internal',
  },
  {
    name: 'contact',
    path: '#contact',
    type: 'internal',
  },
  {
    name: 'git',
    path: 'https://git.dhruv-sharma.com',
    type: 'external',
    openInNewTab: false,
  },
  {
    name: 'resume',
    path: Resume,
    type: 'external',
    openInNewTab: true,
  },
];
