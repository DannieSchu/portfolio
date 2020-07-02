import { useEffect, useState } from 'react';
import { projectsData } from '../data/projectsData';

export const useGetSelectedProject = (title) => {
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedGithubLinks, setSelectedGithubLinks] = useState([]);
  const [selectedContributors, setSelectedContributors] = useState([]);
  const [selectedProjectProcess, setSelectedProjectProcess] = useState([]);
  const [selectedProjectOverview, setSelectedProjectOverview] = useState([]);

  useEffect(() => {
    const foundProject = projectsData.find(project => project.title === title);

    setSelectedProject(foundProject);
    setSelectedImages(foundProject.images);
    setSelectedStack(foundProject.stack);
    setSelectedProjectOverview(foundProject.overview);
    setSelectedProjectProcess(foundProject.process);
    setSelectedGithubLinks(foundProject.githubLinks);

    if(foundProject.contributors) { setSelectedContributors(foundProject.contributors); }
  }, []);

  return { 
    selectedProject, 
    selectedImages, 
    selectedStack, 
    selectedProjectOverview, 
    selectedProjectProcess, 
    selectedGithubLinks, 
    selectedContributors 
  };
};
