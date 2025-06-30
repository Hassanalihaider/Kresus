import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
  const graphData = [30, 45, 25, 60, 35, 75, 40];
  const maxValue = Math.max(...graphData);
  const graphHeight = 80;
  const graphWidth = 200;
  const barWidth = 4;
//   const totalBars = graphData.length;
//   const spacing = (graphWidth - (totalBars * barWidth)) / (totalBars - 1);

  return (
    <View style={styles.summaryCard}>
      <View style={styles.summaryTopSection}>
        <Text style={styles.currencyhead}>{currency}</Text>
        <Text style={styles.cryptoTotalValue}>{totalValue}</Text>
        <View style={styles.cryptoChangeRow}>
          <Text style={[
            styles.cryptoChangeText,
            isPositive ? styles.positiveChange : styles.negativeChange
          ]}>
            {changeAmount} ({changePercentage})
          </Text>
          <Text style={styles.cryptoChangeTime}> @ {time}</Text>
        </View>
      </View>

      <View style={[styles.graphContainer, { height: graphHeight, width: graphWidth }]}>
        <View style={styles.graphBackground}>
          {/* <View style={styles.graphLineContainer}>
            {graphData.map((value, index) => {
              const height = (value / maxValue) * graphHeight;
              const left = index * (barWidth + spacing);
              const backgroundColor = isPositive ? '#4CAF50' : '#F44336';
              
              return (
                <View 
                  key={index}
                  style={[
                    styles.graphBar,
                    { 
                      left,
                      height,
                      backgroundColor,
                      width: barWidth,
                    }
                  ]}
                />
              );
            })}
          </View> */}
          
          <View style={styles.graphDottedLine} />
        </View>
      </View>

      <View style={styles.timeFilterContainer}>
        {['1D','1W', '1M', '1Y', 'ALL'].map((filter) => (
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
