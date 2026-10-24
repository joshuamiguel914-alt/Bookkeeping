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

## Lesson and quiz content

Lesson text and quiz questions are TypeScript data files, not database records or page-component literals:

- `data/content/chapter-NN.ts` contains one chapter: its slug, title, summary, sections, paragraphs, and optional worked example.
- `data/content/types.ts` defines the lesson data shape. Add key terms, common mistakes, practice questions, and recaps as clearly labeled paragraphs in a lesson section.
- `data/content/index.ts` lists the chapters in course order.
- `data/quizzes/chapter-NN.ts` contains the quiz for the matching chapter slug.
- `data/quizzes/types.ts` defines supported question shapes, and `data/quizzes/index.ts` lists quizzes and sets shared quiz behavior.

### Adding a chapter or lesson

1. Add a `Chapter` record in `data/content/chapter-NN.ts`. Keep the slug unique and use beginner-friendly paragraphs; put a worked example in the section's optional `example` field.
2. Add the chapter export to `data/content/index.ts` in the intended course order.
3. Add the matching quiz in `data/quizzes/chapter-NN.ts` and include it in `data/quizzes/index.ts`. The lesson and quiz `chapterSlug` values must match.
4. Add at least five distinct questions, each with one correct answer and a short explanation. Prefer 5–10 questions based on lesson length; check calculations and answer keys before merging.
5. Run `npm run lint`, `npm run typecheck`, and `npm run build`.

### Adding quiz questions

Question types are discriminated by `type`. Multiple-choice and true/false questions use a zero-based `answerIndex`; for true/false, use `options: ["True", "False"]`. Fill-in-the-blank questions list acceptable exact answers; the checker ignores surrounding whitespace and letter case, so include any legitimate alternate wording explicitly.

```ts
import type { QuizQuestion } from "@/data/quizzes/types";

const multipleChoiceQuestion: QuizQuestion = {
  type: "multiple-choice",
  prompt: "Which formula is the accounting equation?",
  options: ["Assets = Liabilities + Equity", "Assets = Income + Expenses"],
  answerIndex: 0,
  explanation: "The equation shows that assets are financed by liabilities and equity.",
}

const trueFalseQuestion: QuizQuestion = {
  type: "true-false",
  prompt: "A debit always increases every account.",
  options: ["True", "False"],
  answerIndex: 1,
  explanation: "The effect of a debit depends on the account type.",
}

const fillInTheBlankQuestion: QuizQuestion = {
  type: "fill-in-the-blank",
  prompt: "Assets = Liabilities + ___.",
  acceptedAnswers: ["equity", "owner's equity"],
  explanation: "Equity is the residual interest after liabilities are deducted from assets.",
}
```

The shared settings in `data/quizzes/index.ts` set the passing score (75%), the attempt limit (three attempts total, including the first), and shuffled question order. In-progress answers and the shuffled order are saved in the learner's browser. Completed scores are stored in PostgreSQL as `QuizAttempt` records and appear in quiz history and the dashboard; taking a quiz does not automatically mark a lesson complete. Chapter completion remains a separate lesson action. Content changes do not require a Prisma migration; changing database models does.

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
