import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./contexts/reducers";
import BottomTabNavigator from "./components/navigations/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
                <BottomTabNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

