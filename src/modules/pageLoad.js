import { projectlist } from './project';

const addTaskButton = (htmlContainer, htmlclass, innerhtml) => {
  const htmlBtn = document.createElement('button');
  htmlBtn.id = htmlclass;
  htmlBtn.innerHTML = innerhtml;
  htmlContainer.appendChild(htmlBtn);
};

export const loadTemplate = (htmlContainer) => {
  const templateContainer = htmlContainer;
  templateContainer.innerHTML = '';
  const htmlClasses = ['header', 'sidebar', 'add-project', 'main', 'add-task'];

  htmlClasses.forEach((htmlClass) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(htmlClass);
    templateContainer.appendChild(newDiv);
  });

  addTaskButton(
    htmlContainer.querySelector('.add-project'),
    'add-project-btn',
    '<strong>+</strong> Add project',
  );
  addTaskButton(
    htmlContainer.querySelector('.add-task'),
    'add-task-btn',
    '<strong>+</strong> Add task',
  );
};

export const displayProjectlist = () => {
  const htmlSidebar = document.querySelector('.sidebar');
  htmlSidebar.innerHTML = '';

  const htmlProjectList = document.createElement('ul');
  htmlProjectList.classList.add('project-list');

  projectlist.getProjects().forEach((project) => {
    const htmlProject = document.createElement('li');
    htmlProject.classList.add('project');
    if (project.id === projectlist.getActiveProject()) {
      htmlProject.classList.add('active-project');
    }
    htmlProject.id = `project-${project.id}`;
    htmlProject.innerHTML = `${project.title} (${project.tasks.length})`;
    htmlProjectList.appendChild(htmlProject);
  });

  htmlSidebar.appendChild(htmlProjectList);
};

export const getTaskHtml = (task) => {
  const htmlTask = document.createElement('li');
  htmlTask.classList.add('task');
  htmlTask.id = `task-${task.id}`;

  const htmlCheckbox = document.createElement('div');
  htmlCheckbox.classList.add('task-checkbox');
  htmlCheckbox.innerHTML = '✓';

  htmlTask.appendChild(htmlCheckbox);

  const htmlTitle = document.createElement('div');
  htmlTitle.classList.add('task-title');
  htmlTitle.innerHTML = task.title;
  htmlTask.appendChild(htmlTitle);

  const htmlDate = document.createElement('div');
  htmlDate.classList.add('task-date');
  htmlDate.innerHTML = task.dueDate;
  htmlTask.appendChild(htmlDate);

  return htmlTask;
};

export const displayTaskList = () => {
  const project = projectlist.getActiceProjectObject();
  const htmlMain = document.querySelector('.main');
  htmlMain.innerHTML = '';

  const Htmlheading = document.createElement('h2');
  Htmlheading.innerHTML = project.title;

  htmlMain.appendChild(Htmlheading);

  const htmlTaskList = document.createElement('ul');
  htmlTaskList.classList.add('task-list');

  project.tasks.forEach((task) => {
    htmlTaskList.appendChild(getTaskHtml(task));
  });

  htmlMain.appendChild(htmlTaskList);
};

export const showAddProjectForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-project-title';
  titleInput.placeholder = 'Project title...';
  form.appendChild(titleInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-project-btn';
  btnSubmit.innerHTML = 'Add project';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-project-div');
  htmlAddProjectDiv.appendChild(form);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlAddProjectDiv);

  htmlContainer.appendChild(backgroundDiv);
};

export const showAddTaskForm = (htmlContainer) => {
  const form = document.createElement('form');

  const titleInput = document.createElement('input');
  titleInput.id = 'add-task-title';
  titleInput.placeholder = 'Task title...';
  titleInput.required = true;
  form.appendChild(titleInput);

  const DescriptionInput = document.createElement('textarea');
  DescriptionInput.id = 'add-task-description';
  DescriptionInput.placeholder = 'Description...';
  DescriptionInput.maxLength = 1000;
  form.appendChild(DescriptionInput);

  const dateInput = document.createElement('input');
  dateInput.type = 'datetime-local';
  dateInput.id = 'add-task-date';
  form.appendChild(dateInput);

  const btnSubmit = document.createElement('button');
  btnSubmit.id = 'add-new-task-btn';
  btnSubmit.innerHTML = 'Add task';
  form.appendChild(btnSubmit);

  const htmlAddProjectDiv = document.createElement('div');
  htmlAddProjectDiv.classList.add('add-task-div');
  htmlAddProjectDiv.appendChild(form);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('background-popup');
  backgroundDiv.appendChild(htmlAddProjectDiv);

  htmlContainer.appendChild(backgroundDiv);
};

export const closePopup = () => {
  document.querySelector('.background-popup').remove();
};

export const setActiveProject = (id) => {
  const idText = `project-${id}`;
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.classList.remove('active-project');
    if (project.id === idText) {
      project.classList.add('active-project');
    }
  });
  displayTaskList();
};
