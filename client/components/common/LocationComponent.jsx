import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import * as Location from "expo-location";

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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

  const getDirections = () => {
    const destinationLatitude = 37.7749; // Replace with your destination's latitude
    const destinationLongitude = -122.4194; // Replace with your destination's longitude
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatitude},${destinationLongitude}&origin=${latitude},${longitude}`;
    Linking.openURL(googleMapsUrl);
  };

  useEffect(() => {
    // Request the initial location when the component mounts
    getCurrentLocation();

    // Set up interval to update location every 5 seconds
    const intervalId = setInterval(getCurrentLocation, 5000);

    // Clean up interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Component unmounted");
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.locationText}>
          Current Location: {latitude.toFixed(6)}, {longitude.toFixed(6)}
        </Text>
        <TouchableOpacity style={styles.button} onPress={getDirections}>
          <Text style={styles.buttonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#c85d56",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LocationComponent;
