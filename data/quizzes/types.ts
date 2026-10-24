type MultipleChoiceQuestion = {
  type?: "multiple-choice" | "true-false";
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type FillInTheBlankQuestion = {
  type: "fill-in-the-blank";
  prompt: string;
  acceptedAnswers: string[];
  explanation: string;
};

export type QuizQuestion = MultipleChoiceQuestion | FillInTheBlankQuestion;

export type ChapterQuiz = {
  chapterSlug: string;
  questions: QuizQuestion[];
};
