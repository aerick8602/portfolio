import React from 'react';
import '../styles/about.css';

const About = () => {
  const rows = Array.from({ length: 40 }, (_, index) => index + 1);

  return (
    <div className="about">
      <code className="row">
        {rows.map((row) => (
          <p key={row}>{row}</p>
        ))}
      </code>

      <code>
        ## <strong>About Me</strong>
        <br />
        <br />
        Hello! I&apos;m **<strong>Ayush Katiyar</strong>**, a passionate and driven student at *<strong>NIT Bhopal</strong>* with a keen interest in technology and software development. Over the years, I have gained hands-on experience in both hardware and software, and I&apos;ve used my background to develop a strong problem-solving mindset.
        <br />
        <br />
        ### <strong>My Experience</strong>
        <br />
        I have experience working with various technologies, including *<strong>React</strong>*, *<strong>Next.js</strong>*, *<strong>TypeScript</strong>*, *<strong>C++</strong>*, *<strong>Python</strong>*, *<strong>MySQL</strong>* ,and *<strong>MongoDB</strong>*. I&apos;m particularly drawn to web development, and I&apos;ve worked on multiple projects where I&apos;ve implemented features such as authentication systems, UI components, and dynamic data handling. Some of my favorite projects include Visulax, a web app for visualizing data, and eBook Haven, a platform for managing and reading eBooks.
        <br />
        <br />
        During my internship, I had the opportunity to work on the *<strong>Amritam</strong>* project, an e-commerce website focused on reintroducing natural and organic products into kitchens. The project emphasizes health, wellness, and sustainability. This experience allowed me to sharpen my web development skills and gain hands-on experience in building scalable, user-centric web applications.
        <br />
        <br />
        In addition to my technical skills, I am a strong advocate for clean, maintainable code and effective collaboration. I am always looking to learn and grow, and I thrive in fast-paced, challenging environments.
        <br />
        <br />
        When I&apos;m not coding, you&apos;ll find me exploring new tech trends, diving into problem-solving challenges, or working on personal projects. I am excited to apply my skills in new and innovative ways to make a positive impact.
        <br />
        <br />
        Feel free to explore my portfolio, and don&apos;t hesitate to get in touch for any collaborations or opportunities&#x1F64C;&#x2764;&#xFE0F;&#x2764;&#xFE0F;&#x2728;!
      </code>
    </div>
  );
};

export default About;
