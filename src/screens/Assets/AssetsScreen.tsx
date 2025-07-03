import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const AssetsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AssetsScreen</Text>
      <View>
        <Text>
          Hello
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})