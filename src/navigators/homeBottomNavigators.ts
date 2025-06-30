import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';

const MyTabs = createBottomTabNavigator({
  screens: {
    home: HomeScreen,
    assets: assetsScreen,
    trade: tradeScreen,
    explore: exploreScreen
  },
});