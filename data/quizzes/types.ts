export type QuizQuestion = {
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type ChapterQuiz = {
  chapterSlug: string;
  questions: QuizQuestion[];
};
