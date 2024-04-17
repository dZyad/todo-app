import { projectList } from "..";
import { createTodo } from "./todo";

const createProject = (name, description) => {
    _disableProjects();
    const newProject = {
        name: name,
        description: description,
        todos: [],
        active: true,
        addTodo(todo) {
            this.todos.push(todo);
        }
    };
    projectList.push(newProject);
}

const _disableProjects = () => {
    for (const project of projectList) {
        project.active = false;
    }
}

const activeProject = () => {
    return projectList.find(project => project.active);
}

export { createProject, activeProject };
