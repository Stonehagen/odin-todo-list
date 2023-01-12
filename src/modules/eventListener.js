import { showAddProjectForm, displayProjectlist, closePopup } from './pageLoad';
import { newProject } from './project';

export const addProjectButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-project-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
      const titleInput = htmlContainer.querySelector('#add-project-title');
      newProject(titleInput.value);
      displayProjectlist('.sidebar');
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

export const addEventListerns = (htmlContainer) => {
  addProjectFormButtonEl(htmlContainer);
};
