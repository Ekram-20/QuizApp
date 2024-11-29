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
    isDone: boolean;
};

const QuizContext = createContext<QuizProviderProps>({
    questionIndex: 0,
    score: 0,
    onNext: () => {},
    setSelectionOption: () => { },
    totalQuestions: 0,
    isDone: false,
}); // give default values

export const QuizProvider = ({ children }: PropsWithChildren) => {
    
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    const [selectedOption, setSelectionOption] = useState("");
    const [score, setScore] = useState(0);
    const totalQuestions = questions.length;
    const isDone = questionIndex >= totalQuestions;

    const restart = () => {
        setSelectionOption("");
        setScore(0);
        setQuestionIndex(0);
    };

    const onNext = () => {
        if (isDone) {
            restart();
            return;
        }
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
                totalQuestions,
                isDone
            }}
        >
        {children}
        </QuizContext.Provider>
    );
};

export const useQuizContext = () => useContext(QuizContext);
