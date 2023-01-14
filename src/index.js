import './style.css';
import {
  loadTemplate,
  displayProjectlist,
  displayTaskList,
} from './modules/pageLoad';
import { projectlist, newProject } from './modules/project';
import {
  addEventListerns,
  removeTaskButtonEl,
  taskTitleEl,
} from './modules/eventListener';

const contentContainer = document.querySelector('#content');

if (!projectlist.loadProjects()) {
  newProject('Today');
}
loadTemplate(contentContainer);
displayProjectlist();
displayTaskList();
addEventListerns(contentContainer);
removeTaskButtonEl();
taskTitleEl(contentContainer);
