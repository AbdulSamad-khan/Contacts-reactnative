import React from "react";

import { useSelector } from "react-redux";
import List from "../components/List";

const Contacts = (props) => {
  const contacts = useSelector((state) => state.contacts);

  return <List navigation={props.navigation} listData={contacts} />;
};

export default Contacts;
