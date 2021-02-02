/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import ButtonComp from './ButtonComp'

export default function CardDescription({ title, subtitle }) {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.text}>
        <Text style={styles.title1}>{title}</Text>
        <Text style={styles.title2}>{subtitle}</Text>
        <ButtonComp text={'Add to Cart'} color={'orange'} />
      </View>
      <View style={styles.icons}>
        <View style={styles.iconsBackground}>
          <AntDesign name='shoppingcart' size={33} color='#EE5A30' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    width: '80%',

    alignItems: 'center',
    marginLeft: 25,
    marginTop: 20,
    marginRight: 60,
    marginBottom: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,

    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icons: {
    // marginLeft: 40,
  },
  text: {
    width: '85%',
    height: 122,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    fontSize: 11,
    color: '#B6B7B7',
  },
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
  iconsBackground: {
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
    marginLeft: 10,
  },
})
