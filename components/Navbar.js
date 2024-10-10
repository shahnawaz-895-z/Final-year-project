// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Navbar = ({ onHomePress, onSearchPress, onMessagePress, onProfilePress }) => {
  return (
    <View style={styles.navBar}>
      {/* Home Button */}
      <TouchableOpacity onPress={onHomePress} style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Button */}
      <TouchableOpacity onPress={onSearchPress} style={styles.iconContainer}>
        <FontAwesome name="search" size={24} color="black" />
      </TouchableOpacity>

      {/* Message Button */}
      <TouchableOpacity onPress={onMessagePress} style={styles.iconContainer}>
        <FontAwesome name="comment" size={24} color="black" />
      </TouchableOpacity>
      
      {/*Profile Button*/}
      <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
        <FontAwesome name="user-circle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#E6E6E6',
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default Navbar;
