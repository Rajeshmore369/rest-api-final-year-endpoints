import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ImportContactScreen from "../../screens/ImportContactScreen"
import SavedContactsScreen from '../../screens/SavedContactsScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#c83564',
          indicatorStyle: {
            borderBottomColor: '#c83564', // Change this to the desired color
            borderBottomWidth: 2, // Change this to the desired border width
          },
        }}
        style={{ marginTop: 20 }}
      >
        <Tab.Screen name="Imported Contacts" component={ImportContactScreen} />
        <Tab.Screen name="Saved Contacts" component={SavedContactsScreen} />
      </Tab.Navigator>
  );
};

export default AppNavigator;
