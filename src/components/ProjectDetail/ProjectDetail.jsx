import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import TextBlock from '../TextBlock/TextBlock';
import StackList from '../StackList/StackList';
import { projectsArr } from '../../data/projectsArr';
import styles from './ProjectDetail.css';
import typeStyle from '../../styles/type.css';

const ProjectDetail = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [currentImages, setCurrentImages] = useState([]);
  const title = 'Sew Organized';

  useEffect(() => {
    const foundProject = projectsArr.find(project => project.title === title);
    setCurrentProject(foundProject);
    setCurrentImages(foundProject.images);
  }, []);

  return (
    <section>
      <section className={styles.ProjectDetail}>
        <section className={styles.container}>
          <section className={styles.column}>
            <h2 className={`${styles.heading} ${typeStyle.pageHeading}`}>{title}</h2>
            <StackList stack={[currentProject.stack]} />
            <TextBlock heading="Overview" content={currentProject.overview} />
            <TextBlock heading="Process" content={currentProject.process} />
          </section>
        </section>
        <section className={styles.container}>
          <section className={styles.column}>
            <Carousel images={currentImages} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectDetail;
