import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import Details from "../components/Details";

const ContactDetails = (props) => {
  const details = props.navigation.getParam("contactInfoDetails");
  return (
    <View style={styles.screen}>
      <Image
        source={require("../img/559-5594866_necktie-drawing-vector-round-avatar-user-icon-png.png")}
        style={styles.contactImage}
      />
      <Details iconName="user" info={details.username} />
      <Details iconName="phone" info={details.number} />
      <Details iconName="envelope-o" info={details.email} />
      <Details iconName="location-arrow" info={details.address} />
      <View style={styles.ButtonContainer}>
        <View style={styles.button}>
          <Button
            title="Edit Details"
            color="#F57C00"
            onPress={() =>
              props.navigation.navigate("UpdateContact", {
                contact: details,
              })
            }
          />
        </View>
      </View>
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
  ButtonContainer: {
    alignItems: "center",
  },
  button: {
    width: "30%",
  },
});

export default ContactDetails;
