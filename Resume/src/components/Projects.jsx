import React from 'react';
import Title from './Title';
import InnerData from './InnerData';

const Projects = () => {
  const projects = [
    `Nike Shoe Store Clone - A clone web app of Nike using React, Next, Redux, Strapie, Stripe.`,
    `Stop Watch - A fully Responsive Stopwatch using tools using Html, CSS and JavaScript.`
  ];

  const projectItems = projects.map((project, index) => (
    <React.Fragment key={index}>
      {project}
      {index === 0 && (
        <a href="https://github.com/adarshooo1/">https://github.com/adarshooo1/</a>
      )}
      {index === 1 && (
        <a href="https://github.com/adarshooo1/30-Basic-Projects/tree/master/StopWatch">https://github.com/adarshooo1/30-Basic-Projects/tree/master/StopWatch</a>
      )}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="Projects MgPd">
      <Title title="Projects" />
      <InnerData items={projectItems} />
    </div>
  );
};

export default Projects;