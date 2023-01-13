import {
  showAddProjectForm,
  showAddTaskForm,
  displayProjectlist,
  displayTaskList,
  closePopup,
  setActiveProject,
  showTask,
} from './pageLoad';
import { projectlist, newProject } from './project';
import { newTask } from './task';

export const closePopupButtonEl = () => {
  const btn = document.querySelector('#task-close-btn');
  btn.addEventListener('click', () => {
    closePopup();
  });
};

export const taskTitleEl = () => {
  const htmlTaskTitles = document.querySelectorAll('.task-title');
  htmlTaskTitles.forEach((taskTitle) => {
    taskTitle.addEventListener('click', (e) => {
      const taskId = e.target.parentElement.id.split('-')[1];
      const project = projectlist.getActiceProjectObject();
      showTask(document.querySelector('#content'), project.getTask(taskId));
      closePopupButtonEl();
    });
  });
};

export const projectListItemEl = () => {
  const htmlProjects = document.querySelectorAll('.project');
  htmlProjects.forEach((project) => {
    project.addEventListener('click', (e) => {
      const projectId = e.target.id.split('-')[1];
      projectlist.setActiveProject(projectId);
      setActiveProject(projectId);
      displayProjectlist();
      displayTaskList();
      taskTitleEl();
      projectListItemEl();
    });
  });
};

export const removeTaskButtonEl = () => {
  const htmlCheckboxes = document.querySelectorAll('.task-checkbox');
  htmlCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
      const taskId = e.target.parentElement.id.split('-')[1];
      const project = projectlist.getActiceProjectObject();
      project.removeTask(+taskId);
      displayTaskList();
      displayProjectlist();
      removeTaskButtonEl();
      taskTitleEl();
    });
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
      displayProjectlist();
      projectListItemEl();
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
      const descriptionInput = htmlContainer.querySelector(
        '#add-task-description',
      );
      const dateInput = htmlContainer.querySelector('#add-task-date');
      projectlist
        .getActiceProjectObject()
        .addTask(
          newTask(titleInput.value, descriptionInput.value, dateInput.value),
        );
      displayTaskList();
      displayProjectlist();
      projectListItemEl();
      removeTaskButtonEl();
      taskTitleEl();
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
