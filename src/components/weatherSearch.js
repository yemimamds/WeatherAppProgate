import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

const WeatherSearch = ({ searchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Perform validation if needed before calling searchWeather
    if (city.trim() === '') {
      console.log('City name is empty');
      return;
    }

    searchWeather(city); // Call parent component function to search weather
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        placeholder="Enter city name..."
        onChangeText={(text) => setCity(text)}
        value={city}
      />
      <Button title="Search" onPress={handleSearch} color="#6495ED" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#FFC0CB', // Light pink background
    padding: 10,
    borderRadius: 10,
  },
});

export default WeatherSearch;
