export const addContacts = (contactDetails) => {
  return {
    type: "ADD_CONTACT",
    payload: contactDetails,
  };
};

export const updateContacts = (contactDetails) => {
  return {
    type: "UPDATE_CONTACT",
    payload: contactDetails,
  };
};
