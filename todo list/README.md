# Todo List

Lista de tarefas (React + CSS Modules + Sass). Os dados ficam em memória (somem ao recarregar a página).

Projeto Vite + React + TypeScript (SPA estática). Guia para rodar em Linux (ex.: VM AWS EC2 Ubuntu).

## Requisitos

- Node.js **20 LTS** (ou 22 LTS) e npm 9+ — `node -v`
- Para servir com nginx (opcional): `sudo apt install nginx`

## Passo a passo

```bash
npm ci               # instala dependências (usa package-lock.json)
npm run build        # gera a pasta dist/ (estática)
npm run dev          # desenvolvimento -> http://<IP>:5174
npm run preview      # serve o dist/ -> http://<IP>:4174
```

- `dev` e `preview` escutam em `0.0.0.0` (acessíveis de fora da VM). Libere a porta no Security Group.
- Porta/host configuráveis por variável de ambiente: `HOST`, `PORT` (dev), `PREVIEW_PORT` (preview). Ex.: `PREVIEW_PORT=8080 npm run preview`.
- `BASE` define o caminho base do build (padrão `/`). Ex.: `BASE=/todo/ npm run build` para servir em subpasta.
- Se a porta já estiver em uso o Vite falha (`strictPort`) em vez de trocar de porta.

## Teste rápido

```bash
curl -I http://127.0.0.1:4174/     # HTTP/1.1 200 OK
```

## nginx (opcional, recomendado em produção)

Copie o build para o servidor e aponte o nginx para ele:

```bash
sudo mkdir -p /var/www/atv-redes/todo-list
sudo cp -r dist/. /var/www/atv-redes/todo-list/
```

```nginx
server {
    listen 8080;
    server_name _;
    root /var/www/atv-redes/todo-list;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Depois: `sudo nginx -t && sudo systemctl reload nginx`.

> Para servir na mesma porta 80 junto de outro projeto, faça o build com `BASE=/todo/ npm run build` e use `location /todo/ { alias /var/www/atv-redes/todo-list/; try_files $uri $uri/ /todo/index.html; }`.
