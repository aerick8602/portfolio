const explorerItems = [
  { id: 1, name: 'about', type: 'file', fileType: 'Markdown', fileExtension: '.md', icon: '/svg/info-svgrepo-com.svg' },
  { id: 2, name: 'resume', type: 'file', fileType: 'CV', fileExtension: '.cv', icon: '/png/cv.png' },
  { id: 3, name: 'skills', type: 'file', fileType: 'CSV', fileExtension: '.csv', icon: '/png/tie.png' },
  {
    name: 'projects',
    type: 'folder',
    icon: '/png/start-up.png',
    items: [
      { id: 4, name: 'visulax', type: 'file', fileType: 'HTML', fileExtension: '.html', icon: '/png/html.png' },
      { id: 5, name: 'myportfolio', type: 'file', fileType: 'CSS', fileExtension: '.css', icon: '/png/css.png' },
      { id: 6, name: 'clerk_template', type: 'file', fileType: 'JavaScript', fileExtension: '.js', icon: '/png/js.png' },
      { id: 7, name: 'inotepad', type: 'file', fileType: 'ReactJS', fileExtension: '.jsx', icon: '/svg/react_icon.svg' },
      { id: 8, name: 'eBook_Haven', type: 'file', fileType: 'ReactJS', fileExtension: '.jsx', icon: '/svg/react_icon.svg' },
      { id: 9, name: 'job_scraper', type: 'file', fileType: 'Python', fileExtension: '.py', icon: '/png/python.png' },
    ],
  },
  {
    name: 'experience',
    type: 'folder',
    icon: '/png/user.png',
    items: [
      { id: 16, name: 'fullstack', type: 'file', fileType: 'Certificate', fileExtension: '.intern', icon: '/png/certificate.png' },
    ],
  },
  {
    name: 'education',
    type: 'folder',
    icon: '/png/graduation.png',
    items: [
      { id: 10, name: 'btech', type: 'file', fileType: 'Text', fileExtension: '.txt', icon: '/png/writing.png' },
      { id: 11, name: 'sr_secondary', type: 'file', fileType: 'Text', fileExtension: '.txt', icon: '/png/writing.png' },
      { id: 12, name: 'matriculation', type: 'file', fileType: 'Text', fileExtension: '.txt', icon: '/png/writing.png' },
    ],
  },
  {
    name: 'achievements',
    type: 'folder',
    icon: '/png/band.png',
    items: [
      { id: 13, name: 'dsa', type: 'file', fileType: 'C++', fileExtension: '.cpp', icon: '/png/c-.png' },
      { id: 14, name: 'flipkart_grid', type: 'file', fileType: 'Grid File', fileExtension: '.grid', icon: '/png/favourites.png' },
      {
        name: 'certifications',
        type: 'folder',
        icon: '/png/certificate.png',
        items: [
          { id: 17, name: 'intership', type: 'file', fileType: 'PDF', fileExtension: '.pdf', icon: '/png/doc.png' },
        ],
      },
    ],
  },
  { id: 15, name: 'contact', type: 'file', fileType: 'JSON', fileExtension: '.json', icon: '/png/phone.png' },
];

export default explorerItems;
