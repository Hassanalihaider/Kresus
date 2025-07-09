import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles/homestyles';

type SummaryCardProps = {
  currency?: string;
  totalValue?: string;
  changeAmount?: string;
  changePercentage?: string;
  time?: string;
  isPositive?: boolean;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
};

const {  height: screenHeight } = Dimensions.get('window');

const graphDataMap: Record<string, number[]> = {
  '1D': [20, 25, 30, 28, 26, 30, 32],
  '1W': [18, 24, 29, 31, 33, 35, 36],
  '1M': [15, 22, 27, 33, 38, 42, 47],
  '1Y': [10, 20, 25, 35, 40, 50, 55],
  'ALL': [5, 15, 20, 30, 40, 45, 50],
};

export const SummaryCard: React.FC<SummaryCardProps> = ({
  currency = 'Crypto',
  totalValue = '$21,047.82',
  changeAmount = '$547.12',
  changePercentage = '12.2%',
  time = '3:31 PM',
  isPositive = true,
  activeFilter = '1D',
  onFilterChange = () => {},
}) => {
  const chartData = {
    labels: [],
    datasets: [
      {
        data: graphDataMap[activeFilter] || [],
        color: () => '#00FF99',
        strokeWidth: 1.5,
      },
    ],
  };

  return (
    <View style={[styles.summaryCard, { height: screenHeight * 0.29, width: screenHeight * 0.47, marginRight: 40 }]}>
      <View style={styles.summaryTopSection}>
        <Text style={styles.currencyhead}>{currency}</Text>
        <Text style={styles.cryptoTotalValue}>{totalValue}</Text>
        <View style={styles.cryptoChangeRow}>
          <Text
            style={[
              styles.cryptoChangeText,
              isPositive ? styles.positiveChange : styles.negativeChange,
            ]}
          >
            {changeAmount} ({changePercentage})
          </Text>
          <Text style={styles.cryptoChangeTime}> @ {time}</Text>
        </View>
      </View>

      <LineChart
        data={chartData}
        width={screenHeight * 0.43}
        height={100}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        chartConfig={{
          backgroundColor: '#01021d',
          backgroundGradientFrom: "#040640",
          backgroundGradientTo: "#040640",
          color: () => '#00FF99',
          propsForBackgroundLines: {
            strokeDasharray: '',
          },
        }}
        bezier
        style={{
          marginVertical: 4,
          marginLeft: 5,
          borderRadius: 12,
        }}
      />

      <View style={styles.timeFilterContainer}>
        {['1D', '1W', '1M', '1Y', 'ALL'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.timeFilterButton,
              activeFilter === filter && styles.activeTimeFilterButton,
            ]}
            onPress={() => onFilterChange(filter)}
          >
            <Text
              style={[
                styles.timeFilterText,
                activeFilter === filter && styles.activeTimeFilterText,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
