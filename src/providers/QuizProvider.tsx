import { createContext, PropsWithChildren, useContext, useState } from "react";
import questions from "../data/questions";
import { Question } from "../types";

type QuizProviderProps = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectionOption: (option: string) => void;
};

const QuizContext = createContext<QuizProviderProps>({
  questionIndex: 0,
  onNext: () => {},
  setSelectionOption: () => {},
}); // give default values

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const [selectedOption, setSelectionOption] = useState("");

  const onNext = () => {
    setQuestionIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectionOption,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
