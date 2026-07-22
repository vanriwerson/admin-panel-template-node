# Admin Panel Boilerplate (NestJS)

> Boilerplate full-stack para construção de painéis administrativos utilizando **NestJS**, **PostgreSQL** e **React**, seguindo uma arquitetura modular, escalável e orientada a boas práticas da comunidade.

O projeto foi criado como base para aplicações corporativas contendo autenticação JWT, autorização baseada em papéis (RBAC), auditoria, documentação automática da API e infraestrutura pronta para Docker.

---

# Status do Projeto

> 🚧 Em desenvolvimento

### Roadmap

- [x] Estrutura inicial do monorepo
- [x] Docker Compose
- [x] Configuração centralizada (ConfigModule + Zod)
- [x] Swagger/OpenAPI
- [x] AppConfigModule
- [ ] Prisma
- [ ] Autenticação JWT
- [ ] Refresh Tokens
- [ ] RBAC
- [ ] Auditoria
- [ ] Logging com Pino
- [ ] Redis
- [ ] Testes
- [ ] Frontend React

---

# Tecnologias

## Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- Swagger / OpenAPI
- Zod
- Pino
- Vitest

## Frontend

- React
- Vite
- TypeScript
- Material UI

## Infraestrutura

- Docker
- Docker Compose
- Redis

---

# Estrutura do Projeto

```text
admin-panel-template-node/

├── apps/
│   ├── api/
│   │   ├── prisma/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── prisma/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── permissions/
│   │   │   ├── logs/
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── .env.example
│   │   └── package.json
│   │
│   └── webapp/
│
├── docker/
│
├── docs/
│
└── docker-compose.yml
```

---

# Arquitetura

O backend segue a arquitetura modular recomendada pela equipe do NestJS.

Cada módulo possui responsabilidade única e pode conter:

- Module
- Controller
- Service
- DTOs
- Interfaces
- Providers

A infraestrutura é desacoplada através de módulos próprios, como:

- AppConfigModule
- PrismaModule
- AuthModule
- LoggingModule
- CacheModule

---

# Pré-requisitos

- Docker
- Docker Compose
- Node.js 22+
- npm

---

# Executando o Projeto

## Clone o repositório

```bash
git clone git@github.com:usuario/admin-panel-template-node.git

cd admin-panel-template-node
```

---

## Configure as variáveis de ambiente

```bash
cp apps/api/.env.example apps/api/.env
```

Edite o arquivo conforme necessário.

Para gerar chaves JWT seguras:

```bash
openssl rand -base64 64
```

---

## Suba a infraestrutura

```bash
docker compose up -d
```

Serão iniciados:

- PostgreSQL
- Redis

---

## Execute a API

```bash
cd apps/api

npm install

npm run start:dev
```

---

## Acesse

API

```
http://localhost:3000/api
```

Swagger

```
http://localhost:3000/docs
```

---

# Desenvolvimento

Toda a configuração da aplicação é centralizada no módulo `config`.

As variáveis de ambiente são:

- validadas pelo Zod;
- carregadas pelo ConfigModule;
- consumidas exclusivamente pelo AppConfigService.

Nenhum módulo acessa `process.env` diretamente.

---

# Documentação

Toda a documentação do projeto encontra-se em:

```text
docs/
```

Atualmente ela é composta por:

- 01-project-setup.md
- 02-nestjs-basics.md
- 03-prisma.md
- 04-authentication.md
- 05-authorization.md
- 06-logging.md
- 07-caching.md
- 08-testing.md
- 09-deployment.md
- architecture.md
- environment.md

---

# Roadmap Técnico

Infraestrutura

- ConfigModule
- Prisma
- Logging
- Cache
- Docker

Segurança

- JWT
- Refresh Tokens
- RBAC
- Auditoria

Qualidade

- Testes unitários
- Testes de integração
- Swagger
- Versionamento da API

Frontend

- React
- Material UI
- Autenticação
- Controle de permissões
- Dashboard

---

# Objetivos do Projeto

Este boilerplate foi desenvolvido com os seguintes objetivos:

- servir como base para aplicações administrativas;
- demonstrar boas práticas utilizando NestJS;
- estudar arquitetura modular;
- consolidar conhecimentos em TypeScript;
- disponibilizar um projeto de referência para futuras aplicações.

---

## 👨‍💻 Sobre o Desenvolvedor

[**Bruno Riwerson Silva**](https://www.linkedin.com/in/bruno-riwerson/) é um **desenvolvedor full-stack** apaixonado por tecnologia, jogos e boas práticas de desenvolvimento.  
Proficiente no uso de **React**, **TypeScript**, **Node.js** e **.NET**, com experiência em bancos de dados **relacionais e não relacionais**, e foco em criar soluções **eficientes, acessíveis e bem estruturadas**.
