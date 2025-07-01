import React, { useRef, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

interface Props {
  onStartTyping?: () => void
  onComplete?: (otp: string) => void
}

const { width } = Dimensions.get('window')

const OTPInputBox = ({ onStartTyping ,onComplete}: Props) => {

  const inputRef = useRef<TextInput>(null)
  const [otp, setOtp] = useState<string>('')

   const handleChange = (value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, '')
    if (cleanValue.length <= 6) {
      
      if (cleanValue.length === 1 && otp.length === 0) {
        onStartTyping?.()
      }
 if (cleanValue.length === 6) {
        onComplete?.(cleanValue)
        Keyboard.dismiss()
      }

      setOtp(cleanValue)
    }
  }

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.blur()   
      setTimeout(() => {
        inputRef.current?.focus() 
      }, 100)
    }
  }

  const boxes = Array(6).fill('').map((_, index) => (
    <View
      key={index}
      style={[
        styles.box,
        otp.length === index && styles.activeBox
      ]}
    >
      <Text style={styles.digit}>{otp[index] || ''}</Text>
    </View>
  ))

  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <View style={styles.wrapper}>
        <View style={styles.boxRow}>{boxes}</View>

        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={otp}
          onChangeText={handleChange}
          maxLength={6}
          keyboardType="number-pad"
          autoFocus
          blurOnSubmit={false}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const boxSize = 45
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'center',
    width: width * 0.8,
    columnGap: 8, 

   
  },
  box: {
   width: 48,
  height: 70,
    borderWidth: 1,
    borderColor: '#ADD2FD',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(8, 12, 76, 0.66)'
  },
  activeBox: {
    borderColor: '#FFFFFF',
  },
  digit: {
  width: 26,
  height: 37,
  fontSize: 44,
  lineHeight: 37,
  textAlign: 'center',
  fontWeight: '300', 
    color: '#FFFFFF',
 
  },
  hiddenInput: {
      position: 'absolute',
  opacity: 0.05,
  height: 70, 
  width: width * 0.8,
  textAlign: 'center',
  paddingTop: 15, 
  },
})

export default OTPInputBox
