import React from "react";
import { useSelector } from "react-redux";
import { Button, View } from "react-native";
import List from "../components/List";

const FavoriteContacts = (props) => {
  const favoriteContacts = useSelector((state) => state.favoriteContacts);

  return <List listData={favoriteContacts} navigation={props.navigation} />;
};

export default FavoriteContacts;
