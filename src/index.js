import './style.css';
import { loadTemplate, displayProjectlist } from './modules/pageLoad';
import { loadDefaultProject } from './modules/project';
import { addProjectButtonEl } from './modules/eventListener';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
loadDefaultProject();
displayProjectlist('.sidebar');
addProjectButtonEl(contentContainer);
