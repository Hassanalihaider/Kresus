import React from 'react'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SplashScreen, HomeScreen, OtpScreen, OtpSuccessScreen,UserNameScreen} from '../screens/index'
import {BottomNavigator} from './BottomNavigator'

const routeNames = {
   splash: "Splash",
  homeScreen: "Home",
  welcome: "Welcome",
  BottomNavigator: "BottomNavigator",

  otp: "Otp",
   otpSuccessScreen: "OtpSuccess",
   username: "UserName"
}as const

export type AppNavigatorParamList = {
  Splash: undefined
  Welcome: undefined
  Home: undefined
  Otp: { email: string }
  OtpSuccess: undefined
  BottomNavigator: undefined
  UserName:undefined
}

const Stack = createNativeStackNavigator<AppNavigatorParamList>()
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false ,animation: 'none',}}>
        <Stack.Screen name= {routeNames.splash} component={SplashScreen} />
      <Stack.Screen name= {routeNames.welcome} component={WelcomeScreen} />
      <Stack.Screen name={routeNames.homeScreen} component={HomeScreen} />
      <Stack.Screen name={routeNames.otp} component={OtpScreen} />
      <Stack.Screen name={routeNames.otpSuccessScreen} component={OtpSuccessScreen} />
      <Stack.Screen name={routeNames.BottomNavigator} component={BottomNavigator} />
        <Stack.Screen name={routeNames.username} component={UserNameScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator;
