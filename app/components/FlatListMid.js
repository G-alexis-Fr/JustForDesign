import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import CardMid from './CardMid'

const item = [
  {
    id: 11,
    image: require('../assets/Mid/pizza.png'),
    title: 'Minute by tuk tuk',
    rate: '4.9',
    comment: '124',
  },
  {
    id: 22,
    image: require('../assets/Mid/breakfast.png'),
    title: 'Cafe Noir',
    rate: '4.7',
    comment: '120',
  },
  {
    id: 33,
    image: require('../assets/Mid/bread.png'),
    title: 'Bakes by Tella',
    rate: '4.6',
    comment: '144',
  },
]

export default function FlatListMid() {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={item}
        renderItem={({ item }) => <CardMid item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
})
