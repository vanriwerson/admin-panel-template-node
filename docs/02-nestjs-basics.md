# Arquitetura

O projeto utiliza a arquitetura modular recomendada pela equipe do NestJS.

Cada funcionalidade é organizada em um módulo independente contendo, quando aplicável:

- Module
- Controller
- Service
- DTOs
- Entities (ou Models)
- Interfaces
- Providers

Essa abordagem favorece o baixo acoplamento, a reutilização de código e facilita a evolução da aplicação.

---

## Estrutura inicial

Antes da implementação dos módulos de negócio, a aplicação é composta pelos seguintes módulos de infraestrutura:

### ConfigModule

Responsável por carregar e validar todas as variáveis de ambiente utilizando:

- `@nestjs/config`
- Zod

A configuração é carregada uma única vez durante a inicialização da aplicação.

---

### AppConfigModule

Módulo responsável por disponibilizar o `AppConfigService` para toda a aplicação.

O objetivo é evitar que outros módulos dependam diretamente do `ConfigService`, centralizando o acesso às configurações da aplicação.

---

## Configuração global

Durante a inicialização (`main.ts`) são configurados:

- Prefixo global `/api`
- Versionamento por URI (`/v1`)
- ValidationPipe global
- CORS
- Swagger/OpenAPI

Essas configurações são aplicadas antes da aplicação começar a receber requisições.

---

## Organização das configurações

As configurações da aplicação ficam centralizadas na pasta `src/config`.

```text
config/
├── app-config.module.ts
├── app-config.service.ts
├── configuration.ts
├── env.schema.ts
├── env.ts
└── index.ts
```

Cada arquivo possui uma responsabilidade específica:

| Arquivo                 | Responsabilidade                                                       |
| ----------------------- | ---------------------------------------------------------------------- |
| `configuration.ts`      | Mapeia as variáveis de ambiente para a estrutura interna da aplicação. |
| `env.schema.ts`         | Valida o arquivo `.env` utilizando Zod.                                |
| `env.ts`                | Centraliza as chaves utilizadas pelo `ConfigService`.                  |
| `app-config.service.ts` | Encapsula o acesso às configurações da aplicação.                      |
| `app-config.module.ts`  | Disponibiliza o `AppConfigService` globalmente.                        |
| `index.ts`              | Centraliza os exports do módulo de configuração.                       |

---

## Princípios adotados

Algumas decisões arquiteturais adotadas desde o início do projeto:

- utilizar TypeScript em modo `strict`;
- evitar acesso direto a `process.env`;
- validar todas as variáveis de ambiente durante o bootstrap;
- centralizar o acesso às configurações em um único serviço;
- manter cada responsabilidade em seu próprio módulo;
- seguir a estrutura recomendada pela comunidade NestJS.
