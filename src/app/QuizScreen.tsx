import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import QuestionCard from "../components/QuestionCard";

import questions from "../data/questions";
import Button from "../components/Button";
import { useState } from "react";
import ResultsCard from "../components/ResultsCard";

const QuizScreen = () => {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    setIndex((currentIndex) => currentIndex + 1);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        {/* header */}
        <View>
          <Text style={styles.title}>Question {index + 1}/5</Text>
        </View>

        {/* body */}
        {questions[index] ? (
          <View>
            <QuestionCard question={questions[index]} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <ResultsCard />
        )}

        {/* footer */}
        <Button title="Next" onPress={onNext} />
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
