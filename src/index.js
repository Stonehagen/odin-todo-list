import './style.css';
import { loadTemplate, displayProjectlist } from './modules/pageLoad';
import { newProject } from './modules/project';
import { addProjectFormButtonEl, projectListItemEl } from './modules/eventListener';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
newProject('Today');
displayProjectlist('.sidebar', projectListItemEl);
addProjectFormButtonEl(contentContainer);
