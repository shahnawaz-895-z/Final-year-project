// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValidEmail(emailRegex.test(text));
  };

  const validatePassword = (text) => {
    setPassword(text);
    setIsValidPassword(text.length >= 6);
  };

  const handleSignUp = () => {
    // Sign-Up logic (e.g., API call)
    console.log('Sign Up with:', { name, email, contact, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      {name ? <Icon name="checkmark-circle-outline" size={20} color="green" style={styles.icon} /> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
      />
      {isValidEmail ? (
        <Icon name="checkmark-circle-outline" size={20} color="green" style={styles.icon} />
      ) : (
        email && <Icon name="close-circle-outline" size={20} color="red" style={styles.icon} />
      )}

      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={contact}
        onChangeText={setContact}
        keyboardType="phone-pad"
      />
      {contact ? <Icon name="checkmark-circle-outline" size={20} color="green" style={styles.icon} /> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={validatePassword}
        secureTextEntry
      />
      {isValidPassword ? (
        <Icon name="checkmark-circle-outline" size={20} color="green" style={styles.icon} />
      ) : (
        password && <Icon name="close-circle-outline" size={20} color="red" style={styles.icon} />
      )}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {confirmPassword === password && confirmPassword ? (
        <Icon name="checkmark-circle-outline" size={20} color="green" style={styles.icon} />
      ) : (
        confirmPassword && <Icon name="close-circle-outline" size={20} color="red" style={styles.icon} />
      )}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Already Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupLink}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialIconsContainer}>
        <Icon name="logo-facebook" size={35} color="blue" style={styles.socialIcon} />
        <Icon name="logo-twitter" size={35} color="#1DA1F2" style={styles.socialIcon} />
        <Icon name="logo-google" size={35} color="red" style={styles.socialIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 50,
    paddingLeft: 40,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 40,
    top: 100, // Adjust this based on your input position
  },
  signUpButton: {
    backgroundColor: '#3b0b40',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#000',
  },
  signupLink: {
    color: 'red',
    marginLeft: 5,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default SignUpScreen;
