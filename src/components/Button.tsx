import { View, Text, StyleSheet } from 'react-native'

const Button = () => {
  return (
    <View style={styles.container}>
      <Text>AnswerButton</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 100,
  },
})


export default Button


