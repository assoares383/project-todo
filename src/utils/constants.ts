export const ERROR_MESSAGES = {
  TASK_NOT_FOUND: 'Tarefa não encontrada',
  INVALID_TASK_TEXT: 'Texto da tarefa é obrigatório',
  INVALID_INDEX: 'Índice inválido',
} as const;

export const VALIDATION = {
  MIN_TEXT_LENGTH: 1,
  MAX_TEXT_LENGTH: 100,
} as const;

export const DEFAULT_VALUES = {
  COMPLETED: false,
  MAX_TODOS: 100,
} as const;
