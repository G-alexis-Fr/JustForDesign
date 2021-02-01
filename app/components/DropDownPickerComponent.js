import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'


export default function DropDownPickerComponent() {
  return (
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
  )
}
