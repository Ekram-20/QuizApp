import { createContext, PropsWithChildren, useContext, useState } from "react";
import questions from "../data/questions";
import { Question } from "../types";

type QuizProviderProps = {
    question?: Question;
    questionIndex: number;
    onNext: () => void;
    selectedOption?: string;
    setSelectionOption: (option: string) => void;
    score: number;
    totalQuestions: number;
};

const QuizContext = createContext<QuizProviderProps>({
    questionIndex: 0,
    score: 0,
    onNext: () => {},
    setSelectionOption: () => { },
    totalQuestions: 0,
}); // give default values

export const QuizProvider = ({ children }: PropsWithChildren) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    const [selectedOption, setSelectionOption] = useState("");
    const [score, setScore] = useState(0);

    const onNext = () => {
        if (selectedOption === question.correctAnswer) {
            setScore((currentScore) => currentScore + 1)
        }
          
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
                score,
                totalQuestions: questions.length,
            }}
        >
        {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => useContext(QuizContext);
