import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { View, TouchableOpacity, Text } from "react-native";
import { useSelector } from 'react-redux';

import HomeScreen from "../../screens/HomeScreen";
import ContactsScreen from "../../screens/ContactScreen";
import CameraScreen from "../../screens/CameraScreen";
import LocationScreen from "../../screens/LocationScreen";
import AuthScreen from "../../screens/AuthScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import Avez from "../../screens/Avez";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: "row",
        height: 70,
        backgroundColor: "#FFFFFF",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 15,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Icon
              name={options.tabBarIconName}
              size={30}
              color={isFocused ? "#FF6347" : "#888888"}
            />
            <Text style={{ color: isFocused ? "#FF6347" : "#888888" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const ProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Auth"
      component={AuthScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Pr"
      component={Avez}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const authData = useSelector((state) => state.auth.authData);

  useEffect(() => {
    authData?.result?.email === undefined ? setAuthenticated(false) : setAuthenticated(true);
  }, [authData]);

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      tabBarOptions={{ activeTintColor: "#FF6347", inactiveTintColor: "#888888" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIconName: "home-outline",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: "",
          tabBarIconName: "call-outline",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "",
          tabBarIconName: "camera-outline",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: "",
          tabBarIconName: "map-outline",
          headerShown: false,
        }}
      />
      {authenticated ? (
        <Tab.Screen
          name="Profile"
          component={ProfileStackNavigator} 
          options={{ tabBarLabel: "", tabBarIconName: "person-outline", headerShown: false }}
        />
      ) : (
        <Tab.Screen
          name="Auth"
          component={AuthScreen}
          options={{ tabBarLabel: "", tabBarIconName: "person-outline", headerShown: false }}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
