import { renderTodos, renderProjects, renderCurrentProject } from "./render";

function projectsController() {
    renderProjects();
    renderCurrentProject();
}

export {projectsController};