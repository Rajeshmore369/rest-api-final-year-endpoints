import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import axios from "axios";
import { styles } from "../assets/css/login";
import { useDispatch } from "react-redux";
import { signin, signup } from "../contexts/actions/auth";

const AuthScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("login");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [home, setHome] = useState("");
  const [work, setWork] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const handleRedirect = () => {
    navigation.navigate("Home");
    console.log("Redirecting to home page...");
  };

  const handleRegister = async () => {
    try {
      await dispatch(signup({ fullName, email, home, work, mobile, password }));
      handleRedirect();
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const handleLogin = async () => {
    try {
      await dispatch(signin({ email, password }));
      handleRedirect();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const renderLoginFields = () => {
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
  };

  const renderRegistrationFieldsStep1 = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity onPress={() => setCurrentTab("registrationStep2")}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderRegistrationFieldsStep2 = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Home Address"
          value={home}
          onChangeText={(text) => setHome(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Work Address"
          value={work}
          onChangeText={(text) => setWork(text)}
        />
        <TouchableOpacity onPress={() => setCurrentTab("registrationStep3")}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </>
    );
  };
  const renderRegistrationFieldsStep3 = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Mobile No."
          value={mobile}
          onChangeText={(text) => setMobile(text)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => handleRegister()}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderRegistrationFields = () => {
    switch (currentTab) {
      case "registrationStep1":
        return renderRegistrationFieldsStep1();
      case "registrationStep2":
        return renderRegistrationFieldsStep2();
      case "registrationStep3":
        return renderRegistrationFieldsStep3();
      default:
        return null;
    }
  };

  return (
    <ImageBackground
      source={require("../assets/women.webp")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.loginSection}>
          <View style={styles.loginContainer}>
            <View>
              <Text style={styles.heading}>
                {currentTab === "login" ? "Login" : "Registration"}
              </Text>
            </View>
            <View>
              {currentTab === "login"
                ? renderLoginFields()
                : renderRegistrationFields()}
            </View>
            {(currentTab === "registrationStep2" ||
              currentTab === "registrationStep3") && (
              <TouchableOpacity
                onPress={() => setCurrentTab("registrationStep1")}
              >
                <Text style={styles.button}>Back</Text>
              </TouchableOpacity>
            )}

            <Text
              onPress={() =>
                setCurrentTab(
                  currentTab === "login" ? "registrationStep1" : "login"
                )
              }
              style={styles.switch}
            >
              {currentTab === "login"
                ? "Don't have an account, Register"
                : "Already have an account, Login"}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AuthScreen;
