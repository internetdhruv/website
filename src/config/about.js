import uclaLogo from '../assets/images/ucla-logo.png';

export default {
  mainText: `Hi! I'm a Computer Science student at the University of California, Los Angeles. I
    specialize in image processing, text detection/recognition and systems. I'm
    also interested in data analytics, with an emphasis on its use in the finance industry for
    trading and investing.`,
  subText: `Get in touch with me if you have any opportunities you would like to discuss, or
    for freelance work with web development any of the technologies I have worked with!`,
  education: [
    {
      institution: {
        name: 'University of California, Los Angeles (UCLA)',
        shortName: 'UCLA',
        website: 'https://www.ucla.edu',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
        },
        logo: uclaLogo,
      },
      major: 'Computer Science',
      degree: 'BSc',
      start: 2018,
      end: 2022,
      GPA: null,
      about: `I'm currently studying Computer Science at UCLA with a technical breadth in
        Engineering Finance.`,
      classes: [
        'Operating Systems',
        'Computer Architecture',
        'Data Structures and Algorithms',
        'Logic Design of Digital Systems',
        'Programming Language Theory',
        'Software Construction Laboratory',
        'Finance and Marketing for Engineers',
        'Calculus',
        'Linear Algebra',
        'Discrete Mathematics',
      ],
    },
  ],
};
