const explorerItems = [
    { name: 'about.md', path: '/about', type: 'file', src: '/svg/info-svgrepo-com.svg' },
    { name: 'resume.cv', path: '/skills', type: 'file', src: '/png/cv.png' },
    { name: 'skills.cvs', path: '/skills', type: 'file', src: '/png/tie.png' },
    {
      name: 'projects',
      type: 'folder',
      src: '/png/start-up.png',
      items: [
        { name: 'visulax.html', path: '/projects/projectA', type: 'file', src: '/png/html.png' },
        { name: 'myportfolio.css', path: '/projects/projectB', type: 'file', src: '/png/css.png' },
        { name: 'clerk_template.js', path: '/projects/projectB', type: 'file', src:'/png/js.png' },
        { name: 'inotepad.jsx', path: '/projects/projectB', type: 'file', src: '/svg/react_icon.svg' },
        { name: 'eBook_Haven.jsx', path: '/projects/projectB', type: 'file', src: '/svg/react_icon.svg' },
        { name: 'job_scraper.py', path: '/projects/projectB', type: 'file', src: '/png/python.png' },
      ],
    },
    {
      name: 'experience',
      type: 'folder',
      src: '/png/user.png',
      items: [
        { name: 'fullstack.intern', path: '/experience/bbb', type: 'file', src: '/png/certificate.png' },
      ],
    },
    {
      name: 'education',
      type: 'folder',
      src: '/png/graduation.png',
      items: [
        { name: 'btech.txt', path: '/education/btech', type: 'file', src: '/png/writing.png' },
        { name: 'sr.secondary.txt', path: '/education/highschool', type: 'file', src: '/png/writing.png' },
        { name: 'matriculation.txt', path: '/education/highschool', type: 'file', src: '/png/writing.png' },
      ],
    },
    {
      name: 'achievements',
      type: 'folder',
      src: '/png/band.png',
      items: [
        { name: 'dsa.cpp', path: '/achievements/bbb', type: 'file', src: '/png/c-.png' },
        { name: 'flipkart.grid', path: '/achievements/aaa', type: 'file', src: '/png/favourites.png' },
      ],
    },
    { name: 'contact', path: '/contact', type: 'file', src: '/png/phone.png' },
  ];

  export default explorerItems;