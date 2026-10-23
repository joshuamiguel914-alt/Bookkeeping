import { chapter1 } from "./chapter-01";
import { chapter2 } from "./chapter-02";
import { chapter3 } from "./chapter-03";
import { chapter4 } from "./chapter-04";
import { chapter5 } from "./chapter-05";
import { chapter6 } from "./chapter-06";
import { chapter7 } from "./chapter-07";
import { chapter8 } from "./chapter-08";
import { chapter9 } from "./chapter-09";
import { chapter10 } from "./chapter-10";
import type { Chapter } from "./types";

export const chapters: Chapter[] = [
  chapter1, chapter2, chapter3, chapter4, chapter5,
  chapter6, chapter7, chapter8, chapter9, chapter10,
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}
