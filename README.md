# Desafios Rocketseat (Ignite)

<p align="center">
  <img src="rockseat.svg" alt="Logo Rocketseat" height="100"/>
</p>

Desafios de front-end propostos na trilha **Ignite** da Rocketseat, feitos com **React + TypeScript + Vite**. Cada desafio fica em uma pasta própria, com seu `package.json`.

## Projetos

| Projeto | Pasta | Stack | Status |
|---|---|---|---|
| **Todo List** | [`todo list/`](todo%20list/) | React 18, TypeScript, Vite 4, CSS Modules, uuid | Concluído |
| **Coffee Delivery** | [`Coffe Delivery/`](Coffe%20Delivery/) | React 18, TypeScript, Vite 4, styled-components, Phosphor Icons | Em andamento (só o header) |

### Todo List

Lista de tarefas em React com estado em memória (as tarefas somem ao recarregar a página).

- Criação de tarefas com validação de campo obrigatório (o botão "Criar" fica desabilitado com o campo vazio)
- Marcar e desmarcar tarefas como concluídas
- Exclusão de tarefas
- Contadores de tarefas criadas e concluídas
- Estado vazio quando não há tarefas
- Estilos isolados com CSS Modules

Configuração de servidor pronta para VM Linux: o Vite escuta em `0.0.0.0` com `strictPort`, e host, portas e caminho base vêm das variáveis `HOST`, `PORT`, `PREVIEW_PORT` e `BASE`. Detalhes e exemplo de nginx no [README do projeto](todo%20list/README.md).

### Coffee Delivery

Início do desafio de e-commerce de cafés: por enquanto tem o tema global com styled-components e o header com logo, localização e ícone do carrinho.

## Como rodar

Requisitos: Node.js 20 LTS (ou 22) e npm.

```bash
# Todo List
cd "todo list"
npm ci
npm run dev        # http://localhost:5174
npm run build      # tsc + vite build → dist/
npm run preview    # serve o build em http://localhost:4174
```

```bash
# Coffee Delivery
cd "Coffe Delivery"
npm ci
npm run dev        # porta padrão do Vite (5173)
```

Nenhum dos projetos precisa de variáveis de ambiente obrigatórias.

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
