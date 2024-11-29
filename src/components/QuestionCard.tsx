import { View, Text, StyleSheet } from 'react-native'
import { Question } from '../types';
import AnswerButton from './AnswerButton'
import Card from './Card';


type QuestionCardProps = {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {

  return (
    <Card>
      <Text style={styles.question}>{question.title}</Text>

      <View style={styles.answers}>
        {question.options.map((option) => 
          <AnswerButton
            key={option}
            text={option}
          />
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