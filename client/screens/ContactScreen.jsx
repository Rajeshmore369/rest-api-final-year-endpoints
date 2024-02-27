import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  StatusBar,
} from "react-native";
import AppNavigator from "../components/navigations/TopTabNavigator";
const ContactScreen = () => {

  return (
    <View style={styles.container}>
       <StatusBar barStyle="dark-content" backgroundColor="#c83564" />
      <AppNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
  contactList: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: "#c0c0c0", // Customize the background color for selected card
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ContactScreen;
