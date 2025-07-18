import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions,KeyboardAvoidingView,Platform,ScrollView} from 'react-native'
import Background from '../../components/Background'
import OTPInputBox from '../../components/OTPInputBox'
import CheckboxRow from '../../components/CheckboxRow'
import SecondaryButton from '../../components/SecondaryButton'
import { Images } from '../../assets'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { AppNavigatorParamList } from '../../navigators/routeNames'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const { width, height } = Dimensions.get('window')

export const OtpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>()
  const route = useRoute<RouteProp<AppNavigatorParamList, 'Otp'>>()
  const email = route.params?.email || ''

  const [acceptTerms, setAcceptTerms] = useState(false)
  const [keepUpdated, setKeepUpdated] = useState(false)
  const [otpStarted, setOtpStarted] = useState(false)

  return (
    <View style={{ flex: 1 }}>
      <Background showContent hideBottomImages={false} showLogo={false}>
         <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >

          <View style={styles.wrapper}>
          
            <TouchableOpacity
              style={styles.leftIcon}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Image source={Images.backscreen} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>

           
            <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
            <Image source={Images.comment} style={styles.commentIcon} />

        
            <Text style={styles.heading}>Check Your Email</Text>

            {otpStarted && <Text style={styles.subHeading}>and spam too</Text>}

          
            <OTPInputBox onStartTyping={() => setOtpStarted(true)} 
              onComplete={() => navigation.navigate('OtpSuccess')}
              />

           
            <View style={styles.infoWrapper}>
              <Text style={styles.infoText}>Security code sent to</Text>
              <Text style={styles.emailText}>{email}</Text>
            </View>

           
            <View style={styles.resendWrapper}>
              <SecondaryButton label="Resend Code" onPress={() => {}} />
            </View>

       
            <View style={styles.divider} />

          
            <View style={styles.checkContainer}>
              <CheckboxRow
                label="Accept the Terms and Conditions"
                isChecked={acceptTerms}
                onToggle={() => setAcceptTerms(!acceptTerms)}
              />
              <CheckboxRow
                label="Keep me up to date with marketting emails"
                isChecked={keepUpdated}
                onToggle={() => setKeepUpdated(!keepUpdated)}
              />
            </View>
          </View>

          
        </KeyboardAvoidingView> 
  
      </Background>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: height * 0.03,
    justifyContent: 'flex-start',
  },
  leftIcon: {
    position: 'absolute',
    top: 70,
    left: 0,
    width: 40,
    height: 40,
    zIndex: 10,
  },
  logo: {
    position: 'absolute',
    top: 45,
    alignSelf: 'center',
    width: width * 0.3,
    height: height * 0.12,
  },
  commentIcon: {
    position: 'absolute',
    top: 70,
    right: 0,
    width: 35,
    height: 35,
  },
  heading: {
    marginTop: height * 0.2, 
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    height: 38,
  },
  subHeading: {
    marginTop: height * 0.006,
    fontSize: 15,
    lineHeight: 19,
    color: '#ADD2FD',
    textAlign: 'center',
  },
  infoWrapper: {
    marginTop: height * 0.10,
  },
  infoText: {
    fontSize: 14,
    color: '#ADD2FD',
    textAlign: 'center',
  },
  emailText: {
    fontSize: 14,
    color: '#ADD2FD',
    textAlign: 'center',
    marginTop: height * 0.01,
  },
  resendWrapper: {
    marginTop: height * 0.028,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ADD2FD33',
    marginTop: height * 0.035,
    marginBottom: height * 0.025,
  },
  checkContainer: {
    width: '100%',
    gap: 12,
    paddingLeft: 2,
  },scrollContent: {
  flexGrow: 1,
  justifyContent: 'flex-start',
},

})


