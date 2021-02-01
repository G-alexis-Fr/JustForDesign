import React from 'react'
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native'
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
        <ImageBackground
          source={img}
          style={styles.image}
        >
          <FlatList
            
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={data.itemSecPage}
            renderItem={({ item }) => <CardSecPage item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </ImageBackground>
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
    flex: 1,
    
  },

  orangeBloc: {
    zIndex: 0,
    backgroundColor: '#FC6011',
    height: 485,
    width: 97,
    left: 0,
    top: 50,
    borderTopRightRadius: 45,
    borderBottomRightRadius: 45,
  },
})
