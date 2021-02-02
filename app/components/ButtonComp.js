/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default function ButtonComp({ text, color }) {
  let test
  if (color === 'white') {
    test = '#EE5A30'
    color = styles.buttonWhite
  } else {
    test = 'white'
    color = styles.buttonOrange
  }
  return (
    <TouchableWithoutFeedback>
      <View style={color}>
        <Text style={{ color: test }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonOrange: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE5A30',
    paddingHorizontal: 30,
    borderRadius: 20,
    height: 30,
  },
  buttonWhite: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#EE5A30',
    borderWidth: 1,
    paddingHorizontal: 30,
    borderRadius: 20,
    height: 30,
  },
})
