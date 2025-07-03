import React, { useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../assets';
import { ScrollViewProps } from 'react-native';

const AnimatedBottomSheetScrollView =
  Animated.createAnimatedComponent(BottomSheetScrollView) as React.FC<
    React.PropsWithChildren<ScrollViewProps>
  >;


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ProsScreen = () => {
  const navigation = useNavigation();

  const snapPoints = useMemo(() => ['45%', '90%'], []);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0], 'clamp');
    const translateY = interpolate(scrollY.value, [0, 80], [0, -50], 'clamp');
    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'‹'}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.topImageContainer, animatedImageStyle]}>
        <Image
          source={Images.prosimage}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      <BottomSheet
        snapPoints={snapPoints}
        index={0}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.indicator}
      >
        <AnimatedBottomSheetScrollView
            style={styles.sheetContent}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            >

          <View style={styles.sheetInner}>
            <Text style={styles.title}>See What the Pros are Buying</Text>

            <Text style={styles.description}>
              Sourced from on-chain data, ‘Top Buys’ reveals which coins historically
              profitable traders are buying right now, to help you find potentially winning
              trades ahead of the rest. Please conduct your own research before making any
              trades.
            </Text>
          </View>
        </AnimatedBottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A3C',
  },
  topImageContainer: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 2,
  },
  image: {
    width: 120,
    height: 120,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 3,
  },
  backText: {
    fontSize: 26,
    color: 'white',
  },
  sheetBackground: {
    backgroundColor: '#0A0A3C',
  },
  indicator: {
    backgroundColor: '#444',
  },
  sheetContent: {
    paddingHorizontal: 20,
  },
  sheetInner: {
    paddingTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
  },
});
