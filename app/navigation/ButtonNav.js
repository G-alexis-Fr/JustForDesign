import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ButtonNav() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <FontAwesome name='home' size={40} color={'white'} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6B7B7',
    borderWidth: 10,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 20,
    // position: 'absolute',
  },
})
