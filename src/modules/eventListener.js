import { showAddProjectForm, closePopup } from './pageLoad';

export const addProjectButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-new-project-btn');
  btn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();
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
