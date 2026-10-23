export type LessonSection = {
  title: string;
  body: string[];
  example?: string;
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  part: string;
  summary: string;
  duration: string;
  sections: LessonSection[];
};
