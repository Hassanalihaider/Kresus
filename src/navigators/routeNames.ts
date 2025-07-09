

export const routeNames = {
  splash: "Splash",
  welcome: "Welcome",
  homeScreen: "Home",
  otp: "Otp",
  otpSuccessScreen: "OtpSuccess",
  username: "UserName",
  BottomNavigator: "BottomNavigator",
  prosScreen: "prosScreen",
  Settings:"Settings",
  Security:"Security",
  Recovery:"Recovery",
  Privacy:"Privacy",
  Verification:"Verification",
  TokenAsset:"TokenDetail"
} as const

export type AppNavigatorParamList = {
  Splash: undefined
  Welcome: undefined
  Home: undefined
  Otp: { email: string }
  OtpSuccess: undefined
  BottomNavigator: undefined
  UserName: undefined
  Settings: undefined
  Security:undefined
  Recovery:{email:string} | undefined
  Privacy:undefined
  Verification:undefined
  TokenDetail:undefined
  // prosScreen: undefined
}
