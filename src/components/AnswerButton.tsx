import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useQuizContext } from '../providers/QuizProvider';


type AnswerButtonProps = {
  text: string,
}

const AnswerButton = ({ text }: AnswerButtonProps) => {

  const { selectedOption, setSelectionOption } = useQuizContext();
  const isSelected = selectedOption === text;

  return (
    <TouchableOpacity
      onPress={() => setSelectionOption(text)}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 15,
    borderRadius: 100,
  },
  selectedContainer: {
    backgroundColor: '#efd5f5',
    borderColor: '#efd5f5',
  }
})


export default AnswerButton;