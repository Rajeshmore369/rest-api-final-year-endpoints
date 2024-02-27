import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import * as Location from "expo-location";

const NearByPoliceStation = () => {
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

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/near+by+police+station/@${latitude},${longitude},15z/data=!3m1!4b1!4m17!1m13!4m12!1m4!2m2!1d73.9006975!2d18.4484184!4e1!1m6!1m2!1s0x3bc2ea57883ae87f:0xb2747f9cff326216!2sFV2R%2BR9P+Haweli+Police+Station,+Katraj+-+Kondhwa+Rd,+Kondhwa+Budruk,+Pune,+Maharashtra+411048!2m2!1d73.8909584!2d18.4520947!2m2!3m1!5e2?entry=ttu`;
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
        <TouchableOpacity style={styles.button} onPress={openGoogleMaps}>
          <Text style={styles.buttonText}>Open in Google Maps</Text>
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

export default NearByPoliceStation;
