interface Todo {
  text: string;
  completed: boolean;
}

export class TodoList {
  private todos: Todo[] = [];

  addTodo(text: string): void {
    const todo: Todo = {
      text,
      completed: false
    };
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(index: number): void {
    if (index < 0 || index >= this.todos.length) {
      throw new Error('Tarefa não encontrada');
    }
    this.todos[index].completed = !this.todos[index].completed;
  }
}