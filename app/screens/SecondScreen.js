import React from 'react'
import { View, StyleSheet, FlatList, Image } from 'react-native'
import CardSecPage from '../components/CardSecPage'
import HeaderTitle from '../components/HeaderTitle'
import TextInputComp from '../components/TextInputComp'
import data from '../util/data'
import img from '../assets/SecPage/orange.png'

export default function SecondScreen() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.top}>
        <HeaderTitle design={''} title={'Menu'} title2={'cart'} />
        <TextInputComp />
      </View>

      <View style={styles.containerList}>
        <Image source={img} style={styles.image} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={data.itemSecPage}
          renderItem={({ item }) => <CardSecPage item={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flat}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    flex: 1,
  },
  top: {
    margin: 20,
  },
  image: {
    height: 485,
    width: 97,
  },
  flat: {
    position: 'absolute',
  },
})
