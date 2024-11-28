import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'


type AnswerButtonProps = {
  text: string,
  isSelected?: boolean,
  onPress: () => void
}

const AnswerButton = ({ text, isSelected, onPress }: AnswerButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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


export default AnswerButton


