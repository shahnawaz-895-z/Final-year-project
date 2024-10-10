import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Import the icon
import Navbar from '../components/Navbar';  // Import Navbar component

const ReportFoundItemForm = ({ navigation }) => {
  const [time, setTime] = useState('');
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [contact, setContact] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  // Time Picker
  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = (selectedTime) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Format as HH:mm
    setTime(formattedTime);
    hideTimePicker();
  };

  // Date Picker
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirmDate = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = selectedDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`; // Format as YYYY-MM-DD
    setDate(formattedDate);
    hideDatePicker();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleSubmit = () => {
    // Handle submit logic
    console.log('Form Submitted', { time, contact, location, date, photo });
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Report Found Item</Text>

        {/* Time Picker */}
        <TouchableOpacity style={styles.input} onPress={showTimePicker}>
          <Text style={{ color: time ? '#000' : '#aaa' }}>{time || 'Select Time'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />
        
        {/* Contact Input */}
        <TextInput
          style={styles.input}
          placeholder="Contact"
          value={contact}
          onChangeText={setContact}
        />

        {/* Location Picker */}
        <Picker
          selectedValue={location}
          style={styles.input}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Select Location" value="" />
          <Picker.Item label="Location 1" value="loc1" />
          <Picker.Item label="Location 2" value="loc2" />
          {/* Add more locations here */}
        </Picker>

        {/* Date Picker */}
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text style={{ color: date ? '#000' : '#aaa' }}>{date || 'Select Date'}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
        
        {/* Image Picker with Upload Icon */}
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadText}> Upload Photo </Text>
          <Icon name="cloud-upload-outline" size={24} color="#4A235A" /> 
        </TouchableOpacity>

        {/* Display Selected Image */}
        {photo && <Image source={{ uri: photo }} style={styles.image} />}
        
        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar positioned at the bottom */}
      <Navbar
        onHomePress={() => navigation.navigate('HomePage')}
        onSearchPress={() => navigation.navigate('Search')}
        onMessagePress={() => navigation.navigate('Messages')}
        onProfilePress={() => navigation.navigate('ProfileUpdate')}
        style={styles.navbar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between', // Ensure the Navbar stays at the bottom
  },
  content: {
    padding: 20,
    flexGrow: 1, // Allow the ScrollView to grow
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 200,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadText: {
    color: '#000',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#4A235A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ReportFoundItemForm;
