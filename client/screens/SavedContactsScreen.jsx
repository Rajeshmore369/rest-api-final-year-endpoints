import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  RefreshControl,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact } from "../contexts/actions/contact";
import Icon from "react-native-vector-icons/FontAwesome";
import { sendMsg } from "../contexts/actions/messages";
import * as Location from "expo-location";
const SavedContactsScreen = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact);
  const [selectedContact, setSelectedContact] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getContacts());
    setRefreshing(false);
  }, [dispatch]);
  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      } else {
        console.log("Location permission not granted");
      }
    } catch (error) {
      console.error("Error getting location: ", error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
    const intervalId = setInterval(getCurrentLocation, 5000);
    return () => {
      clearInterval(intervalId);
      console.log("Component unmounted");
    };
  }, []);
  const message = useSelector((state) => state.messages);
  // console.log(message);

  useEffect(() => {
    dispatch(getContacts());

    const intervalId = setInterval(() => {
      // Refresh the component every 5 seconds
      dispatch(getContacts());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log(id + "hey bhai");
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
          onPress: () => {
            dispatch(deleteContact(id));
          },
        },
      ]
    );
  };

  const sendAlert = async () => {
    try {
      const body = `I am in problem, My current location is this https://www.google.com/maps/search/?api=1&query=${latitude},${longitude} please help me, for more details move here https://www.google.com`;
      await dispatch(sendMsg(body));
    } catch (error) {
      console.log(error);
    }
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
          <Text>{item.phoneNumber ? item.phoneNumber : "No phone number"}</Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item._id)}
        >
          <Icon name="trash" size={15} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id?.toString()}
        key={(item) => item.id?.toString()}
        renderItem={renderContact}
        style={styles.contactList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <TouchableOpacity style={styles.alertButton} onPress={sendAlert}>
        <Text style={styles.alertButtonText}>Send Alert</Text>
      </TouchableOpacity>
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
    // backgroundColor: "#dfa4b7", // Customize the background color for the selected card
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "#c85d56",
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  alertButtonContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    width: 10,
    alignSelf: "center",
  },
  alertButton: {
    backgroundColor: "#c83564",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  alertButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SavedContactsScreen;
