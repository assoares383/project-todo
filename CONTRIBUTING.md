# Guia de Contribuição

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça commit das suas alterações (`git commit -m 'feat: Add some AmazingFeature'`)
4. Faça push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Padrões de Código

### TypeScript

- Use tipos explícitos quando não for óbvio
- Evite o uso de `any`
- Utilize interfaces para definir contratos
- Mantenha as funções pequenas e focadas

### Testes

- Escreva testes para toda nova funcionalidade
- Mantenha a cobertura de código acima de 80%
- Use descrições claras nos testes
- Organize os testes em blocos lógicos

### Commits

Seguimos o padrão Conventional Commits:

```
<tipo>(escopo opcional): <descrição>

[corpo opcional]

[rodapé opcional]
```

Tipos permitidos:

- feat: nova funcionalidade
- fix: correção de bug
- docs: documentação
- style: formatação
- refactor: refatoração
- test: testes
- chore: manutenção

### Estrutura de Arquivos

```
src/
├── interfaces/     # Interfaces e tipos
├── services/       # Lógica de negócios
├── utils/          # Funções utilitárias
├── hooks/          # Custom hooks
└── tests/          # Testes
    ├── unit/
    ├── integration/
    └── __mocks__/
```

## Processo de Review

1. O código deve passar em todos os testes
2. A cobertura de código deve ser mantida ou aumentada
3. O código deve seguir os padrões do projeto
4. A documentação deve ser atualizada quando necessário

## Reportando Bugs

Ao reportar bugs, inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Screenshots (se aplicável)
- Ambiente (SO, navegador, versões)

## Sugerindo Melhorias

Ao sugerir melhorias:

- Descreva o comportamento atual
- Explique qual comportamento você gostaria de ver
- Explique por que essa melhoria seria útil

## Dúvidas

Se tiver dúvidas:

1. Verifique a documentação
2. Procure por issues similares
3. Abra uma nova issue com a tag 'question'
