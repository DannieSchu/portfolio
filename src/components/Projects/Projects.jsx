import React, { useRef } from 'react';
import Project from './Project';
import Arrow from '../Nav/Arrow';
import PageHeading from '../PageHeading/PageHeading';
import useScrollBox from '../../hooks/getScrollBox';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.css';

const Projects = () => {
  const projectElements = projectsData.map(project => <Project key={project.title} {...project} />);
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <section name="Projects" className={styles.Projects}>
      <PageHeading content="Projects" />
      <section className={styles.wrapper} ref={scrollWrapperRef}>
        <section style={{ pointerEvents: isDragging ? 'none' : undefined, }} className={styles.container}>
          {projectElements}
        </section>
      </section>
      <Arrow element="Contact" />
    </section>
  );
};

export default Projects;
