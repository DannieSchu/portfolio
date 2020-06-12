import React from 'react';
import Project from './Project';
import Arrow from '../Nav/Arrow';
import styles from './Projects.css';
import typeStyle from '../../styles/type.css';
import { projectsArr } from './projectsArr';

const Projects = () => {
  const projectElements = projectsArr.map(project => <Project key={project.title} {...project} />);

  return (
    <section name="Projects" className={styles.Projects}>
      <h2 className={typeStyle.pageHeading}>Projects</h2>
      <section className={styles.wrapper} >
        {projectElements}
      </section>
      <div className={styles.arrow}>
        <Arrow element="Contact" />
      </div>
    </section>
  );
};

export default Projects;
