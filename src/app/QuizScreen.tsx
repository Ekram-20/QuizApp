import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

import QuestionCard from "../components/QuestionCard";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import { useEffect, useState } from "react";

const QuizScreen = () => {

  const { question, questionIndex, onNext, totalQuestions, isDone } = useQuizContext();
  const [timer, setTimer] = useState(20);
  
  useEffect(() => {

    setTimer(20);

    // make function that decrease every 1s
    const interval = setInterval(() => {
      setTimer((t) => {
        // decrease when it is in the time limited
        if (t > 0)
          return (t - 1)
        // when the 20 is finish move to the next question
        onNext();
        return 0
      })
    }, 1000); // in seconds
    
    // clear previous question timer
    return () => clearInterval(interval)

  }, [question]); // make timer for each question when it change

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question {questionIndex + 1}/{totalQuestions}</Text>
        </View>

        {/* body */}
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>{timer} sec</Text>
          </View>
        ) : (
          <ResultsCard />
        )}

        {/* footer */}
        <Button title={isDone? "Restart" : "Next"} onPress={onNext} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: "purple",
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    textAlign: "center",
    marginTop: 10,
    color: "purple",
    fontWeight: "500",
  },
});

export default QuizScreen;
