import { Todo } from '../interfaces/todo.interface';
import { DEFAULT_VALUES, ERROR_MESSAGES, VALIDATION } from '../utils/constants';

export class TodoList {
  private todos: Todo[] = [];

  addTodo(text: string): void {
    if (!text || text.trim().length < VALIDATION.MIN_TEXT_LENGTH) {
      throw new Error(ERROR_MESSAGES.INVALID_TASK_TEXT);
    }

    if (text.length > VALIDATION.MAX_TEXT_LENGTH) {
      throw new Error(
        `Texto deve ter no máximo ${VALIDATION.MAX_TEXT_LENGTH} caracteres`,
      );
    }

    if (this.todos.length >= DEFAULT_VALUES.MAX_TODOS) {
      throw new Error(
        `Limite máximo de ${DEFAULT_VALUES.MAX_TODOS} tarefas atingido`,
      );
    }

    const todo: Todo = {
      text: text.trim(),
      completed: DEFAULT_VALUES.COMPLETED,
    };
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return [...this.todos];
  }

  toggleTodo(index: number): void {
    if (!this.isValidIndex(index)) {
      throw new Error(ERROR_MESSAGES.TASK_NOT_FOUND);
    }
    this.todos[index].completed = !this.todos[index].completed;
  }

  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.todos.length;
  }
}
