import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { DATA } from '../mock/projects';

type DataProject = typeof DATA[0];

export const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<DataProject[]>([]);

  useEffect(() => {
    setProjects(DATA);
  }, []);

  const renderItem = ({ item }: { item: DataProject }) => (
    <View style={styles.card}>
      <Image source={item.logo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Launch</Text>
      </TouchableOpacity>
    </View>
  );

  return (
        <FlatList
       data={projects}
       renderItem={renderItem}
       keyExtractor={(item) => item.id}
       scrollEnabled={false} 
       contentContainerStyle={styles.container}
       />

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // backgroundColor: '#0a0a23',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#111132',
    borderTopWidth: 2,
    borderColor: '#1b57cf',
    // borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  label: {
    backgroundColor: '#1e1e3f',
    color: '#00e0ff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
    fontSize: 12,
  },
  name: {
    color: '#ccc',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#0a0a23',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderColor: 'lightblue',
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
