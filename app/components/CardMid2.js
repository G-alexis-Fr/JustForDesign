import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function CardMid2({ item }) {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item?.image} />
      <Text style={styles.title}>{item?.title}</Text>
      <View style={styles.cardView}>
        <Text style={{ marginRight: 20, color: '#B6B7B7' }}>
          Cafe . Western Food
        </Text>
        <AntDesign name='star' size={15} color='#FC6011' />
        <Text>{item?.rate}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 350,
    height: 250,
    justifyContent: 'space-evenly',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
  cardView: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20,
    alignItems: 'center',
  },
})
