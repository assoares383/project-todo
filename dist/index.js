"use strict";
class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        const todo = {
            id: Date.now(),
            title,
            completed: false
        };
        this.todos.push(todo);
    }
    getTodos() {
        return this.todos;
    }
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}
// Exemplo de uso
const todoList = new TodoList();
todoList.addTodo("Implementar TypeScript");
todoList.addTodo("Configurar ESLint");
console.log("Lista de Tarefas:", todoList.getTodos());
