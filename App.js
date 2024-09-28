// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';       // Import your login screen
import SignUpScreen from './screens/SignUpScreen';     // Import your sign-up screen
import ForgotPasswordScreen from './screens/ForgotPasswordScreen'; // Import your forgot password screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}  // Hide the default header
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}  // Customize as needed
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}  // Customize as needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
