import { projectlist } from './project';

const addProjectButton = (htmlContainer) => {
  const htmlAddProjectBtn = document.createElement('button');
  htmlAddProjectBtn.id = 'add-project-btn';
  htmlAddProjectBtn.innerHTML = 'Add Project';
  htmlContainer.appendChild(htmlAddProjectBtn);
};

export const loadTemplate = (htmlContainer) => {
  const templateContainer = htmlContainer;
  templateContainer.innerHTML = '';
  const htmlClasses = ['header', 'sidebar', 'add-project', 'main'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    templateContainer.appendChild(newDiv);
  });

  addProjectButton(htmlContainer.querySelector('.add-project'));
};

export const displayProjectlist = (htmlContainerClass) => {
  const htmlSidebar = document.querySelector(htmlContainerClass);
  htmlSidebar.innerHTML = '';

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

export const showAddProjectForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-project-title';
  titleInput.placeholder = 'Project Title...';
  form.appendChild(titleInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-project-btn';
  btnSubmit.innerHTML = 'Add Project';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-project-div');
  htmlAddProjectDiv.appendChild(form);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlAddProjectDiv);

  htmlContainer.appendChild(backgroundDiv);
};

export const closePopup = () => {
  document.querySelector('.background-popup').remove();
};
