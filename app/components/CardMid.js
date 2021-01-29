import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function CardMid({ item }) {
  console.log({ item }, 'middle card')
  return (
    <View>
      <Image style={styles.image} source={item?.image} />
      <Text style={styles.title}>{item?.title}</Text>
      <View style={styles.cardView}>
        <AntDesign name='star' size={15} color='orange' />
        <Text>{item?.rate}</Text>
        <Text style={{ color: '#95a5a6' }}>
          {' '}
          ({item?.comment} ratings) Cafe . Western Food
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    paddingStart: 20,
  },
  cardView: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
    alignItems: 'center',
    paddingStart: 20,
  },
})
