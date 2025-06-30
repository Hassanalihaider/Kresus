import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SkeletonLoader, ActionButtons, SummaryCard, MarketActivityCard } from '../components';
import styles from '../styles/homestyles';
import { Images } from '../assets/index';

export const HomeScreen: React.FC = () => {
  const [profilename] = useState('Nate Diggity');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeFilter, setActiveFilter] = useState('1D');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const renderFooterItem = (tabName: string) => {
    const iconSource = Images[tabName.toLowerCase() as keyof typeof Images] || Images.home;
    const isActive = activeTab === tabName;
    
    return (
      <TouchableOpacity 
        key={`tab-${tabName}`}
        style={styles.footerItem} 
        onPress={() => setActiveTab(tabName)}
      >
        <Image
          source={iconSource}
          style={[
            styles.footerIcon,
            isActive ? styles.activeFooterIcon : styles.inactiveFooterIcon
          ]}
        />
        <Text style={[
          styles.footerText,
          isActive ? styles.activeFooterText : styles.inactiveFooterText
        ]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            source={Images.profileicon}
            style={styles.profileIcon}
          />
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
            <SummaryCard 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <ActionButtons />
            <View style={styles.prossection}>
              <Text style={styles.prostext}>What the Pros are Buying</Text>
              <Image source={Images.pros} style={styles.prosicon} />
            </View>
            
            <MarketActivityCard 
              coinName="Jupiter"
              coinPrice="$1.04"
              marketCap="$1.41B"
              priceChange="0.05%"
              isPositive={true}
              buyersPercentage={36}
              sellersPercentage={64}
            />
          </>
        ) : (
          <>
            <SkeletonLoader variant="summary" />
            <SkeletonLoader variant="actions" />
            <SkeletonLoader variant="market-activity" />
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {['Home', 'Assets', 'Trade', 'Explore'].map(renderFooterItem)}
      </View>
    </View>
  );
};