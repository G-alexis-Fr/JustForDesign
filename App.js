import React from 'react'

import NavBar from './app/navigation/NavBar'
import { useFonts } from 'expo-font'

export default function App() {
  let [fontsLoaded] = useFonts({
    altis: require('./app/assets/fonts/EtihadAltis.ttf'),
    Metro: require('./app/assets/fonts/Metropolis-Thin.otf'),
  })
  return <NavBar />
}
