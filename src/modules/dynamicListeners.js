import { projectsController } from "./controller";
import { deleteProject, switchActiveProject } from "./project";

function createSidebarBtnListeners() {
    const projects = document.querySelectorAll('.projects');
    projects.forEach(btn => btn.addEventListener('click', function(e){
        if (e.target.className == 'delete-project' ) {

        } else {
            switchActiveProject(e.target.dataset.value);
        }
    }));

    const deleteIcon = document.querySelectorAll('.delete-project');
    deleteIcon.forEach(deleteBtn => deleteBtn.addEventListener('click', function(e){
        deleteProject(e.target.parentNode.dataset.value);
    }));
}

export { createSidebarBtnListeners };