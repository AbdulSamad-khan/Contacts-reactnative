export const addContacts = (contactDetails) => {
  return {
    type: "ADD_CONTACT",
    payload: contactDetails,
  };
};
