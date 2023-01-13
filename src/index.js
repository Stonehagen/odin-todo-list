import './style.css';
import {
  loadTemplate,
  displayProjectlist,
  displayTaskList,
} from './modules/pageLoad';
import { newProject } from './modules/project';
import {
  addEventListerns,
  removeTaskButtonEl,
  taskTitleEl,
} from './modules/eventListener';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
newProject('Today');
displayProjectlist();
displayTaskList();
addEventListerns(contentContainer);
removeTaskButtonEl();
taskTitleEl(contentContainer);
