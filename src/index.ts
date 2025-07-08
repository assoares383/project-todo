interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

class TodoList {
  private todos: Todo[] = [];

  addTodo(title: string): void {
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(id: number): void {
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