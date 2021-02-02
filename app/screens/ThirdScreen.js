import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native'
import img from '../assets/ThirdPage/pizz.png'
import { FontAwesome } from '@expo/vector-icons'
import DropDownPickerComponent from '../components/DropDownPickerComponent'
import imgOrange from '../assets/ThirdPage/orange.png'

import ButtonComp from '../components/ButtonComp'
import CardDescription from '../components/CardDescription'

export default function ThirdScreen() {
  return (
    <ScrollView>
      <Image source={img} style={styles.topImage} />
      <View style={styles.container}>
        <Text style={{ marginTop: 20, fontSize: 22 }}>
          Tandoori Chicken Pizza
        </Text>

        <View style={styles.stars}>
          <FontAwesome name='star' size={24} color='#EE5A30' />
          <FontAwesome name='star' size={24} color='#EE5A30' />
          <FontAwesome name='star' size={24} color='#EE5A30' />
          <FontAwesome name='star' size={24} color='#EE5A30' />
          <FontAwesome name='star-o' size={24} color='#EE5A30' />
        </View>
        <View style={styles.price}>
          <View>
            <Text style={{ color: '#EE5A30', fontSize: 11 }}>
              4 Star Ratings
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 31 }}>Rs. 750</Text>
            <Text>/per Portion</Text>
          </View>
        </View>

        <Text style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 10 }}>
          Description
        </Text>
        <Text numberOfLines={2} style={{ marginBottom: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          reprehenderit quis neque exercitationem ut totam alias.
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
          Customize your Order
        </Text>

        <View style={{ marginVertical: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <DropDownPickerComponent
              taille={'100%'}
              text={'- Select the size of portion -'}
            />
          </View>
          <View>
            <DropDownPickerComponent
              taille={'100%'}
              text={'- Select the ingredients -'}
            />
          </View>
        </View>

        <View style={styles.portion}>
          <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
            Number of Portions{' '}
          </Text>
          <View style={styles.portionButton}>
            <ButtonComp text={'-'} color={'orange'} />
            <ButtonComp text={'2'} color={'white'} />
            <ButtonComp text={'+'} color={'orange'} />
          </View>
        </View>
        <View style={styles.containerList}>
          <Image source={imgOrange} style={styles.image} />
          <View style={{ position: 'absolute' }}>
            <CardDescription title={'Total Price'} subtitle={'LKR 1500'} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topImage: {
    height: 365,
    width: '100%',
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    marginTop: -40,
    paddingHorizontal: 20,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  stars: {
    flexDirection: 'row',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portionButton: {
    flexDirection: 'row',
  },
  image: {
    height: 171,
    width: 91,
    marginLeft: -20,
  },
})
