// import type { Survey, Question } from "@prisma/client";

// export type SurveyWithQuestions = Survey & {
//   questions: Question[];
// };
export type SurveyWithQuestions = SurveyOutline & {
  questions: Question[];
};

export type QuestionOutline = {
  text: string;
  rating: number;
};

export type QuestionFromApi = QuestionOutline & {
  _id: string;
};

export type Question = QuestionOutline & {
  id: string;
};

export interface SurveyOutline {
  name: string;
  email: string;
  waiter: string;
  comments: string;
  new: boolean;
  questions?: QuestionOutline[];
}
