import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AnswerButton from './AnswerButton'
import { Question } from '../types';
import Card from './Card';


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
    <Card>
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
    </Card>
  )
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    fontWeight: '500',
  },
  answers: {
    gap: 10
  }
})

export default QuestionCard