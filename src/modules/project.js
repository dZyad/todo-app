import { projectList } from "..";

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

export { createProject, activeProject, createTodo };
