# Batch 11 Assessment 2 - Hono & Prisma Todo API

Disclaimer: this README.md is AI-generated, however, all the work is done by hands.

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
