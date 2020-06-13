import React, { useRef } from 'react';
import Project from './Project';
import Arrow from '../Nav/Arrow';
import useScrollBox from '../../hooks/getScrollBox';
import { projectsArr } from '../../utils/projectsArr';
import styles from './Projects.css';
import typeStyle from '../../styles/type.css';

const Projects = () => {
  const projectElements = projectsArr.map(project => <Project key={project.title} {...project} />);

  const scrollWrapperRef = useRef();
  const { isDragging, active } = useScrollBox(scrollWrapperRef);

  return (
    <section name="Projects" className={styles.Projects}>
      <h2 className={typeStyle.pageHeading}>Projects</h2>
      <section className={styles.wrapper} ref={scrollWrapperRef}>
        <section style={{ pointerEvents: isDragging ? 'none' : undefined, 
          // cursor: active ? 'grab' : 'grabbing' 
        }} className={styles.container}>
          {projectElements}
        </section>
      </section>
      <div className={styles.arrow}>
        <Arrow element="Contact" />
      </div>
    </section>
  );
};

export default Projects;
