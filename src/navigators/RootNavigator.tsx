import React from 'react'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {SplashScreen, HomeScreen} from '../screens/index'

const routeNames = {
  splash: "Splash",
  homeScreen: "Home",
  welcome: "Welcome"
}

// export type RootStackParamList = {
//   Splash: undefined; 
//   Welcome:undefined,
//   Home: undefined;

// }
const Stack = createNativeStackNavigator()
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false ,animation: 'none',}}>
        <Stack.Screen name= {routeNames.splash} component={SplashScreen} />
      <Stack.Screen name= {routeNames.welcome} component={WelcomeScreen} />
      <Stack.Screen name={routeNames.homeScreen} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigator;
