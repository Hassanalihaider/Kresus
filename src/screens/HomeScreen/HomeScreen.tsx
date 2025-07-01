import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList, Dimensions } from 'react-native';
import { SkeletonLoader, ActionButtons, SummaryCard, MarketActivityCard, Projects, ProjectsList, SecurityBottomSheet } from '../../components';
import styles from '../../styles/homestyles';
import { Images } from '../../assets/index';

const { width: screenWidth } = Dimensions.get('window');
const renderMarketCard = () => (
<View style={{ width: screenWidth * 0.8, height: screenWidth * 0.65, marginRight: 12 }}>
  <MarketActivityCard />
</View>
);

export const HomeScreen: React.FC = () => {
  const [profilename] = useState('Nate Diggity');
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('1D');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image source={Images.profileicon} style={styles.profileIcon} />
          <Text style={styles.profileName}>{profilename}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image source={Images.scanner} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.secure} style={[styles.headerIcon, { marginLeft: 20 }]} />
          </TouchableOpacity>
        </View>
      </View>

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
      <Image source={Images.pros} style={styles.prosicon} />
      </View>

      <FlatList
            data={[1, 2, 3]} 
            horizontal
            pagingEnabled
            keyExtractor={(item, index) => `market-${index}`}
            renderItem={renderMarketCard}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />

            {/* <MarketActivityCard
              coinName="Jupiter"
              coinPrice="$1.04"
              marketCap="$1.41B"
              priceChange="0.05%"
              isPositive={true}
              buyersPercentage={36}
              sellersPercentage={64}
            /> */}

            <Text style={styles.prostext}>Projects to Try</Text>
            <Projects />
            <ProjectsList/>
            <SecurityBottomSheet/>

          </>
        ) : (
          <>
            <SkeletonLoader variant="summary" />
            <SkeletonLoader variant="actions" />
            <SkeletonLoader variant="market-activity" />
          </>
        )}
      </ScrollView>
    </View>
  );
};
