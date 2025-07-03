import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../assets/index';

const { width } = Dimensions.get('window');

interface Props {
  onClose: () => void;
}

const WelcomeOverlay: React.FC<Props> = ({ onClose }) => {
  return (
    <View style={styles.overlay}>
      <LinearGradient
        colors={['#0A0E27', '#1d66db']} 
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Image source={Images.crossoverlay} />
        </TouchableOpacity>

        <Image
          source={Images.logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>
          Start trading and{'\n'}earning now.{'\n'}Fund your wallet.
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Image source={Images.primary} style={styles.icons1} />
          <Text style={styles.primaryText}>Buy Crypto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={Images.primary1} style={styles.icons} />
          <Text style={styles.secondaryText1}>Transfer Crypto into Kresus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={Images.primary2} style={styles.icons1} />
          <Text style={styles.secondaryText}>Connect Coinbase</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose}>
          <Text style={styles.laterText}>Maybe Later</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default WelcomeOverlay;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  container: {
    width: width * 0.85,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 0.5,
    borderColor: 'lightblue',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
  },
  logo: {
    height: 80,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 26,
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 32,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryText: {
    color: '#0A0E27',
    fontWeight: 'bold',
    marginLeft: 55,
  },
  secondaryButton: {
    flexDirection: 'row',
    borderRadius: 32,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2D3B78',
  },
  secondaryText: {
    color: '#fff',
    marginLeft: 35,
  },
  secondaryText1: {
    color: '#fff',
    marginLeft: 15,
  },
  laterText: {
    color: '#AAB2D5',
    marginTop: 8,
    fontSize: 14,
  },
  icons: {
    width: 36,
    height: 24,
    marginRight: 10,
  },
  icons1:{
    width: 24,
    height: 25,
    marginRight: 10,
  }
});
