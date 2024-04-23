import { projectList } from "..";

const projectSidebar = document.querySelector('#project-sidebar');
const content = document.querySelector('.content');

function renderProjects() {
    projectList.forEach((project, index) => {
        const projects = document.createElement('div');
        //projects.dataset.value = index;
        projects.classList.add('projects');
        if (project.active) {
            projects.classList.add('active');
        }
        projects.textContent = project.name;

        projectSidebar.appendChild(projects);
    });
}

function renderCurrentProject() {
    const activeProject = projectList.find(project => project.active);
    const projectName = document.createElement('h1');
    projectName.textContent = activeProject.name;
    content.append(projectName);
    renderTodos(activeProject.todos);
}

function renderTodos(todos) {
    console.log(todos);
    for (const todo of todos) {
        const todoBlock = document.createElement('div');
        const name = document.createElement('p');
        const dueDate = document.createElement('p');

        name.textContent = todo.name;
        dueDate.textContent = todo.dueDate;

        todoBlock.append(name);
        todoBlock.append(dueDate);
        content.append(todoBlock);
    }
}

export { renderProjects, renderCurrentProject };