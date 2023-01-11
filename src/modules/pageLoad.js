import { projectlist, getDefaultProject } from './project';

export const loadTemplate = (htmlContainer) => {
  const htmlClasses = ['header', 'sidebar', 'main'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    htmlContainer.appendChild(newDiv);
  });
};

export const loadDefaultProject = () => {
  projectlist.addProject(getDefaultProject());
};

export const displayProjectlist = () => {
  const htmlSidebar = document.querySelector('.sidebar');

  const htmlProjectList = document.createElement('ul');
  htmlProjectList.classList.add('project-list');

  projectlist.getProjects().forEach((project) => {
    const htmlProject = document.createElement('li');
    htmlProject.classList.add('project');
    htmlProject.innerHTML = project.title;
    htmlProjectList.appendChild(htmlProject);
  });

  htmlSidebar.appendChild(htmlProjectList);
};
