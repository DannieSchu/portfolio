import React, { useRef } from 'react';
import Project from './Project';
import Arrow from '../Nav/Arrow';
import PageHeading from '../PageHeading/PageHeading';
import useScrollBox from '../../hooks/getScrollBox';
import { projectsData } from '../../data/projectsData';
import styles from './Projects.css';

const Projects = () => {
  const projectElements = projectsData.map((project, index) => <Project key={project.title} style={{ marginLeft: index === 0 ? '8%' : 'auto' }} {...project} />);
  const scrollWrapperRef = useRef();
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <section name="projects" className={styles.Projects}>
      <PageHeading content="Projects" />
      <section className={styles.wrapper} ref={scrollWrapperRef}>
        <section style={{ pointerEvents: isDragging ? 'none' : null }} className={styles.container}>
          {projectElements}
        </section>
      </section>
      <Arrow element="contact" />
    </section>
  );
};

export default Projects;
