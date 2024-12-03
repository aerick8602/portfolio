const explorerItems = [
  { name: 'about.md', type: 'file', icon: '/svg/info-svgrepo-com.svg' },
  { name: 'resume.cv', type: 'file', icon: '/png/cv.png' },
  { name: 'skills.cvs', type: 'file', icon: '/png/tie.png' },
  {
    name: 'projects',
    type: 'folder',
    icon: '/png/start-up.png',
    items: [
      { name: 'visulax.html', type: 'file', icon: '/png/html.png' },
      { name: 'myportfolio.css', type: 'file', icon: '/png/css.png' },
      { name: 'clerk_template.js', type: 'file', icon: '/png/js.png' },
      { name: 'inotepad.jsx', type: 'file', icon: '/svg/react_icon.svg' },
      { name: 'eBook_Haven.jsx', type: 'file', icon: '/svg/react_icon.svg' },
      { name: 'job_scraper.py', type: 'file', icon: '/png/python.png' },
    ],
  },
  {
    name: 'experience',
    type: 'folder',
    icon: '/png/user.png',
    items: [
      { name: 'fullstack.intern', type: 'file', icon: '/png/certificate.png' },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    icon: '/png/graduation.png',
    items: [
      { name: 'btech.txt', type: 'file', icon: '/png/writing.png' },
      { name: 'sr_secondary.txt', type: 'file', icon: '/png/writing.png' },
      { name: 'matriculation.txt', type: 'file', icon: '/png/writing.png' },
    ],
  },
  {
    name: 'achievements',
    type: 'folder',
    icon: '/png/band.png',
    items: [
      { name: 'dsa.cpp', type: 'file', icon: '/png/c-.png' },
      { name: 'flipkart.grid', type: 'file', icon: '/png/favourites.png' },
      {
        name: 'certifications',
        type: 'folder',
        icon: '/png/certificate.png',
        items: [
          // { name: 'aws_certification.pdf', type: 'file', icon: '/png/doc.png' },
          // { name: 'google_analytics_certification.pdf', type: 'file', icon: '/png/doc.png' },
          { name: 'full_stack_intership.pdf', type: 'file', icon: '/png/doc.png' },
        ],
      },

    ],
  },
  { name: 'contact.json', type: 'file', icon: '/png/phone.png' },
];

export default explorerItems;
