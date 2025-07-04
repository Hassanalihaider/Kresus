import React from 'react'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {SplashScreen, HomeScreen, OtpScreen, OtpSuccessScreen,UserNameScreen} from '../screens/index'
// import {SplashScreen, HomeScreen, OtpScreen, OtpSuccessScreen, ProsScreen} from '../screens/index'
import { SplashScreen } from '../screens/Splash/SplashScreen'
import { HomeScreen } from '../screens/HomeScreen/HomeScreen'
import { OtpScreen } from '../screens/Auth/OtpScreen'
import { OtpSuccessScreen } from '../screens/Auth/OtpSuccessScreen'
// import { ProsScreen } from '../screens/Pros/ProsScreen'
import { UserNameScreen } from '../screens'
import {BottomNavigator} from './BottomNavigator'
import { routeNames, AppNavigatorParamList } from './routeNames'
import { defaultScreenOptions } from './screenOptions'


const Stack = createNativeStackNavigator<AppNavigatorParamList>()
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={defaultScreenOptions}>
      <Stack.Screen name= {routeNames.splash} component={SplashScreen} />
      <Stack.Screen name= {routeNames.welcome} component={WelcomeScreen} />
      <Stack.Screen name={routeNames.homeScreen} component={HomeScreen} />
      <Stack.Screen name={routeNames.otp} component={OtpScreen} />
      <Stack.Screen name={routeNames.otpSuccessScreen} component={OtpSuccessScreen} />
      <Stack.Screen name={routeNames.BottomNavigator} component={BottomNavigator} />
      <Stack.Screen name={routeNames.username} component={UserNameScreen} />
      {/* <Stack.Screen name={routeNames.prosScreen} component={ProsScreen}/> */}
    </Stack.Navigator>
  )
}

export default RootNavigator;
