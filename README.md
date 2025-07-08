# Project Todo

Um projeto de lista de tarefas com TypeScript, ESLint, Prettier e Git Hooks.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd project-todo
```

2. Instale as dependências:
```bash
npm install
```

## Configuração do Ambiente

O projeto já está configurado com:

### TypeScript
- Configuração em `tsconfig.json`
- Verificação de tipos estrita
- Compilação para JavaScript moderno

### ESLint
- Regras para TypeScript
- Integração com Prettier
- Verificação de código em tempo real

### Prettier
- Formatação consistente de código
- Integração com ESLint
- Configurações personalizadas

### Git Hooks (usando Husky)
- pre-commit: executa lint-staged
- commit-msg: valida mensagens de commit
- pre-push: executa testes

## Scripts Disponíveis

```bash
# Compilar o projeto
npm run build

# Executar em modo de desenvolvimento
npm run dev

# Iniciar o projeto
npm start

# Verificar tipos
npm run type-check

# Executar linting
npm run lint

# Corrigir problemas de linting
npm run lint:fix

# Formatar código
npm run format
```

## Padrões de Commit

O projeto segue o padrão Conventional Commits. As mensagens devem seguir o formato:

```
<tipo>(escopo opcional): <descrição>
```

Tipos permitidos:
- feat: nova funcionalidade
- fix: correção de bug
- docs: documentação
- style: formatação de código
- refactor: refatoração de código
- test: testes
- chore: tarefas de manutenção
- perf: melhorias de performance
- ci: configuração de CI
- build: sistema de build
- revert: reverter commits

## Estrutura do Projeto

```
├── src/           # Código fonte
├── dist/          # Código compilado
├── .husky/        # Configurações do Husky
├── .eslintrc.json # Configuração do ESLint
├── .prettierrc    # Configuração do Prettier
└── tsconfig.json  # Configuração do TypeScript
```

## Boas Práticas

1. **Commits**
   - Use mensagens claras e descritivas
   - Siga o padrão Conventional Commits
   - Faça commits pequenos e focados

2. **Código**
   - Mantenha o código limpo e bem documentado
   - Siga as regras do ESLint
   - Use tipos TypeScript apropriadamente

3. **Branches**
   - Crie branches para novas features
   - Faça merge apenas após revisão
   - Mantenha branches atualizadas