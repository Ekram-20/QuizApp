import { PropsWithChildren } from 'react'
import { View, StyleSheet } from 'react-native'


const Card = ({ children }: PropsWithChildren) => {

  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    gap: 15,
    // ios shadow
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    // android shadow
    elevation: 4, 
  },
})

export default Card