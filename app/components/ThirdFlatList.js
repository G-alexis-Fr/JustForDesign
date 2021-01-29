import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CardMid2 from './CardMid2'

const item = [
  {
    id: 111,
    image: require('../assets/mid2/pizza.png'),
    title: 'Cafe De Bambaa',
    rate: '4.9',
  },
  {
    id: 222,
    image: require('../assets/mid2/fruit.png'),
    title: 'Burger By Bee',
    rate: '4.7',
  },
]

export default function ThirdFlatList() {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={item}
        renderItem={({ item }) => <CardMid2 item={item} />}
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
