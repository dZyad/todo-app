import { projectList } from "..";
import deleteImage from "../media/delete-icon.svg";
import { createSidebarBtnListeners } from "./dynamicListeners";

const projectSidebar = document.querySelector('#project-sidebar');
const content = document.querySelector('.content');

function renderProjects() {
    _clearProjects();
    projectList.forEach((project, index) => {
        const projects = document.createElement('div');
        projects.dataset.value = index;
        projects.classList.add('projects');
        if (project.active) {
            projects.classList.add('active');
        }
        projects.textContent = project.name;

        const deleteIcon = document.createElement('img');
        deleteIcon.classList.add('delete-project');
        deleteIcon.src = deleteImage;

        projects.append(deleteIcon);
        projectSidebar.appendChild(projects);
    });

    createSidebarBtnListeners();
}

function renderCurrentProject() {
    _clearTodos();
    const activeProject = projectList.find(project => project.active);
    const projectName = document.createElement('h1');
    const projectDescription = document.createElement('h2');

    projectName.textContent = activeProject.name;
    projectDescription.textContent = activeProject.description;

    content.append(projectName);
    renderTodos(activeProject.todos);
}

function renderTodos(todos) {
    for (const [index, todo] of todos.entries()) {
        const todoBlock = document.createElement('div');

        todoBlock.classList.add('to-do');
        todoBlock.dataset.value = index;

        const name = document.createElement('p');
        const dueDate = document.createElement('p');

        name.textContent = todo.name;
        dueDate.textContent = todo.dueDate;

        todoBlock.append(name);
        todoBlock.append(dueDate);
        content.append(todoBlock);
    }
}

function _clearProjects() {
    while (projectSidebar.firstChild) {
        projectSidebar.removeChild(projectSidebar.firstChild);
    }
}

function _clearTodos() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

export { renderProjects, renderCurrentProject, renderTodos };