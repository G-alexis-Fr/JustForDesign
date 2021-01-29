import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CardTop({ item }) {
  console.log({ item }, 'top card')
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item?.image} />
      <Text style={styles.title}>{item?.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 150,
    justifyContent: 'space-evenly',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
})
