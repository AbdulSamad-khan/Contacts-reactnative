import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Details = ({ iconName, info }) => {
  return (
    <View style={styles.infoContainer}>
      <FontAwesome name={iconName} size={40} color="white" />
      <Text style={styles.text}> {info} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 20,
  },
});
export default Details;
