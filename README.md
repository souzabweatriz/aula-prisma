# Back-End Prisma - API de Coleção de Animes

Projeto Back-End desenvolvido em Node.js com Express e Prisma ORM para gerenciamento de uma coleção de animes.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **Prisma** - ORM (Object-Relational Mapping)
- **JavaScript (ES6+)** - Linguagem de programação
- **dotenv** - Gerenciamento de variáveis de ambiente
- **CORS** - Middleware para controle de acesso
- **UUID** - Geração de identificadores únicos
- **Nodemon** - Ferramenta de desenvolvimento para auto-reload

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados (PostgreSQL, MySQL, SQLite ou MongoDB)

## 🔧 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/souzabweatriz/aula-prisma.git
cd aula-prisma
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto:
```env
# Configuração do banco de dados
DATABASE_URL="sua_string_de_conexao_aqui"

# Porta do servidor (opcional)
PORT=5000
```

4. **Configure o Prisma:**
```bash
# Gerar o Prisma Client
npx prisma generate

# Executar as migrações (se houver)
npx prisma migrate dev

# (Opcional) Visualizar o banco de dados
npx prisma studio
```

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
```
O servidor será iniciado em modo de desenvolvimento com auto-reload na porta 5000 (ou na porta definida na variável PORT).

### Produção
```bash
npm start
```

## 📡 API Endpoints

### Rota Base
- **GET** `/` - Verificar se a API está funcionando
  - **Resposta:** `{ "message": "API de Coleção de Animes funcionando!" }`

### Endpoints dos Animes (A implementar)
- **GET** `/animes` - Listar todos os animes
- **GET** `/animes/:id` - Buscar anime por ID
- **POST** `/animes` - Criar novo anime
- **PUT** `/animes/:id` - Atualizar anime
- **DELETE** `/animes/:id` - Deletar anime

## 🗂️ Estrutura do Projeto

```
back-end-prisma/
├── src/
│   ├── server.js          # Arquivo principal do servidor
│   ├── routes/            # Rotas da API (a criar)
│   ├── controllers/       # Controladores (a criar)
│   ├── models/           # Modelos do Prisma (a criar)
│   └── middlewares/      # Middlewares customizados (a criar)
├── prisma/
│   ├── schema.prisma     # Schema do banco de dados (a criar)
│   └── migrations/       # Migrações do banco (a criar)
├── .env                  # Variáveis de ambiente (a criar)
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```

## 🎯 Próximos Passos

1. **Configurar o Schema do Prisma:**
   - Criar o arquivo `prisma/schema.prisma`
   - Definir o modelo dos Animes

2. **Implementar as Rotas:**
   - Criar rotas para CRUD de animes
   - Implementar controladores

3. **Adicionar Middlewares:**
   - Validação de dados
   - Tratamento de erros
   - Autenticação (se necessário)

4. **Testes:**
   - Adicionar testes unitários
   - Testes de integração

## 📝 Exemplo de Schema Prisma (Sugestão)

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // ou mysql, sqlite, mongodb
  url      = env("DATABASE_URL")
}

model Anime {
  id          String   @id @default(uuid())
  titulo      String
  genero      String
  ano         Int
  episodios   Int
  sinopse     String?
  nota        Float?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("animes")
}
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👩‍💻 Autor

**Ana Souza**

- GitHub: [@souzabweatriz](https://github.com/souzabweatriz)

---

## 🆘 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Gerar Prisma Client
npx prisma generate

# Executar migrações
npx prisma migrate dev

# Resetar banco de dados
npx prisma migrate reset

# Abrir Prisma Studio
npx prisma studio

# Ver logs do Prisma
npx prisma db seed
```

---

**Desenvolvido com ❤️ no SENAI**
