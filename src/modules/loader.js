import { createProject, createTodo } from "./project";

const initializeProjects = () => {
    createProject("Grocery List", "Shopping list for the supermarket");

    createTodo("Milk", "2024-04-18");
    createTodo("Bread", "2024-04-18");

    createProject("Household Chores", "Pending household tasks");

    createTodo("Wash the dishes", "2024-04-20");
    createTodo("Sweep the floor", "2024-04-21");
};

export { initializeProjects };
