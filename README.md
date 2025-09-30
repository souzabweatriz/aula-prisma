# 🎬 Projeto API de Filmes com Express e Prisma

Este projeto é uma API RESTful para cadastro e consulta de filmes, construída com **Node.js**, **Express** e **Prisma ORM**.

## Funcionalidades

- Listar todos os filmes (`GET /api/movies`)
- Cadastrar um novo filme (`POST /api/movies`)
- (Adicione aqui outras rotas, se existirem)

## Estrutura do Projeto

```
src/
 ├── controllers/
 │    └── movies.controller.js
 ├── models/
 │    └── movies.model.js
 ├── routes/
 │    ├── index.routes.js
 │    └── movies.routes.js
 └── server.js
```

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone <url-do-repo>
   cd aula-prisma
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias, por exemplo:
     ```
     DATABASE_URL="sua_string_de_conexao"
     PORT=4000
     ```

4. **Rode as migrations do Prisma**
   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor**
   ```bash
   npm start
   ```
   O servidor estará disponível em [http://localhost:4000](http://localhost:4000).

## Exemplo de requisição para cadastrar filme

```json
POST /api/movies
Content-Type: application/json

{
  "title": "Bailarina",
  "category": "Animação",
  "duration": 90,
  "sinopse": "Filme de uma bailarina que sonha em estudar numa escola de dança na França",
  "releaseYear": 2016
}
```

## Tecnologias

- Node.js
- Express
- Prisma ORM
- SQLite/PostgreSQL/MySQL (dependendo da configuração)

---

## Instalação no Prisma
```bash
# Instalar o Prisma CLI e o cliente Prisma
npm install prisma @prisma/client
```

```bash
npx prisma init
```

> Projeto desenvolvido para fins de estudo.

**Desenvolvido com ❤️ no SENAI**