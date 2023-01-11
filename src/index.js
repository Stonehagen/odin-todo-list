import './style.css';
import { loadTemplate, loadDefaultProject, displayProjectlist } from './modules/pageLoad';

const contentContainer = document.querySelector('#content');

loadTemplate(contentContainer);
loadDefaultProject();
displayProjectlist();
