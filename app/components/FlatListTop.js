import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { images } from '../global/globalStyles'
import CardTop from './CardTop'

const item = [
  {
    id: 1,
    image: images.burger,
    title: 'Offers',
  },
  {
    id: 2,
    image: images.rice,
    title: 'Sri Lanka',
  },
  {
    id: 3,
    image: images.fruit,
    title: 'Italian',
  },
  {
    id: 4,
    image: images.fruit,
    title: 'Indian',
  },
]

export default function FlatListTop() {
  return (
    <View>
      <FlatList
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={item}
        renderItem={({ item }) => <CardTop item={item} />}
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
