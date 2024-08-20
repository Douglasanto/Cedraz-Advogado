export interface Answer {
  content: string;
}

export interface Faq {
  question: string;
  answers: Answer[];
}