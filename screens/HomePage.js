import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Navbar from '../components/Navbar';  // Import Navbar component

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section: Logo */}
      <Image
        source={require('../img/logo.png')} // Replace with your image path
        style={styles.logo}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REPORT LOST ITEM</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ReportFoundItem')}  
      >
      <Text style={styles.buttonText}>REPORT FOUND ITEM</Text>
      </TouchableOpacity>

      {/* Use the Navbar component */}
      <Navbar 
        onHomePress={() => navigation.navigate('HomePage')}
        onSearchPress={() => navigation.navigate('Search')}
        onMessagePress={() => navigation.navigate('Search')}
        onProfilePress={() => navigation.navigate('ProfileUpdate')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,  // Adjust the size of the logo as needed
    height: 250,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3d0c45',  // Maroon color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
//aetzaz