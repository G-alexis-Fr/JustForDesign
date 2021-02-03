/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'

import FirstScreen from '../screens/FirstScreen'
import SecondScreen from '../screens/SecondScreen'
import ThirdScreen from '../screens/ThirdScreen'
import FourthScreen from '../screens/FourthScreen'
import ModalScreen from '../screens/ModalScreen'
import ButtonNav from './ButtonNav'

const Tab = createBottomTabNavigator()

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen
          name='First'
          component={FirstScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name='menu' size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Second'
          component={SecondScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='shopping-bag' size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='Modal'
          component={ModalScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0, // space from bottombar
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#B6B7B7',
                }}
              >
                <FontAwesome name='home' color='white' size={40} />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name='Third'
          component={ThirdScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name='account'
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Fourth'
          component={FourthScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Foundation name='indent-more' size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
