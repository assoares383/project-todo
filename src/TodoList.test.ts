import { describe, it, expect, beforeEach } from 'vitest';
import { TodoList } from './index';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('deve adicionar uma nova tarefa', () => {
    todoList.addTodo('Estudar TypeScript');
    const todos = todoList.getTodos();
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe('Estudar TypeScript');
    expect(todos[0].completed).toBe(false);
  });

  it('deve alternar o status de uma tarefa', () => {
    todoList.addTodo('Estudar TypeScript');
    todoList.toggleTodo(0);
    const todos = todoList.getTodos();
    expect(todos[0].completed).toBe(true);
  });

  it('não deve alternar o status de uma tarefa inexistente', () => {
    expect(() => todoList.toggleTodo(0)).toThrow('Tarefa não encontrada');
  });

  it('deve retornar uma lista vazia inicialmente', () => {
    const todos = todoList.getTodos();
    expect(todos).toHaveLength(0);
  });
});