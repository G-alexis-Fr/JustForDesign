import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function TextInputComp() {
  return (
    <View>
      <TextInput style={styles.textInput} placeholder='Search food' />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#ecf0f1',
  },
})
