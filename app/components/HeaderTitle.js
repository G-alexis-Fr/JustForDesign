import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function HeaderTitle({ design, title, title2 }) {
  design === 'TopView'
    ? (design = styles.TopView)
    : (design = styles.SecondList)

  return (
    <View style={design}>
      <Text style={{ fontSize: 26, fontFamily: 'Metro' }}>{title}</Text>
      {title2 === 'cart' ? (
        <Feather name='shopping-cart' size={24} color='black' />
      ) : (
        <Text style={{ color: 'orange' }}>View all</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  TopView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  SecondList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})
