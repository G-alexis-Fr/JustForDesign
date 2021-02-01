import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CardSecPage({ item }) {
  return (
    <View style={styles.imageContainer}>
      <View>
        <Image style={styles.image} source={item?.image} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title1}>{item?.title}</Text>
        <Text style={styles.title2}>{item?.comment} items</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 20,
  },

  image: {
    width: 70,
    height: 70,
  },
  text: {
    // backgroundColor: 'red',
    width: '85%',
    height: 87,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingStart: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    marginLeft: -35,
  },
  title1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
  title2: {
    fontSize: 11,
    color: '#B6B7B7',
  },
})
