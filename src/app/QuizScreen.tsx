import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";

import QuestionCard from "../components/QuestionCard";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";

const QuizScreen = () => {

  const { question, questionIndex, onNext, totalQuestions, isDone} = useQuizContext();

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
            <Text style={styles.time}>20 sec</Text>
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
