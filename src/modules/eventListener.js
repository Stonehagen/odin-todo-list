import {
  showAddProjectForm,
  showAddTaskForm,
  displayProjectlist,
  displayTaskList,
  closePopup,
  setActiveProject,
} from './pageLoad';
import { projectlist, newProject } from './project';
import { newTask } from './task';

export const projectListItemEl = (projectListItem) => {
  projectListItem.addEventListener('click', (e) => {
    const projectId = e.target.id.split('-')[1];
    projectlist.setActiveProject(projectId);
    setActiveProject(projectId);
  });
};

export const addProjectButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-project-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const titleInput = htmlContainer.querySelector('#add-project-title');
      newProject(titleInput.value);
      displayProjectlist(projectListItemEl);
      closePopup();
    },
    { once: true },
  );
};

export const addTaskButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-task-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const titleInput = htmlContainer.querySelector('#add-task-title');
      projectlist
        .getActiceProjectObject()
        .addTask(newTask(titleInput.value, '', ''));
      displayTaskList();
      closePopup();
    },
    { once: true },
  );
};

export const addProjectFormButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-project-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showAddProjectForm(htmlContainer);
    addProjectButtonEl(htmlContainer);
  });
};

export const addTaskFormButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-task-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    showAddTaskForm(htmlContainer);
    addTaskButtonEl(htmlContainer);
  });
};

export const addEventListerns = (htmlContainer) => {
  addProjectFormButtonEl(htmlContainer);
  addTaskFormButtonEl(htmlContainer);
};
