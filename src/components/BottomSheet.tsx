import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Images } from '../assets';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

interface Props {
  translateY: Animated.SharedValue<number>;
  screen: 'home' | 'explore' | 'pro';
}

export const BottomSheetUnified: React.FC<Props> = ({ translateY, screen }) => {
  const context = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;

      const minY =
        screen === 'home'
          ? -SCREEN_HEIGHT / 6
          : -SCREEN_HEIGHT / 1.6;
      const maxY =
        screen === 'home'
          ? -SCREEN_HEIGHT / 1.5
          : -SCREEN_HEIGHT;

      translateY.value = Math.max(translateY.value, maxY);
      translateY.value = Math.min(translateY.value, minY);
    });

  useEffect(() => {
    const initialY =
      screen === 'home'
        ? -SCREEN_HEIGHT / 6
        : -SCREEN_HEIGHT / 1.6;
    translateY.value = withSpring(initialY, { damping: 50 });
  }, [screen]);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rStyle]}>
        {screen === 'home' && (
          <>
            <View style={styles.head}>
              <Image source={Images.bottomhead} style={styles.headimg} />
              <Text style={styles.heading}>My Security Score</Text>
              <Text style={styles.numbers}>1/5</Text>
              <Image source={Images.up} style={styles.upimg} />
            </View>

            <View style={styles.linner}>
              <View style={styles.line1} />
              {[...Array(4)].map((_, i) => (
                <View key={i} style={styles.line} />
              ))}
            </View>

            <View style={styles.Lists}>
              {[
                'Advanced Verification',
                'Recovery Phone',
                'Insurance Coverage',
                'Device Biometrics',
                'Email Verification',
              ].map((item, i) => (
                <View style={styles.list} key={i}>
                  <View style={styles.L1}>
                    <Image
                      source={i < 3 ? Images.checked : Images.checked1}
                      style={styles.img1}
                    />
                    <Text style={styles.T1}>{item}</Text>
                    {i === 2 && (
                      <Image source={Images.probadge} style={styles.probdg} />
                    )}
                    {i < 3 && (
                      <Image
                        source={Images.back}
                        style={[
                          styles.backbtn,
                          i === 1 && styles.backbtn1,
                          i === 2 && styles.backbtn2,
                        ]}
                      />
                    )}
                  </View>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.button}>
              <View style={styles.btnsty}>
                <Image source={Images.secure} style={styles.secure} />
                <Text style={styles.btntext}>Manage In Settings</Text>
              </View>
            </TouchableOpacity>
          </>
        )}

        {screen === 'pro' && (
          <>
            <View style={styles.line} />
            <Text style={styles.headingPro}>See What the Pros are Buying</Text>
            <Text style={styles.toppara}>
              Swap, earn, and build on the leading decentralized crypto trading protocol.
            </Text>
            <Text style={styles.bottompara}>
              Sourced from on-chain data, ‘Top Buys’ reveals which coins historically profitable traders are buying right now, to help you find potentially winning trades ahead of the rest. Please conduct your own research before making any trades.
            </Text>
            <TouchableOpacity style={styles.launchBtn}>
              <Text style={{ color: 'white' }}>
                Launch <Text style={{ fontSize: 20, fontWeight: '600' }}>↗</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}

        {screen === 'explore' && (
          <>
            <View style={styles.line} />
            <Text style={styles.headingPro}>Uniswap</Text>
            <Text style={styles.toppara}>
              Swap, earn, and build on the leading decentralized crypto trading protocol.
            </Text>
            <Text style={styles.bottompara}>
              UniSwap is a decentralized exchange that enables the trading of digital assets. UNI is the cryptocurrency the UniSwap platform uses. Anyone can earn UNI by agreeing to not sell or trade their crypto holdings. The UniSwap platform is governed by UNI holders in proportion to how much UNI they own.
            </Text>
            <TouchableOpacity style={styles.launchBtn}>
              <Text style={{ color: 'white' }}>
                Launch <Text style={{ fontSize: 20, fontWeight: '600' }}>↗</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#030A74',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
    linner:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  line1: {
    width: 100,
    height: 4,
    backgroundColor: 'gold',
    alignSelf: 'center',
    borderRadius: 2,
    marginHorizontal: 4,
  },
  head: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  headimg: {
    fontSize: 20,
    padding: 12,
    marginBottom: 10,
    marginLeft: 20,
    tintColor: 'gold',
  },
  heading: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
    marginLeft: 30,
  },
  headingPro: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  numbers: {
    marginLeft: 70,
    marginTop: 5,
    fontSize: 18,
    color: 'gold',
  },
  upimg: {
    marginLeft: 15,
  },
  toppara: {
    color: '#ffffff',
    marginLeft: 15,
    marginRight: 100,
    marginTop: 15,
    fontWeight: '700',
  },
  bottompara: {
    color: '#ffffff',
    marginHorizontal: 15,
    marginTop: 15,
    fontWeight: '400',
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'lightblue',
    width: 175,
    borderRadius: 25,
    marginVertical: 10,
  },
  launchBtn: {
    backgroundColor: '#0a0a23',
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 15,
    borderColor: 'lightblue',
    borderWidth: 1,
    marginTop: 100,
  },
  btntext: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  backbtn: {
    fontSize: 10,
    marginLeft: 90,
    marginTop: 12,
    tintColor: 'lightblue',
  },
  backbtn1: {
    marginLeft: 143,
  },
  backbtn2: {
    marginLeft: 20,
  },
  probdg: {
    marginLeft: 50,
    marginTop: 10,
  },
  secure: {
    marginTop: 8,
  },
  btnsty: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  Lists: {},
  list: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  L1: {
    flexDirection: 'row',
  },
  T1: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  img1: {
    marginTop: 4,
    // tintColor: 'darkblue',
  },
});
