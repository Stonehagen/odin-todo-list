import './style.css';
import { loadTemplate, displayProjectlist, displayTaskList } from './modules/pageLoad';
import { newProject } from './modules/project';
import { addEventListerns, projectListItemEl } from './modules/eventListener';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
newProject('Today');
displayProjectlist(projectListItemEl);
displayTaskList();
addEventListerns(contentContainer);
