import React from 'react'
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'

import FlatListTop from '../components/FlatListTop'
import FlatListMid from '../components/FlatListMid'
import ThirdFlatList from '../components/ThirdFlatList'

export default function FirstScreen() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~ TOP VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <View style={styles.TopView}>
        <Text style={{ fontSize: 20 }}>Good morning Akila!</Text>
        <Feather name='shopping-cart' size={24} color='black' />
      </View>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~ DELIVERING VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <View style={styles.delivering}>
        <Text>Delivering to</Text>
        <DropDownPicker
          items={[
            {
              label: 'Current Location',
              value: 'Current Location',
              hidden: true,
            },
          ]}
          defaultValue={'Current Location'}
          containerStyle={{ width: '55%', height: 50 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          labelStyle={{
            fontSize: 15,
            textAlign: 'left',
            color: '#2c3e50',
            fontWeight: 'bold',
          }}
          arrowStyle={{ marginRight: 10 }}
        />
        <TextInput style={styles.textInput} placeholder='Search food' />
      </View>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~ FIRST FLATLIST VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <FlatListTop />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~ SECOND FLATLIST VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <View style={styles.SecondList}>
        <Text style={{ fontSize: 24 }}>Popular Restaurents</Text>
        <Text style={{ color: 'orange' }}>View all</Text>
      </View>
      <FlatListMid />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~ THIRD FLATLIST VIEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <View style={styles.SecondList}>
        <Text style={{ fontSize: 24 }}>Most Popular</Text>
        <Text style={{ color: 'orange' }}>View all</Text>
      </View>
      <ThirdFlatList />
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
  textInput: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#ecf0f1',
  },
  SecondList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})
