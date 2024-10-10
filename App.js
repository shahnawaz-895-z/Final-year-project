// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';       // Import your login screen
import SignUpScreen from './screens/SignUpScreen';     // Import your sign-up screen
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Import your forgot password screen
import HomePage from './screens/HomePage';       // Import homepage screen
import ProfileUpdate from './screens/ProfileUpdate';  //Profile change screen
import ReportFoundItem from './screens/ReportFoundItem'; //Report Found Item Screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}  // Add Login screen in the navigator
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}  // Add Signup screen in the navigator
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}  // Add ForgotPassword screen in the navigator
        />
        <Stack.Screen
          name="HomePage"               // Add HomePage screen in the navigator
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileUpdate"               // Add ProfileUpdate screen in the navigator
          component={ProfileUpdate}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ReportFoundItem"               // Add ReportFoundItem screen in the navigator
          component={ReportFoundItem}
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
