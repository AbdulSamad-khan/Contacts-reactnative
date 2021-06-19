import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../actions";
import Form from "../components/Form";
const AddContacts = (props) => {
  const dispatch = useDispatch();

  const handleAction = (contact) => {
    // calling an action creator to add data
    dispatch(addContacts(contact));
  };
  return (
    <Form
      title="Submit"
      handleAction={handleAction}
      purpose="add"
      navigation={props.navigation}
    />
  );
};

export default AddContacts;
