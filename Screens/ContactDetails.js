import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Details from "../components/Details";

const ContactDetails = (props) => {
  const details = props.navigation.getParam("contactInfoDetails");
  return (
    <View style={styles.screen}>
      {console.log("render Method")}
      <Image
        source={require("../img/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png")}
        style={styles.contactImage}
      />
      <Details iconName="user" info={details.username} />
      <Details iconName="phone" info={details.number} />
      <Details iconName="envelope-o" info={details.email} />
      <Details iconName="location-arrow" info={details.address} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#424242",
  },
  contactImage: {
    height: 150,
    width: 150,
    marginTop: 10,
    marginLeft: 10,
  },
});
ContactDetails.navigationOptions = (navigationData) => {
  return {
    headerRight: (
      <View style={{ paddingRight: 10 }}>
        <MaterialIcons name="favorite" size={24} color="white" />
      </View>
    ),
  };
};
export default ContactDetails;
