import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomPicker from "./CustomPicker";

const Height = () => {
  const items = [
    { label: "Item 1", value: "item1", height: 30 },
    { label: "Item 2", value: "item2", height: 50 },
    { label: "Item 3", value: "item3", height: 70 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Picker with Custom Height Items</Text>
      <CustomPicker items={items} defaultValue={items[0].value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Height;
