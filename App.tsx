import 'react-native-reanimated';
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import { StatusBar, View, StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'



const App = () => {
  return (
<GestureHandlerRootView style={{ flex: 1 }}>
 
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  
</GestureHandlerRootView>
  )
}

export default App