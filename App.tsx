import 'react-native-reanimated';
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import { StatusBar, View, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </View>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: '#111',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

})
export default App