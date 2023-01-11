import { showAddProjectForm } from "./pageLoad";

export const addProjectButtonEl = (htmlContainer) => {
  const btn = document.querySelector('#add-project-btn');
  btn.addEventListener('click', () => {
    showAddProjectForm(htmlContainer);
  });
};
