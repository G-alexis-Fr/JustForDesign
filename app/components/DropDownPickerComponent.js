/* eslint-disable react/prop-types */
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

export default function DropDownPickerComponent({ taille, text }) {
  return (
    <DropDownPicker
      items={[
        {
          label: text,
          value: text,
          hidden: true,
        },
      ]}
      defaultValue={text}
      containerStyle={{ width: taille, height: 50 }}
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
  )
}
