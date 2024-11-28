import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import QuestionCard from '../components/QuestionCard';

import questions from '../data/questions';

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
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
          <MaterialIcons name="navigate-next" style={styles.buttonIcon}/>
        </Pressable>
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
  button: {
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  buttonIcon: {
    position: 'absolute',
    right: 20,
    color: 'white',
    fontSize: 24,
  },
});

export default QuizScreen
