import React, { useEffect, useState } from 'react';

import TextBlock from '../TextBlock/TextBlock';
import { projectsArr } from '../../data/projectsArr';

const ProjectDetail = () => {
  const [currentProject, setCurrentProject] = useState({});
  const title = 'Sew Organized';

  useEffect(() => {
    const foundProject = projectsArr.find(project => project.title === title);

    setCurrentProject(foundProject);
  }, []);

  return (
    <section>
      <TextBlock heading="Overview" content={currentProject.overview} />
      <TextBlock heading="Process" content={currentProject.process} />
    </section>
  );
};

ProjectDetail.propTypes = {

};

export default ProjectDetail;

