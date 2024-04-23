import { projectList } from "..";
import { projectsController } from "./controller";

const createProject = (name, description) => {
    _disableProjects();
    projectList.push({
        name,
        description,
        todos: [],
        active: true,
    });
}

const createTodo = (name, dueDate) => {
    activeProject().todos.push({
        name,
        dueDate,
        complete: false
    });
}

function _disableProjects() {
    for (const project of projectList) {
        project.active = false;
    }
}

function activeProject() {
    return projectList.find(project => project.active);
}

function switchActiveProject(index) {
    _disableProjects();
    projectList[index].active = true;
    projectsController();
}

function deleteProject(index) {
    if ( projectList.length > 1 ) {
        if ( projectList[index] === activeProject()) {
            projectList.splice(index, 1);
            projectList[0].active = true;
        } else {
            projectList.splice(index, 1);
        }
    }
    projectsController();
}

export { createProject, activeProject, createTodo, deleteProject, switchActiveProject };
