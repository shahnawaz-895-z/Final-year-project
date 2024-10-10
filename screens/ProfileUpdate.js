import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Navbar from '../components/Navbar';  // Import Navbar component

const ProfileUpdate = ({ navigation }) => {
  const [username, setUsername] = useState('minhaj khalil');
  const [email, setEmail] = useState('i210837@nu.edu.pk');
  const [contact, setContact] = useState('0312-5171238');
  const [password, setPassword] = useState('*****');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Empty space to create overlap effect */}
      </View>
      
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../img/profile.jpg')}  
          style={styles.profileImage}
        />
        <TouchableOpacity>
          <Text style={styles.changePictureText}>Change Picture</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <Icon name="check-circle" size={24} color="green" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Icon name="check-circle" size={24} color="green" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={contact}
            onChangeText={setContact}
            placeholder="Contact"
            keyboardType="phone-pad"
          />
          <Icon name="check-circle" size={24} color="green" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={isPasswordVisible ? password : '*****'}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon name={isPasswordVisible ? "visibility-off" : "visibility"} size={24} color="red" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>

      {/* Navbar positioned at the bottom */}
      <Navbar
        onHomePress={() => navigation.navigate('HomePage')}
        onSearchPress={() => navigation.navigate('Search')}
        onMessagePress={() => navigation.navigate('Messages')}
        onProfilePress={() => navigation.navigate('ProfileUpdate')}
        style={styles.navbar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#4c006e',
    height: 200, 
  },
  profileImageContainer: {
    position: 'absolute',
    top: 150, // Position image halfway into the header and the form
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#fff', // White border to give a clean cut between purple and white
  },
  changePictureText: {
    color: '#4c006e',
    textDecorationLine: 'underline',
  },
  formContainer: {
    padding: 20,
    marginTop: 100, // Adjust to create space for the profile image overlap
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  updateButton: {
    backgroundColor: '#4c006e',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ProfileUpdate;
