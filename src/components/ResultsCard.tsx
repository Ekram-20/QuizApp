import { Text, StyleSheet } from 'react-native'
import Card from './Card';


const ResultsCard = () => {

  return (
    <Card>
      <Text style={styles.title}>Done</Text>

     
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  answers: {
    gap: 10
  }
})

export default ResultsCard