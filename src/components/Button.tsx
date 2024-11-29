import { Pressable, Text, StyleSheet, PressableProps } from 'react-native'

type ButtonProps = {
  title: string;
} & PressableProps

const Button = ({ title, ...pressableProps }: ButtonProps) => {
  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
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
})


export default Button


