# Variáveis de Ambiente

> Este documento descreve todas as variáveis de ambiente utilizadas pela API.
> Durante o desenvolvimento, copie o arquivo `.env.example` para `.env` e preencha os valores conforme o ambiente.

---

## Application

| Variável   | Descrição                                                                                 | Exemplo       |
| ---------- | ----------------------------------------------------------------------------------------- | ------------- |
| `PORT`     | Porta onde a API será executada.                                                          | `3000`        |
| `NODE_ENV` | Ambiente de execução da aplicação. Valores aceitos: `development`, `test` e `production`. | `development` |

---

## Database

| Variável       | Descrição                                                          | Exemplo                                                                  |
| -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `DATABASE_URL` | String de conexão utilizada pelo Prisma para acessar o PostgreSQL. | `postgresql://postgres:postgres@localhost:5440/adminpanel?schema=public` |

---

## Authentication

| Variável             | Descrição                                                                                                    | Exemplo                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `JWT_SECRET`         | Chave utilizada para assinar os Access Tokens. Recomenda-se utilizar uma chave com pelo menos 32 caracteres. | `12345678901234567890123456789012` |
| `JWT_REFRESH_SECRET` | Chave utilizada para assinar os Refresh Tokens. Deve ser diferente da chave utilizada para os Access Tokens. | `abcdefghijklmnopqrstuvwxyz123456` |

---

## Redis

| Variável     | Descrição                                                                                                                                                       | Exemplo     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `REDIS_HOST` | Host do servidor Redis. Durante o desenvolvimento local, utilize `localhost`. Quando a API estiver em um container Docker, utilize o nome do serviço (`redis`). | `localhost` |
| `REDIS_PORT` | Porta utilizada pelo servidor Redis.                                                                                                                            | `6379`      |

---

## Boas práticas

- Nunca versione o arquivo `.env`.
- Versione apenas o `.env.example`.
- Utilize valores diferentes entre os ambientes de desenvolvimento, homologação e produção.
- Não reutilize a mesma chave para `JWT_SECRET` e `JWT_REFRESH_SECRET` em ambientes produtivos.
- Sempre valide as variáveis de ambiente durante a inicialização da aplicação.

## Gerando chaves JWT

As chaves utilizadas para assinar os Access Tokens e Refresh Tokens devem ser criptograficamente seguras. Elas podem ser geradas pelos comandos:

### Linux/macOS (OpenSSL)

```bash
echo "JWT_SECRET=$(openssl rand -base64 48)"
echo "JWT_REFRESH_SECRET=$(openssl rand -base64 48)"
```

### Node.js (qualquer sistema operacional)

```bash
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(48).toString('base64')); console.log('JWT_REFRESH_SECRET=' + require('crypto').randomBytes(48).toString('base64'));"
```

Copie o resultado e cole no arquivo `.env`.

Exemplo:

```dotenv
JWT_SECRET=...
JWT_REFRESH_SECRET=...
```
