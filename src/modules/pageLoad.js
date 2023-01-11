import { projectlist, getDefaultProject, Project } from './project';

const addProjectButton = (htmlContainer) => {
  const htmlAddProjectBtn = document.createElement('button');
  htmlAddProjectBtn.innerHTML = 'Add Project';
  htmlContainer.appendChild(htmlAddProjectBtn);
};

export const loadTemplate = (htmlContainer) => {
  const htmlClasses = ['header', 'sidebar', 'add-project', 'main'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    htmlContainer.appendChild(newDiv);
  });

  addProjectButton(htmlContainer.querySelector('.add-project'));
};

export const loadDefaultProject = () => {
  projectlist.addProject(getDefaultProject());
};

export const displayProjectlist = (htmlContainerClass) => {
  const htmlSidebar = document.querySelector(htmlContainerClass);

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
