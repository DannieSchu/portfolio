import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import TextBlock from '../TextBlock/TextBlock';
import StackList from '../StackList/StackList';
import GitHubLinks from '../GithubLinks/GitHubLinks';
import { projectsArr } from '../../data/projectsArr';
import styles from './ProjectDetail.css';
import typeStyle from '../../styles/type.css';
import LargeButton from '../LargeButton/LargeButton';

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
    <section className={styles.ProjectDetail}>
      <section className={styles.container}>
        <section className={styles.column}>
          <section className={styles.heading}>
            <h2 className={typeStyle.pageHeading}>{title}</h2>
            <StackList stack={currentStack} />
          </section>
          <section className={styles.textOverview}>
            <TextBlock heading="Overview" content={currentProject.overview} />
            <TextBlock heading="Process" content={currentProject.process} />
            <aside className={styles.website}>
              <LargeButton link={currentProject.website}>View Site</LargeButton>
            </aside>
          </section>
        </section>
      </section>
      <section className={styles.container}>
        <section className={styles.column}>
          <Carousel images={currentImages} />
          <GitHubLinks githubBE={currentProject.githubBE} githubFE={currentProject.githubFE} />
        </section>
      </section>
    </section>
  );
};

export default ProjectDetail;
