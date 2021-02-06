import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function ExploreScreen() {
  const [items, setItems] = React.useState([
    { name: 'A+', code: '#e74c3c', text: 'Gives: A+,AB+', text2: 'Recieves: A+,A-,O+,O-' },
    { name: 'A-', code: '#e74c3c' , text: 'Gives: A+,A-,AB+,AB-', text2: 'Recieves: A-,O-' },
    { name: 'B+', code: '#e74c3c', text: 'Gives: B+,AB+', text2: 'Recieves: B+,B-,O+,O-' },
    { name: 'B-', code: '#e74c3c' , text: 'Gives: B+,B-,AB+,AB-', text2: 'Recieves: B-,O-' },
    { name: 'O+', code: '#e74c3c' , text: 'Gives: A+,B+,AB+,O+', text2: 'Recieves: O+,O-'},
    { name: 'O-', code: '#e74c3c' , text: 'Gives: Everyone', text2: 'Recieves: O-' },
    { name: 'AB+', code: '#e74c3c', text: 'Gives: AB+', text2: 'Recieves: Everyone' },
    { name: 'AB-', code: '#e74c3c', text: 'Gives: AB+,AB-', text2: 'Recieves: A-,B-,AB-,O-' },
    // { name: 'WISTERIA', code: '#8e44ad' },
    // { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    // { name: 'SUN FLOWER', code: '#f1c40f' },
    // { name: 'CARROT', code: '#e67e22' },
    // { name: 'ALIZARIN', code: '#e74c3c' },
    // { name: 'CLOUDS', code: '#ecf0f1' },
    // { name: 'CONCRETE', code: '#95a5a6' },
    // { name: 'ORANGE', code: '#f39c12' },
    // { name: 'PUMPKIN', code: '#d35400' },
    // { name: 'POMEGRANATE', code: '#c0392b' },
    // { name: 'SILVER', code: '#bdc3c7' },
    // { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          <Text style={styles.itemText}>{item.text}</Text>
          <Text style={styles.itemText2}>{item.text2}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemText2: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});