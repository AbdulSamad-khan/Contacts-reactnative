import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import InputStyles from "../components/InputStyles";
import { addContacts } from "../actions";
const AddContacts = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.screen}>
      <InputStyles
        iconName="user"
        placeholder=" First Name"
        onChange={setUsername}
        value={username}
      />
      <InputStyles
        iconName="phone"
        placeholder=" Number"
        onChange={setNumber}
        value={number}
      />
      <InputStyles
        iconName="envelope-o"
        placeholder=" Email"
        onChange={setEmail}
        value={email}
      />
      <InputStyles
        iconName="location-arrow"
        placeholder=" Address"
        onChange={setAddress}
        value={address}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.btnStyles}>
          <Button
            color="#F57C00"
            title="submit"
            onPress={() => {
              dispatch(
                // actionCreator
                addContacts({
                  username,
                  number,
                  email,
                  address,
                  contactId: Math.random().toString(),
                })
              );
            }}
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
    // justifyContent: "center",
  },
  name: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "space-around",
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  text: {
    borderColor: "#F57C00",
    borderBottomWidth: 2,
    width: 300,
    height: 40,
    color: "white",
    fontSize: 17,
  },
  btnStyles: {
    width: 100,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
});

export default AddContacts;
