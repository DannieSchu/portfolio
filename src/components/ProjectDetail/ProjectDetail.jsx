import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import TextBlock from '../TextBlock/TextBlock';
import StackList from '../StackList/StackList';
import GitHubLinks from '../GitHubLinks/GitHubLinks';
import LargeButton from '../LargeButton/LargeButton';
import ContributorsList from '../ContributorsList/ContributorsList';
import leftArrow from '../../assets/icons/left-charcoal.png';
import leftArrowShadow from '../../assets/icons/left-charcoal-shadow.png';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectDetail.css';
import typeStyle from '../../styles/type.css';

const ProjectDetail = ({ history }) => {
  const [currentProject, setCurrentProject] = useState({});
  const [currentImages, setCurrentImages] = useState([]);
  const [currentStack, setCurrentStack] = useState([]);
  const [currentGithubLinks, setCurrentGithubLinks] = useState([]);
  const [currentContributors, setCurrentContributors] = useState([]);
  const [currentProjectProcess, setCurrentProjectProcess] = useState([]);
  const [currentProjectOverview, setCurrentProjectOverview] = useState([]);
  const [arrowIcon, setArrowIcon] = useState(leftArrow);

  const { title } = useParams();

  useEffect(() => {
    const foundProject = projectsData.find(project => project.title === title);

    setCurrentProject(foundProject);
    setCurrentImages(foundProject.images);
    setCurrentStack(foundProject.stack);
    setCurrentProjectOverview(foundProject.overview);
    setCurrentProjectProcess(foundProject.process);
    setCurrentGithubLinks(foundProject.githubLinks);

    if(foundProject.contributors) { setCurrentContributors(foundProject.contributors); }
  }, []);

  const possibleContributors = currentContributors.length >= 1 ? <ContributorsList contributors={currentContributors} /> : null;

  const possibleWebsite = currentProject.website ? (
    <aside className={styles.website}>
      <LargeButton link={currentProject.website}>View Site</LargeButton>
    </aside>
  ) : null;

  return (
    <section className={styles.ProjectDetail}>
      <img
        src={arrowIcon}
        onClick={() => history.goBack()}
        onMouseEnter={() => setArrowIcon(leftArrowShadow)}
        onMouseLeave={() => setArrowIcon(leftArrow)}
        className={styles.back}
      />
      <section className={styles.container}>
        <section className={styles.column}>
          <section className={styles.heading}>
            <h2 className={typeStyle.pageHeading}>{title}</h2>
            <StackList stack={currentStack} />
          </section>
          <section className={styles.textOverview}>
            <TextBlock heading="Overview" content={currentProjectOverview} />
            <TextBlock heading="Process" content={currentProjectProcess} />
          </section>
        </section>
      </section>
      <section className={styles.container}>
        <section className={styles.column}>
          <Carousel images={currentImages} />
          <GitHubLinks githubLinks={currentGithubLinks} />
          {possibleContributors}
          {possibleWebsite}
        </section>
      </section>
    </section>
  );
};

ProjectDetail.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

export default ProjectDetail;
