#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Lista de tipos de commit válidos
VALID_TYPES=(
    "feat" "fix" "docs" "style" "refactor"
    "test" "chore" "perf" "ci" "build" "revert"
)

# Função para exibir tipos válidos
show_valid_types() {
    echo -e "${YELLOW}Tipos válidos de commit:${NC}"
    printf "%s\n" "${VALID_TYPES[@]}"
}

# Função para validar o tipo de commit
validate_type() {
    local type=$1
    for valid_type in "${VALID_TYPES[@]}"; do
        if [ "$type" = "$valid_type" ]; then
            return 0
        fi
    done
    return 1
}

# Solicitar tipo de commit
while true; do
    echo -e "${GREEN}Digite o tipo do commit:${NC}"
    show_valid_types
    read -r TYPE

    if validate_type "$TYPE"; then
        break
    else
        echo -e "${RED}Tipo inválido!${NC}"
    fi
done

# Solicitar escopo (opcional)
echo -e "${GREEN}Digite o escopo do commit (opcional, pressione ENTER para pular):${NC}"
read -r SCOPE

# Solicitar mensagem
while true; do
    echo -e "${GREEN}Digite a mensagem do commit:${NC}"
    read -r MESSAGE

    if [ -n "$MESSAGE" ]; then
        break
    else
        echo -e "${RED}A mensagem não pode estar vazia!${NC}"
    fi
done

# Construir a mensagem do commit
if [ -n "$SCOPE" ]; then
    COMMIT_MSG="$TYPE($SCOPE): $MESSAGE"
else
    COMMIT_MSG="$TYPE: $MESSAGE"
fi

# Adicionar arquivos e fazer commit
git add .
git commit -m "$COMMIT_MSG"

# Verificar se o commit foi bem sucedido
if [ $? -eq 0 ]; then
    echo -e "${GREEN}Commit realizado com sucesso!${NC}"
    
    # Perguntar se deseja fazer push
    echo -e "${YELLOW}Deseja fazer push das alterações? (s/N)${NC}"
    read -r DO_PUSH

    if [[ "$DO_PUSH" =~ ^[Ss]$ ]]; then
        git push origin main
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}Push realizado com sucesso!${NC}"
        else
            echo -e "${RED}Erro ao fazer push!${NC}"
        fi
    fi
else
    echo -e "${RED}Erro ao realizar o commit!${NC}"
fi