import './style.css';
import { projectsController } from './modules/controller';
import { renderCurrentProject, renderProjects } from './modules/render';
import { initializeProjects } from './modules/loader';

let projectList = [];

initializeProjects();
projectsController();

export { projectList };
