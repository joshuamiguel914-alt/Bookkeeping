# The Master Guide to Bookkeeping & Accounting

A responsive, full-stack bookkeeping and accounting learning site built with Next.js, TypeScript, PostgreSQL, and Prisma. Lessons use Philippine accounting context and Philippine pesos (₱), with jurisdiction-specific notes where rules differ.

## Requirements

- Node.js 20+
- PostgreSQL 14+

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set:
   - `DATABASE_URL`: PostgreSQL connection string.
   - `SESSION_SECRET`: randomly generated secret with at least 32 characters.

   Do not commit `.env`.

3. Create the PostgreSQL database named in `DATABASE_URL`, then apply the Prisma schema:

   ```bash
   npx prisma db push
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

## Features

- Dashboard, all 10 chapter modules, chapter quizzes with saved score history, and a worksheet page that currently returns 404.
- Sign up with a name, Gmail address, and password; passwords must match and each email can only be registered once. New users are signed in immediately without email verification.
- Sign in with a Gmail address or account ID and password.
- Password hashing, signed HTTP-only sessions, and database-backed chapter completion and quiz history.
- Switchable light/dark theme; the selection is saved in the browser.

Lessons are maintained in `data/content/`, one chapter per file. Quiz questions are kept separately under `data/quizzes/`.

Email verification was removed to avoid needing an SMTP account. It can be added back later with a provider such as Brevo or Resend.

## Production notes

Run `npm run build` to build the application. For an existing database, run `npx prisma db push` to apply the updated schema and remove the unused verification table and field. Configure HTTPS and a production PostgreSQL database before accepting real users. The lessons are educational material, not professional tax, legal, or accounting advice; check current local reporting requirements with a qualified professional.
