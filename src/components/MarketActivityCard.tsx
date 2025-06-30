import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/homestyles';
import { Images } from '../assets/index';

type MarketActivityCardProps = {
  coinName?: string;
  coinPrice?: string;
  marketCap?: string;
  priceChange?: string;
  isPositive?: boolean;
  buyersPercentage?: number;
  sellersPercentage?: number;
  coinLogoPath?: any; 
  tradeIconPath?: any;
};

export const MarketActivityCard: React.FC<MarketActivityCardProps> = ({
  coinName = 'Jupiter',
  coinPrice = '$1.04',
  marketCap = '$1.41B',
  priceChange = '0.05%',
  isPositive = true,
  buyersPercentage = 40,
  sellersPercentage = 60,
}) => {
  return (
    <View style={styles.marketActivityCard}>
      <View style={styles.prosBuyingSection}>
        <View style={styles.coinInfoHeader}>
          <Image 
            source={Images.coinlogo}
            style={styles.coinLogo}
          />
          <Text style={styles.coinName}>{coinName}</Text>
          <TouchableOpacity style={styles.tradeButton}>
            <Image 
              source={Images.tradelogo}
              style={styles.tradeIcon}
            />
            <Text style={styles.tradeButtonText}>Trade</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.coinPrice}>{coinPrice}</Text>
        </View>
        
        <View style={styles.marketDataRow}>
          <View>
            <Text style={styles.marketCapLabel}>Mkt Cap</Text>
            <Text style={styles.marketCapValue}>{marketCap}</Text>
          </View>
          <Text style={[
            styles.priceChangeText,
            isPositive ? styles.positiveChange : styles.negativeChange
          ]}>
            {priceChange}
          </Text>
        </View>
      </View>

      <View style={styles.cardDivider} />

      <View style={styles.buyersSellersContainer}>
        <View style={[styles.buyersBar, { width: `${buyersPercentage}%` }]}>
        </View>
        <View style={[styles.sellersBar, { width: `${sellersPercentage}%` }]}>
        </View>
      </View>
      <View style={styles.BSpercent}>
       <Text style={styles.buyersText}>{buyersPercentage}% Buyers</Text>
      <Text style={styles.sellersText}>Sellers {sellersPercentage}%</Text>
      </View>
    </View>
  );
};

