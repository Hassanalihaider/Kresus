import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import Background from '../../components/Background'
import { Images } from '../../assets'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppNavigatorParamList } from '../../navigators/RootNavigator'


const { width, height } = Dimensions.get('window')

export const OtpSuccessScreen = () => {
 const navigation = useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>() 

  return (
    <View style={{ flex: 1 }}>
      <Background showContent hideBottomImages={false} showLogo={true}>
        <View style={styles.container}>
          <View style={styles.modalBox}>
            <Text style={styles.successText}>Success!</Text>
            <Text style={styles.subText}>Your email has been verified</Text>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => {
               
                navigation.navigate('Welcome') 
              }}
            >
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.btnText, { color: '#4898F3' }]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: width * 0.85,
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    elevation: 6,
  },
  successText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#01032C',
  },
  subText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  primaryBtn: {
    marginTop: 24,
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#01032C',
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryBtn: {
    marginTop: 12,
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
})


