const createTodo = (title, dueDate) => {
    return {
        title: title,
        dueDate: dueDate,
        completed: false,
        toggleCompleted() {
            this.completed = !this.completed;
        }
    };
};

export { createTodo };