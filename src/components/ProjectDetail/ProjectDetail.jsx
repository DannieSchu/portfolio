import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import TextBlock from '../TextBlock/TextBlock';
import StackList from '../StackList/StackList';
import { projectsArr } from '../../data/projectsArr';
import styles from './ProjectDetail.css';
import typeStyle from '../../styles/type.css';
import GitHubLinks from '../GithubLinks/GitHubLinks';

const ProjectDetail = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [currentImages, setCurrentImages] = useState([]);
  const [currentStack, setCurrentStack] = useState([]);
  const title = 'Sew Organized';

  useEffect(() => {
    const foundProject = projectsArr.find(project => project.title === title);
    
    setCurrentProject(foundProject);
    setCurrentImages(foundProject.images);
    setCurrentStack(foundProject.stack);
  }, []);

  return (
    <section>
      <section className={styles.ProjectDetail}>
        <section className={styles.container}>
          <section className={styles.column}>
            <h2 className={`${styles.heading} ${typeStyle.pageHeading}`}>{title}</h2>
            <StackList stack={currentStack} />
            <TextBlock heading="Overview" content={currentProject.overview} />
            <TextBlock heading="Process" content={currentProject.process} />
          </section>
        </section>
        <section className={styles.container}>
          <section className={styles.column}>
            <Carousel images={currentImages} />
            <GitHubLinks githubBE={currentProject.githubBE} githubFE={currentProject.githubFE} />
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectDetail;
