import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
// import { Images } from '../assets'; 

interface SecurityOption {
  title: string;
  checked: boolean;
  locked: boolean;
}
 const securityOptions: SecurityOption[] = [
  { title: 'Multi-Factor Authentication', checked: true, locked: false },
  { title: 'Recovery Phone', checked: false, locked: false },
  { title: 'Insurance Coverage', checked: true, locked: true },
  { title: 'Device Biometrics', checked: false, locked: false },
  { title: 'Email Verification', checked: true, locked: false },
];

const SecurityItem = ({ title, checked, locked }: SecurityOption) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title}</Text>
    {/* {locked && <Image source={Images.lock} style={styles.icon} />}
    {checked && <Image source={Images.check} style={styles.icon} />} */}
  </View>
);

export const SecurityBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['10%', '60%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
    >
      <View style={styles.sheetContent}>
        <Text style={styles.title}>Security Settings</Text>
        <FlatList
          data={securityOptions}
          scrollEnabled={true}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <SecurityItem {...item} />}
        />
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetContent: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});

