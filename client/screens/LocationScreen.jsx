import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";

const LocationScreen = () => {
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

  useEffect(() => {
    getCurrentLocation();
    const intervalId = setInterval(getCurrentLocation, 5000);
    return () => {
      clearInterval(intervalId);
      console.log("Component unmounted");
    };
  }, []);

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(googleMapsUrl);
  };

  const handleMapPress = (event) => {
    // Get the coordinates of the pressed location
    const { coordinate } = event.nativeEvent;

    // Check if the pressed location is close to your Marker
    const markerLatitude = latitude;
    const markerLongitude = longitude;
    const threshold = 0.01; // Adjust the threshold based on your needs

    if (
      Math.abs(coordinate.latitude - markerLatitude) < threshold &&
      Math.abs(coordinate.longitude - markerLongitude) < threshold
    ) {
      // Press occurred on the Marker, handle it
      openGoogleMaps();
    }
  };

  const handlePoliceStationPress = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/near+by+police+station/@${latitude},${longitude},15z/data=!3m1!4b1!4m17!1m13!4m12!1m4!2m2!1d73.9006975!2d18.4484184!4e1!1m6!1m2!1s0x3bc2ea57883ae87f:0xb2747f9cff326216!2sFV2R%2BR9P+Haweli+Police+Station,+Katraj+-+Kondhwa+Rd,+Kondhwa+Budruk,+Pune,+Maharashtra+411048!2m2!1d73.8909584!2d18.4520947!2m2!3m1!5e2?entry=ttu`;
    Linking.openURL(googleMapsUrl);
  };

  const handleHospitalPress = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/near+by+hospital/@${latitude},${longitude},15z/data=!3m1!4b1!4m17!1m13!4m12!1m4!2m2!1d73.9006975!2d18.4484184!4e1!1m6!1m2!1s0x3bc2ea57883ae87f:0xb2747f9cff326216!2sFV2R%2BR9P+Haweli+Police+Station,+Katraj+-+Kondhwa+Rd,+Kondhwa+Budruk,+Pune,+Maharashtra+411048!2m2!1d73.8909584!2d18.4520947!2m2!3m1!5e2?entry=ttu`;
    Linking.openURL(googleMapsUrl);
  };

  const handleNGOPress = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/near+by+women+ngo/@${latitude},${longitude},15z/data=!3m1!4b1!4m17!1m13!4m12!1m4!2m2!1d73.9006975!2d18.4484184!4e1!1m6!1m2!1s0x3bc2ea57883ae87f:0xb2747f9cff326216!2sFV2R%2BR9P+Haweli+Police+Station,+Katraj+-+Kondhwa+Rd,+Kondhwa+Budruk,+Pune,+Maharashtra+411048!2m2!1d73.8909584!2d18.4520947!2m2!3m1!5e2?entry=ttu`;
    Linking.openURL(googleMapsUrl);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          onPress={handleMapPress}
          title="Your Current Location"
          description="Click for more Detailed View"
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlePoliceStationPress}
          style={styles.button}
        >
          <Ionicons name="car-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Police Station</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHospitalPress} style={styles.button}>
          <Ionicons name="medical-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Hospital</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNGOPress} style={styles.button}>
          <Ionicons name="business-outline" size={24} color="black" />
          <Text style={styles.buttonText}>NGO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default LocationScreen;
