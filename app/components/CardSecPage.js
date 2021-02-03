/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function CardSecPage({ item }) {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={item?.image} />
      <View style={styles.text}>
        <Text style={styles.title1}>{item?.title}</Text>
        <Text style={styles.title2}>{item?.comment} items</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name='rightcircleo' size={30} color='#EE5A30' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    width: '75%',
    marginBottom: 15,
    alignItems: 'center',
    marginLeft: 60,
    marginTop: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 60,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  image: {
    width: 70,
    height: 70,
    marginLeft: -35,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: '#ddd',
  },
  text: {
    width: '85%',
    height: 87,
    paddingStart: 30,
    justifyContent: 'center',
  },
  title1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A4B4D',
    fontFamily: 'altis',
  },
  title2: {
    fontSize: 11,
    color: '#B6B7B7',
  },
  icons: {
    marginLeft: -20,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
})
