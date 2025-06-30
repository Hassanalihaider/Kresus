import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const AppButton = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    position: 'absolute',
    bottom:1,
    alignSelf: 'center',
    zIndex: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#01032C',
  },
})