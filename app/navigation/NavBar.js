import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'

import FirstScreen from '../screens/FirstScreen'
import SecondScreen from '../screens/SecondScreen'
import ThirdScreen from '../screens/ThirdScreen'
import FourthScreen from '../screens/FourthScreen'

const Tab = createBottomTabNavigator()

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='First'
          component={FirstScreen}
          options={{
            tabBarIcon: () => <Feather name='menu' size={24} color='black' />,
          }}
        />
        <Tab.Screen
          name='Second'
          component={SecondScreen}
          options={{
            tabBarIcon: () => (
              <FontAwesome name='shopping-bag' size={24} color='black' />
            ),
          }}
        />
        <Tab.Screen
          name='Third'
          component={ThirdScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name='account' size={24} color='black' />
            ),
          }}
        />
        <Tab.Screen
          name='Fourth'
          component={FourthScreen}
          options={{
            tabBarIcon: () => (
              <Foundation name='indent-more' size={24} color='black' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
