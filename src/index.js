import './style.css';
import { loadTemplate, displayProjectlist } from './modules/pageLoad';
import { newProject } from './modules/project';
import { addProjectFormButtonEl } from './modules/eventListener';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
newProject('Today');
displayProjectlist('.sidebar');
addProjectFormButtonEl(contentContainer);
