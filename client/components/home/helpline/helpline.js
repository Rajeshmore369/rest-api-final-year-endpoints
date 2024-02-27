import React, { useState, useEffect } from "react";
import { View, Text,Alert, StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library
import * as Location from "expo-location";
import {useDispatch} from 'react-redux'
import { sendMsg } from "../../../contexts/actions/messages";
const Helpline = ({navigation}) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const dispatch = useDispatch();
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

  const sendAlert = async () => {
    try {
      const body = `I am in problem, My current location is this https://www.google.com/maps/search/?api=1&query=${latitude},${longitude} please help me, for more details move here https://www.google.com`;
      await dispatch(sendMsg(body));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.helplineContainer}>
      <View style={styles.helpline}>
      <TouchableOpacity onPress={sendAlert} style={styles.help}>
      <Icon name="exclamation-circle" size={20} color="white" style={styles.icon} />
      <Text style={styles.helpText}>Send Alert</Text>
    </TouchableOpacity>
        <View onPress={sendAlert} >
          <Text>In case of emergency, Shake the Device</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helplineContainer: {
    margin: 20,
    marginLeft: 45,
  },
  helpline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
  help: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#c83564',
    color: '#fff',
    fontWeight: '900',
    borderRadius: 10,
  },
  helpText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '900',
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
});

export default Helpline;
