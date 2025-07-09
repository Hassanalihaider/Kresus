import { BottomSheetScreen } from '../screens/BottomSheetScreen/BottomSheetScreen';
import { ProsScreen } from '../screens/Pros/ProsScreen';

export const routeNames = {
  splash: "Splash",
  welcome: "Welcome",
  homeScreen: "Home",
  otp: "Otp",
  otpSuccessScreen: "OtpSuccess",
  username: "UserName",
  BottomNavigator: "BottomNavigator",
  prosScreen: "prosScreen",
  bottomscreen: "bottomscreen",
  ProsScreen: "ProsScreen"
} as const

export type AppNavigatorParamList = {
  Splash: undefined
  Welcome: undefined
  Home: undefined
  Otp: { email: string }
  OtpSuccess: undefined
  BottomNavigator: undefined
  UserName: undefined
  bottomscreen: undefined
  ProsScreen: undefined
  
}
