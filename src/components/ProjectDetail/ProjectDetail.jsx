import React, { useEffect, useState } from 'react';
import TextBlock from '../TextBlock/TextBlock';
import StackList from '../StackList/StackList';
import { projectsArr } from '../../data/projectsArr';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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

  const carouselSettings = {
    className: styles.carousel,
    arrows: true,
    autoPlay: true,
    stopAutoPlayOnHover: true
  };

  return (
    <section>
      <section className={styles.ProjectDetail}>
        <section className={styles.left}>
          <h2 className={`${styles.heading} ${typeStyle.pageHeading}`}>{title}</h2>
          <StackList stack={[currentProject.stack]} />
          <TextBlock heading="Overview" content={currentProject.overview} />
          <TextBlock heading="Process" content={currentProject.process} />
        </section>
        <section className={styles.right}>
          <Carousel {...carouselSettings}>
            {currentImages.map((image, i) => <img key={i} src={image} />)}
          </Carousel>
        </section>
      </section>
    </section>
  );
};

export default ProjectDetail;
