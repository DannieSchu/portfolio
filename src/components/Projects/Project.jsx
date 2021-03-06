import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectHover from './ProjectHover';
import StackList from '../StackList/StackList';
import styles from './Project.css';
import typeStyles from '../../styles/type.css';

const Project = ({
  title,
  stack,
  year,
  description,
  githubLinks,
  site,
  images,
  style
}) => (
  <section className={styles.Project} style={style}>
    <Link to={`/project/${title}`}>
      <img src={images[0]} />
    </Link>
    <section className={styles.wrapper}>
      <article className={styles.text}>
        <div className={styles.heading}>
          <Link to={`/project/${title}`}>
            <h3 className={typeStyles.subheading}>{title}</h3>
          </Link>
          <h3 className={typeStyles.subheading}>{year}</h3>
        </div>
        <StackList stack={stack} />
        <ProjectHover
          description={description}
          githubLinks={githubLinks}
          site={site}
        />
      </article>
    </section>
  </section>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  githubLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired).isRequired,
  site: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  style: PropTypes.string.isRequired
};

export default Project;
