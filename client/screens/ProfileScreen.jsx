import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const handleLogin = () => {
    // Logic for login button press
  };

  const authData = useSelector((state) => state.auth.authData?.result);

  console.log(authData)

  const handleResetPIN = () => {
    // Logic for reset PIN button press
  };

  return (
    <View style={styles.profileSection}>
      <View style={styles.profileContainer}>
        <View style={styles.imageWomen}>
          <Image
            source={require('../assets/women.webp')}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.name}> {authData.fullName} </Text>
        <View style={styles.profileInfo}>
          <Text> {authData.email} </Text>
          <Text style={styles.text}>Home:  {authData.home} </Text>
          <Text style={styles.text}>Work: {authData.work} </Text>
          <Text style={styles.text}>Mobile:  {authData.mobile} </Text>
          <View style={styles.profileButtons}>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleResetPIN} style={styles.button}>
              <Text style={styles.buttonText}>Reset PIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  profileContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: 'hidden',
  },
  imageWomen: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginLeft: 50,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  profileInfo: {
    padding: 20,
  },
  text: {
    marginVertical: 5,
    color: '#666',
  },
  profileButtons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#c83564',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
    borderRadius: 5,
    margin: 7,

  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
