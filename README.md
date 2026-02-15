# Batch 11 Assessment 2 - Hono & Prisma Todo API

Disclaimer: this README.md is AI-generated, however, all the work is done by hands.

## Showcases
<img width="1438" height="900" alt="Screenshot 2026-02-15 at 21 31 15" src="https://github.com/user-attachments/assets/4ccb1ebd-715a-467c-afad-5c4a5b38a7e7" />
<img width="1439" height="900" alt="Screenshot 2026-02-15 at 21 31 28" src="https://github.com/user-attachments/assets/02f88ff9-5882-4b3f-abbc-a0427cc01a4c" />
<img width="1437" height="896" alt="Screenshot 2026-02-15 at 21 31 43" src="https://github.com/user-attachments/assets/eef63a63-6287-4b6b-b730-fbc33831dc7e" />
<img width="1438" height="816" alt="Screenshot 2026-02-15 at 21 32 00" src="https://github.com/user-attachments/assets/4a4a194d-59d8-4cab-a305-7ca2052c152a" />
<img width="1440" height="899" alt="Screenshot 2026-02-15 at 21 32 50" src="https://github.com/user-attachments/assets/fa1e0448-b3d7-403a-aedd-ca24d54da04e" />
<img width="1440" height="820" alt="Screenshot 2026-02-15 at 21 33 04" src="https://github.com/user-attachments/assets/41272db6-0a0f-4d08-8c39-1bbc7669bd27" />
<img width="1437" height="900" alt="Screenshot 2026-02-15 at 21 36 20" src="https://github.com/user-attachments/assets/5dfbd337-1caa-4841-b803-337d920a1e52" />
<img width="1439" height="900" alt="Screenshot 2026-02-15 at 21 36 52" src="https://github.com/user-attachments/assets/8f9e9d0d-4baa-4fe9-bca4-eb10c75430d4" />
<img width="1440" height="820" alt="Screenshot 2026-02-15 at 21 37 08" src="https://github.com/user-attachments/assets/6288a405-c882-4391-9a37-bcc7430b6b53" />


# Todo API

## Introduction

This project is a high-performance Todo API built with [Hono](https://hono.dev/), [Prisma](https://www.prisma.io/), and [better-sqlite3](https://github.com/WiseLibs/better-sqlite3).

## Getting Started: Step-by-Step Commands

### 1. Project Initialization

```bash
pnpm create hono@latest
```

This was used to bootstrap the project. It sets up the initial folder structure, TypeScript configuration, and the Hono framework.

### 2. Installing Database Dependencies

```bash
pnpm i prisma @prisma/client @prisma/adapter-better-sqlite3 better-sqlite3
```

This installs the full database stack:

- `prisma`: The CLI tool for migrations and generation.
- `@prisma/client`: The runtime library used to query the database.
- `better-sqlite3`: A high-performance SQLite driver for Node.js.
- `@prisma/adapter-better-sqlite3`: The bridge that allows Prisma to use `better-sqlite3` instead of the default library.

### 3. Prisma Setup

```bash
pnpm prisma init --datasource-provider sqlite
```

Initializes the Prisma environment. It creates the `prisma/schema.prisma` file and configures it to use SQLite as the database provider.

### 4. Environment and Tooling

```bash
pnpm i prisma dotenv
```

Ensures that the Prisma CLI and `dotenv` are available. `dotenv` is used in `prisma.config.ts` to load your `DATABASE_URL` and other secrets from the `.env` file.

### 5. Validation Setup

```bash
pnpm i zod @hono/zod-validator
```

Installs the validation layer used in `src/modules/todos/route.ts`. `zod` defines the shapes of your data (like `createTodoSchema`), and `@hono/zod-validator` acts as middleware to reject invalid requests before they reach your logic.

### 6. Database Migrations

```bash
pnpm prisma migrate dev
```

Takes the models defined in your `schema.prisma`, creates a SQL migration file, and applies it to your `dev.db`. This keeps your database tables in sync with your TypeScript code.

### 7. Generating the Client

```bash
pnpm prisma generate
```

This command reads your schema and generates a type-safe Prisma Client. In this project, the client is generated into `src/generated/prisma`, which is why our imports in `src/utils/prisma.ts` point to that specific local directory.

### 8. Troubleshooting Native Bindings

```bash
pnpm rebuild better-sqlite3
```

Since `better-sqlite3` is a native C++ module, it must be compiled for your specific operating system and Node.js version. If you see an error like "Could not locate the bindings file," running this command forces `pnpm` to recompile the library for your current environment.

## Development

To start the development server with hot-reloading:

```bash
pnpm dev
```
