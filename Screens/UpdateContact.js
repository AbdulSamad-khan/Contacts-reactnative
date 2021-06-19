import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { updateContacts } from "../actions";
const UpdateContact = (props) => {
  const selectedContact = props.navigation.getParam("contact");
  const dispatch = useDispatch();
  const handleAction = (editContact) => {
    // calling action creater to Update data
    dispatch(updateContacts(editContact));
  };
  return (
    <Form
      title="Edit Contact"
      handleAction={handleAction}
      selectedContact={selectedContact}
      purpose="update"
      navigation={props.navigation}
    />
  );
};
export default UpdateContact;
