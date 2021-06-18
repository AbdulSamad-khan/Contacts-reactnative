import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
const Contacts = (props) => {
  //   console.log(contacts);
  // Hepler method for listing

  const contactList = props.listData.map((contact, index) => {
    return (
      <TouchableNativeFeedback
        key={index}
        onPress={() =>
          props.navigation.navigate("ContactDetails", {
            contactInfoDetails: contact,
          })
        }
      >
        <View style={styles.listItem}>
          <FontAwesome name="user" size={30} color="white" />
          <Text style={styles.text}>{contact.username} </Text>
        </View>
      </TouchableNativeFeedback>
    );
  });

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.listContainer}>{contactList}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#424242",
  },
  listContainer: {
    width: "100%",
  },
  listItem: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 20,
  },
});

export default Contacts;
