import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, FlatList, Dimensions, StatusBar, } from 'react-native';
// import { ActionButtons, SummaryCard, MarketActivityCard, Projects, ProjectsList, SecurityBottomSheet, SkeletonLoader } from '../../components';
import styles from '../../styles/homestyles';
import { ActionButtons } from '../../components/ActionButtons';
import { SkeletonLoader } from '../../components/SkeletonLoader';
import { SummaryCard } from '../../components/SummaryCard';
import { MarketActivityCard } from '../../components/MarketActivityCard';
import { Projects } from '../../components/Projects';
import { ProjectsList } from '../../components/ProjectsList';
import { Images } from '../../assets';
import WelcomeOverlay from '../../components/WelcomeOverlay'; 
import { DarkTheme, useNavigation } from '@react-navigation/native'
import Animated, { useSharedValue } from 'react-native-reanimated';
import { HeaderNav } from '../../components/HeaderNav';
import {BottomSheetUnified} from '../../components/BottomSheet'

// import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { routeNames } from '../../navigators/routeNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppNavigatorParamList } from '../../navigators/routeNames'

const { width: screenWidth } = Dimensions.get('window');


export const HomeScreen: React.FC = ({navigation}:any) => {
  const translateY = useSharedValue(0);
  const [profilename] = useState('Nate Diggity');
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('1D');
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
      setShowOverlay(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
    //  const navigation = useNavigation<NativeStackNavigationProp<routeNames>>() 
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <HeaderNav/>
      <ScrollView contentContainerStyle={styles.content}>
        {showContent ? (
          <>
            <FlatList
              data={[1, 2]}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              keyExtractor={(item, index) => `summary-${index}`}
              renderItem={() => (
                <SummaryCard activeFilter={activeFilter} onFilterChange={setActiveFilter} />
              )}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              snapToAlignment="center"
            />
            <ActionButtons />
            <View style={styles.prossection}>
              <Text style={styles.prostext}>What the Pros are Buying</Text>
              <TouchableOpacity onPress={() => {
                navigation.navigate('ProsScreen') 
              }}>
                  <Image source={Images.pros} style={styles.prosicon} />
              </TouchableOpacity>
              
            </View>
            <FlatList
              data={[1, 2, 3]}
              horizontal
              pagingEnabled
              keyExtractor={(item, index) => `market-${index}`}
              renderItem={() => (
                <View style={{ width: screenWidth * 0.8, height: screenWidth * 0.48, marginRight: 12 }}>
                  <MarketActivityCard />
                </View>
              )}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 25 }}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            />
            <Text style={styles.prostext}>Projects to Try</Text>
            <Projects />
            <ProjectsList />
          </>
        ) : (
          <>
            <SkeletonLoader variant="summary" />
            <SkeletonLoader variant="actions" />
            <SkeletonLoader variant="market-activity" />
          </>
        )}
      </ScrollView>

      {showOverlay && <WelcomeOverlay onClose={() => setShowOverlay(false)} />}
      
    <BottomSheetUnified screen="home" translateY={translateY} />

    </View>
  );
};
