import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Contacts from "../Screens/Contacts";
import ContactDetails from "../Screens/ContactDetails";
import AddContacts from "../Screens/AddContacts";
import FavoriteContacts from "../Screens/FavoriteContacts";
import UpdateContact from "../Screens/UpdateContact";
// Stack Naivgator for contacts
const navigationStyles = {
  headerStyle: {
    backgroundColor: "#F57C00",
    // accentColor: #424242
  },
  headerTintColor: "white",
};
const contactStack = createStackNavigator(
  {
    Contacts: Contacts,
    ContactDetails: ContactDetails,
    UpdateContact: UpdateContact,
  },
  {
    defaultNavigationOptions: navigationStyles,
  }
);

const addContactStack = createStackNavigator(
  {
    AddContacts: AddContacts,
  },
  {
    defaultNavigationOptions: navigationStyles,
  }
);
const favoritesStack = createStackNavigator(
  {
    Favorites: FavoriteContacts,
    // ContactDetails: ContactDetails,
  },
  {
    defaultNavigationOptions: navigationStyles,
  }
);
// Tabs Navigator for contacts

const contactTabNavigator = createBottomTabNavigator({
  Contacts: contactStack,
  AddContacts: addContactStack,
  FavoriteContacts: favoritesStack,
});
export default createAppContainer(contactTabNavigator);
