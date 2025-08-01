// import React from 'react'
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
// import { Images } from '../assets'
// import { useNavigation } from '@react-navigation/native'

// const AppHeader = ({ title }: { title: string }) => {
//   const navigation = useNavigation()

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
//         <Image source={Images.backscreen} style={styles.iconImage} />
//       </TouchableOpacity>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   )
// }

// export default AppHeader

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 30,
   
  
//     paddingHorizontal: 20,
//     backgroundColor: '#010D2A',
//     position: 'relative',
//   },
//   icon: {
//     flexDirection: 'row',
//     position: 'absolute',
//     left: 0,
//   },
//   iconImage: {
//     width: 30,
//     height: 30,
//   },
//   title: {
  
//     flex: 1,
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//   },
// })




import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Images } from '../assets'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { AppNavigatorParamList } from '../navigators/routeNames'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface AppHeaderProps {
  title: string
  showClose?: boolean 
 onBackPress?: () => void;
}

const AppHeader = ({ title, showClose = false, onBackPress }: AppHeaderProps) => {
   const navigation = useNavigation<NativeStackNavigationProp<AppNavigatorParamList>>()

 
  // const handleGoBack = () => {
  //   navigation.navigate('Settings') 
  // }
const handleGoBack = () => {
    if (onBackPress) {
      onBackPress(); // Use prop function if provided
    } else {
      navigation.goBack(); // fallback
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.icon}>
        <Image source={Images.backscreen} style={styles.iconImage} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {showClose && (
        <TouchableOpacity style={styles.rightIcon}>
         <Image source={Images.whitecross} style={styles.iconImage} /> 
        </TouchableOpacity>
      )}
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#010D2A',
    position: 'relative',
  },
  icon: {
    opacity:1,
    position: 'absolute',
    left: 20,
     zIndex: 20, 
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    top:10
  },
  iconImage: {
    width: 25,
    height: 25,
    resizeMode:'contain'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
})
