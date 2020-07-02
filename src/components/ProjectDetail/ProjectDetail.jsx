import React, { useState } from 'react';
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
import { useGetSelectedProject } from '../../hooks/getSelectedProject';
import styles from './ProjectDetail.css';
import typeStyle from '../../styles/type.css';

const ProjectDetail = ({ history }) => {
  const [arrowIcon, setArrowIcon] = useState(leftArrow);

  const { title } = useParams();

  const { 
    selectedProject, 
    selectedImages, 
    selectedStack, 
    selectedProjectOverview, 
    selectedProjectProcess, 
    selectedGithubLinks, 
    selectedContributors 
  } = useGetSelectedProject(title);

  const possibleContributors = selectedContributors.length >= 1 ? <ContributorsList contributors={selectedContributors} /> : null;

  const possibleWebsite = selectedProject.website ? (
    <aside className={styles.website}>
      <LargeButton link={selectedProject.website}>View Site</LargeButton>
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
            <StackList stack={selectedStack} />
          </section>
          <section className={styles.textOverview}>
            <TextBlock heading="Overview" content={selectedProjectOverview} />
            <TextBlock heading="Process" content={selectedProjectProcess} />
          </section>
        </section>
      </section>
      <section className={styles.container}>
        <section className={styles.column}>
          <Carousel images={selectedImages} />
          <GitHubLinks githubLinks={selectedGithubLinks} />
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
