import { beforeEach, describe, expect, it } from 'vitest';
import { TodoList } from '../../services/todo.service';
import {
  DEFAULT_VALUES,
  ERROR_MESSAGES,
  VALIDATION,
} from '../../utils/constants';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  describe('addTodo', () => {
    it('deve adicionar uma nova tarefa', () => {
      todoList.addTodo('Estudar TypeScript');
      const todos = todoList.getTodos();
      expect(todos).toHaveLength(1);
      expect(todos[0].text).toBe('Estudar TypeScript');
      expect(todos[0].completed).toBe(false);
    });

    it('deve remover espaços em branco do início e fim do texto', () => {
      todoList.addTodo('  Estudar TypeScript  ');
      const todos = todoList.getTodos();
      expect(todos[0].text).toBe('Estudar TypeScript');
    });

    it('deve lançar erro para texto vazio', () => {
      expect(() => todoList.addTodo('')).toThrow(
        ERROR_MESSAGES.INVALID_TASK_TEXT,
      );
    });

    it('deve lançar erro para texto apenas com espaços', () => {
      expect(() => todoList.addTodo('   ')).toThrow(
        ERROR_MESSAGES.INVALID_TASK_TEXT,
      );
    });

    it('deve lançar erro para texto muito longo', () => {
      const longText = 'a'.repeat(VALIDATION.MAX_TEXT_LENGTH + 1);
      expect(() => todoList.addTodo(longText)).toThrow(
        `Texto deve ter no máximo ${VALIDATION.MAX_TEXT_LENGTH} caracteres`,
      );
    });

    it('deve lançar erro ao atingir o limite máximo de tarefas', () => {
      for (let i = 0; i < DEFAULT_VALUES.MAX_TODOS; i++) {
        todoList.addTodo(`Tarefa ${i + 1}`);
      }
      expect(() => todoList.addTodo('Tarefa Extra')).toThrow(
        `Limite máximo de ${DEFAULT_VALUES.MAX_TODOS} tarefas atingido`,
      );
    });
  });

  describe('toggleTodo', () => {
    it('deve alternar o status de uma tarefa', () => {
      todoList.addTodo('Estudar TypeScript');
      todoList.toggleTodo(0);
      const todos = todoList.getTodos();
      expect(todos[0].completed).toBe(true);
    });

    it('não deve alternar o status de uma tarefa inexistente', () => {
      expect(() => todoList.toggleTodo(0)).toThrow(
        ERROR_MESSAGES.TASK_NOT_FOUND,
      );
    });

    it('deve lançar erro ao tentar alternar tarefa com índice negativo', () => {
      expect(() => todoList.toggleTodo(-1)).toThrow(
        ERROR_MESSAGES.TASK_NOT_FOUND,
      );
    });

    it('deve manter o estado das outras tarefas ao alternar uma tarefa', () => {
      todoList.addTodo('Tarefa 1');
      todoList.addTodo('Tarefa 2');
      todoList.addTodo('Tarefa 3');

      todoList.toggleTodo(1);

      const todos = todoList.getTodos();
      expect(todos[0].completed).toBe(false);
      expect(todos[1].completed).toBe(true);
      expect(todos[2].completed).toBe(false);
    });
  });

  describe('getTodos', () => {
    it('deve retornar uma lista vazia inicialmente', () => {
      const todos = todoList.getTodos();
      expect(todos).toHaveLength(0);
    });

    it('deve retornar uma cópia da lista de tarefas', () => {
      todoList.addTodo('Tarefa 1');
      const todos = todoList.getTodos();
      todos.push({ text: 'Tarefa Modificada', completed: true });

      const todosAtualizados = todoList.getTodos();
      expect(todosAtualizados).toHaveLength(1);
      expect(todosAtualizados[0].text).toBe('Tarefa 1');
    });
  });
});
