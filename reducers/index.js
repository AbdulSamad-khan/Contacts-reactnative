import { combineReducers } from "redux";

const intialState = [
  {
    contactId: "asdsfsg343445",
    username: "Abdul Samad",
    number: "41561651651",
    email: "samad@gmail.com",
    address: "karachi Asif Colony",
  },

  {
    contactId: "adafs34565464",
    username: "Hamza",
    number: "101561651651",
    email: "hamza123@gmail.com",
    address: "USA long island",
  },
];
const contacts = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    default:
      return state;
  }
};
const intialFavorite = [
  {
    contactId: "adafs34565464",
    username: "Hamza",
    number: "101561651651",
    email: "hamza123@gmail.com",
    address: "USA long island",
  },
];
const favoriteContacts = (state = intialFavorite, action) => {
  return state;
};

export default combineReducers({
  contacts: contacts,
  favoriteContacts: favoriteContacts,
});
