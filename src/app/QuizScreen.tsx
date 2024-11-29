import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QuestionCard from '../components/QuestionCard';

import questions from '../data/questions';
import Button from '../components/Button';

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>

        {/* header */}
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        {/* body */} 
        <View>
          <QuestionCard question={questions[0]} />
          <Text style={styles.time}>20 sec</Text>
        </View>

        {/* footer */}
        <Button
          title="Next"
          onPress={() => console.log('ek')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'center',
    marginTop: 10,
    color: 'purple',
    fontWeight: '500',
  },
});

export default QuizScreen