import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from '../styles/homestyles';
import { Images } from '../assets/index';

export const ActionButtons: React.FC = () => {
  const actions = [
    { name: 'Earn', icon: Images.earn }, 
    { name: 'Buy', icon: Images.buy },
    { name: 'Send', icon: Images.send },
    { name: 'Receive', icon: Images.recieve },
  ];

  return (
    <View style={styles.actionButtonsContainer}>
      {actions.map((action) => (
        <TouchableOpacity key={action.name} style={styles.actionButton}>
          <Image source={action.icon} style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>{action.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

