import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputStyles = ({ iconName, placeholder, onChange, value }) => {
  return (
    <View style={styles.name}>
      <FontAwesome name={iconName} size={30} color="white" />
      <TextInput
        style={styles.text}
        value={value}
        onChangeText={(val) => onChange(val)}
        placeholder={placeholder}
        placeholderTextColor={"white"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    flexDirection: "row",
    // borderColor: "red",
    // borderWidth: 2,
    justifyContent: "space-around",
    paddingVertical: 10,
    alignItems: "flex-end",
    marginTop: 40,
  },
  text: {
    borderColor: "#F57C00",
    borderBottomWidth: 2,
    width: 300,
    height: 40,
    color: "white",
    fontSize: 17,
  },
});
export default InputStyles;
