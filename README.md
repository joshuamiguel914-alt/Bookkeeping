# The Master Guide to Bookkeeping & Accounting

A responsive, full-stack bookkeeping and accounting learning site built with Next.js, TypeScript, PostgreSQL, and Prisma. Lessons use Philippine accounting context and Philippine pesos (₱), with jurisdiction-specific notes where rules differ.

## Requirements

- Node.js 20+
- PostgreSQL 14+
- An SMTP account for verification email

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set `DATABASE_URL`, `SESSION_SECRET`, `VERIFICATION_SECRET`, and your SMTP settings. Use separate, randomly generated secrets (at least 32 characters); do not commit `.env`.

3. Create the PostgreSQL database named in `DATABASE_URL`, then apply the schema:

   ```bash
   npx prisma migrate dev --name initial
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

## Features

- Dashboard, all 10 chapter modules, chapter quizzes with saved score history, and a worksheet page marked under development.
- Account registration and sign-in by email or account ID, with four-digit email verification, five-minute expiry, a five-attempt limit, and up to three resends per verification challenge.
- Password hashing, signed HTTP-only sessions, and database-backed chapter completion and quiz history.
- Switchable light/dark theme; the selection is saved in the browser.
- SMTP credentials and application secrets are read from environment variables.

Lessons are maintained in `data/content/`, one chapter per file. Quiz questions are kept separately under `data/quizzes/`.

## Production notes

Run `npm run build` to build the application and `npm run db:deploy` to apply committed Prisma migrations in production. Configure HTTPS, a production PostgreSQL database, and a valid SMTP sender before accepting real users. The lessons are educational material, not professional tax, legal, or accounting advice; verify local reporting requirements with a qualified professional.
