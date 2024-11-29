import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AnswerButton from './AnswerButton'
import { Question } from '../types';


type QuestionCardProps = {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {

  const [selectedOption, setSelectionOption] = useState("");
  
  const selectAnswer = (option: string) => {
    setSelectionOption(option);
    console.log(option);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.title}</Text>

      <View style={styles.answers}>
        {question.options.map((option) => 
          <AnswerButton
            key={option}
            onPress={() => selectAnswer(option)}
            text={option}
            isSelected={option === selectedOption} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    gap: 15,
    // ios shadow
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    // android shadow
    elevation: 4, 
  },
  question: {
    fontSize: 20,
    fontWeight: '500',
  },
  answers: {
    gap: 10
  }
})

export default QuestionCard