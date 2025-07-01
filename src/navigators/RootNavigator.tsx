import React from 'react'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SplashScreen, HomeScreen} from '../screens/index'
import {BottomNavigator} from './BottomNavigator'

const routeNames = {
  splash: "Splash",
  homeScreen: "Home",
  welcome: "Welcome",
  BottomNavigator: "BottomNavigator",
}
export type AppNavigatorParamList = {
  Splash: undefined
  Welcome: undefined
  Home: undefined
  BottomNavigator: undefined
}

const Stack = createNativeStackNavigator()
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false ,animation: 'none',}}>
        <Stack.Screen name= {routeNames.splash} component={SplashScreen} />
      <Stack.Screen name= {routeNames.welcome} component={WelcomeScreen} />
      <Stack.Screen name={routeNames.BottomNavigator} component={BottomNavigator} />
    </Stack.Navigator>
  )
}

export default RootNavigator;
