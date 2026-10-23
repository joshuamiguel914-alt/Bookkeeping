import { quiz as chapter1 } from "./chapter-01";
import { quiz as chapter2 } from "./chapter-02";
import { quiz as chapter3 } from "./chapter-03";
import { quiz as chapter4 } from "./chapter-04";
import { quiz as chapter5 } from "./chapter-05";
import { quiz as chapter6 } from "./chapter-06";
import { quiz as chapter7 } from "./chapter-07";
import { quiz as chapter8 } from "./chapter-08";
import { quiz as chapter9 } from "./chapter-09";
import { quiz as chapter10 } from "./chapter-10";

export const quizzes = [
  chapter1, chapter2, chapter3, chapter4, chapter5,
  chapter6, chapter7, chapter8, chapter9, chapter10,
];

export function getQuiz(chapterSlug: string) {
  return quizzes.find((quiz) => quiz.chapterSlug === chapterSlug);
}
