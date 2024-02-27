import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import { styles } from '../assets/css/login';
import { useDispatch } from 'react-redux';
const UpdateDetails = () => {
    return (
        <>
          <TextInput
            style={styles.input}
            placeholderTextColor="#000"
            placeholder="Enter your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#000"
            placeholder="Enter your Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => handleLogin()}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </>
      );
}

export default UpdateDetails