import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, deleteContact } from "../contexts/actions/contact";

const SavedContactsScreen = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    Alert.alert(
      "Delete Contact",
      "Are you sure you want to delete this contact?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => dispatch(deleteContact(id)),
        },
      ]
    );
  };

  const renderContact = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.card,
          selectedContact && selectedContact.id === item.id
            ? styles.selectedCard
            : null,
        ]}
        onPress={() => setSelectedContact(item)}
      >
        <View>
          <Text style={styles.contactName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text>
            {item.phoneNumbers ? item.phoneNumbers[0]?.number : "No phone number"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderContact}
        style={styles.contactList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedCard: {
    backgroundColor: "#c0c0c0", // Customize the background color for the selected card
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SavedContactsScreen;
