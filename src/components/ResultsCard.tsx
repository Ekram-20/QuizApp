import { Text, StyleSheet } from 'react-native'
import Card from './Card';
import { useQuizContext } from '../providers/QuizProvider';


const ResultsCard = () => {

  const {score, totalQuestions} = useQuizContext()

  return (
    <Card>
      <Text style={styles.title}>Done</Text>
      <Text style={styles.body}>Correct Answers: {score}</Text>
      <Text style={styles.body}>Best Score: {totalQuestions}</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  body: {
    color: 'grey',
  }
})

export default ResultsCard