import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CardTop({ item }) {

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
    height: 120,
    justifyContent: 'space-evenly',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 10,
  },
  title: {
    width: 100,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
})
