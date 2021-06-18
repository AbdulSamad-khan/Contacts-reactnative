import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ContactNavigator from "./Navigator/ContactNavigator";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
const App = () => {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <ContactNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
  },
});

export default App;
