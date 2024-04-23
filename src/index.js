import './style.css';
import { renderCurrentProject, renderProjects } from './modules/render';
import { initializeProjects } from './modules/loader';

let projectList = [];

initializeProjects();

renderProjects();
renderCurrentProject();

export { projectList };
