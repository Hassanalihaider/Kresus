import React from 'react'
import { View, StyleSheet } from 'react-native'
import Background from '../../components/Background'
import FingerprintModal from '../../components/FingerprintModal'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppNavigatorParamList } from '../../navigators/routeNames'


export const OtpSuccessScreen = () => {

   const navigation = useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>()

  return (
    <View style={{ flex: 1 }}>
      <Background showContent hideBottomImages={false} showLogo={true}>
        <FingerprintModal
        onContinue={() => navigation.navigate('Welcome')}
         onGoBack={() => navigation.navigate('UserName')}
        />
      </Background>
    </View>
  )
}