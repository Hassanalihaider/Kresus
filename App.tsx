import React from 'react'
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import { StatusBar, View, StyleSheet } from 'react-native'

const App = () => {
  return (

    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>

  )
}

export default App