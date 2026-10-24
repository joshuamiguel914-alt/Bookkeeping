# The Master Guide to Bookkeeping & Accounting

A responsive learning site for bookkeeping and accounting fundamentals, built with Next.js, TypeScript, PostgreSQL, and Prisma. Lessons use Philippine context and Philippine pesos (₱), with notes where reporting rules vary.

## Features

- Dashboard with chapter progress and recent quiz scores.
- Ten learning modules and chapter quizzes with saved score history.
- Worksheet route intentionally returns a 404 for now.
- Sign up with a name, Gmail address, password, and password confirmation; new accounts are signed in immediately without email verification.
- Sign in with an account ID or Gmail address and password.
- Password hashing, signed HTTP-only sessions, and database-backed progress and quiz history.
- Light and dark themes, with the selected theme saved in the browser.

## Tech stack

- Next.js 15 App Router and React 19
- TypeScript
- PostgreSQL and Prisma
- `bcryptjs` for password hashing, `jose` for signed sessions, and Zod for request validation

## Requirements

- Node.js 20 or newer
- PostgreSQL 14 or newer

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env`. Set:
   - `DATABASE_URL` to your PostgreSQL connection string.
   - `SESSION_SECRET` to a randomly generated value with at least 32 characters.

   Keep `.env` private and do not commit it.

3. Generate the Prisma client and apply the current schema to a new or development database:

   ```bash
   npm run db:generate
   npx prisma db push
   ```

   `db push` synchronizes a database directly to the Prisma schema and does not create migration history. Review its proposed changes carefully before using it with any database containing data.

4. Start the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Generate the Prisma client and build the Next.js application. |
| `npm start` | Start the production Next.js server. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run the TypeScript type check. |
| `npm run db:generate` | Generate the Prisma client. |
| `npm run db:migrate` | Create and apply a development migration. |
| `npm run db:deploy` | Apply committed Prisma migrations in a deployment environment. |

There is no automated test script or test suite in the repository at this time. The repository also does not currently include a Prisma migrations directory. If you adopt migrations, create and review them in development, commit them, and then apply them with `db:deploy`; do not assume that `db:push` is a substitute for production migration planning.

## Project structure

```text
app/                  Next.js pages, layouts, styles, and API routes
  api/                Authentication, progress, and quiz endpoints
  login/ signup/      Sign-in and registration pages
  modules/            Module index and chapter lesson pages
  quiz/               Quiz index and chapter quiz pages
  worksheet/          Intentional 404 page
components/           Shared UI and client-side controls
data/
  content/            Ten chapter lesson records and content types
  quizzes/            Ten chapter quizzes and quiz types
lib/                  Prisma, session authentication, and HTTP helpers
prisma/               Prisma database schema
.github/workflows/    Continuous integration checks
```

## Environment variables

| Variable | Used for |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection used by Prisma. |
| `SESSION_SECRET` | Signing and verifying user sessions; must be at least 32 characters. |

## Deploying to Render

The `render.yaml` Blueprint configures a Node.js web service in Singapore. In Render, create a Blueprint instance from this repository and set the service's `DATABASE_URL` to the PostgreSQL database's Internal Database URL. The Blueprint generates `SESSION_SECRET`.

Render uses `npm ci && npm run build` to install dependencies and build the application, then `npm start` to launch it. The build generates Prisma Client. The current Blueprint does not automatically run database migrations; review and apply any future schema changes using a deliberate database migration process. Keep production connection strings and secrets in Render, not in the repository.

The GitHub Actions workflow runs lint and type checks on pushes to `main` and on pull requests.

## Educational note

The lessons are for learning and are not professional tax, legal, or accounting advice. Check current Philippine reporting requirements with a qualified professional.
