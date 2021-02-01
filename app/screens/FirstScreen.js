import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import data from '../util/data'
import CardTop from '../components/CardTop'
import CardMid from '../components/CardMid'
import CardMid2 from '../components/CardMid2'
import DropDownPickerComponent from '../components/DropDownPickerComponent'
import HeaderTitle from '../components/HeaderTitle'
import CardBottom from '../components/CardBottom'
import TextInputComp from '../components/TextInputComp'

export default function FirstScreen() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <FlatList
        ListHeaderComponent={
          <View>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~ TOP VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <HeaderTitle
              design={'TopView'}
              title={'Good morning Akila!'}
              title2={'cart'}
            />
            <View style={styles.delivering}>
              <Text>Delivering to</Text>
              <DropDownPickerComponent />
              <TextInputComp />
            </View>
            <HeaderTitle
              design={''}
              title={'Popular Restaurents'}
              title2={''}
            />
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~ FIRST FLATLIST VIEW  IN THE HEADER OF THE SECOND FLATLIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <View>
              <FlatList
                style={styles.containerList}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data.itemFirstList}
                renderItem={({ item }) => <CardTop item={item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~ SECOND FLATLIST VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          </View>
        }
        style={styles.containerList}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        data={data.itemMiddleList}
        renderItem={({ item }) => <CardMid item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={
          <View>
            <HeaderTitle design={''} title={'Most Popular'} title2={''} />
            <View>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~ THIRD FLATLIST VIEW IN THE FOOTER OF THE SECOND F~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <FlatList
                style={styles.containerList}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data.itemThirdList}
                renderItem={({ item }) => <CardMid2 item={item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
            <HeaderTitle design={''} title={'Recent Items'} title2={''} />
            <View>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~ FOURTH FLATLIST VIEW IN THE FOOTER OF THE FOOTER OF THE THIRD FLATLIST ~~~~~~~~~~~~~~~ */}
              <FlatList
                style={styles.containerList}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                data={data.itemBottomList}
                renderItem={({ item }) => <CardBottom item={item} />}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  TopView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  delivering: {
    paddingHorizontal: 20,
  },

  SecondList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  containerList: {
    width: '100%',
  },
})
