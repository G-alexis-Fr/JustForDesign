/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function CardBottom({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={item?.image} />
      </View>

      <View style={styles.cardView}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text>Cafe . Western Food</Text>
        <View style={styles.lastLine}>
          <AntDesign name='star' size={15} color='#FC6011' />
          <Text>{item?.rate}</Text>
          <Text style={{ color: '#95a5a6' }}> ({item?.comment} ratings)</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 20,

  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
  cardView: {
    paddingStart: 20,
  },
  lastLine: {
    flexDirection: 'row',
  },
})
