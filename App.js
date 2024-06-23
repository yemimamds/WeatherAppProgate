import React, { useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';
import axios from 'axios';
import { API_KEY } from './src/constants';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('');

  const searchWeather = (location) => {
    setStatus('loading'); // Set status to "loading"

    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.main.temp = (data.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
        data.visibility = (data.visibility / 1000).toFixed(2); // Convert visibility to kilometers
        setWeatherData(data);
        setStatus('success'); // Set status to "success"
      })
      .catch((error) => {
        console.error(error);
        setStatus('error'); // Set status to "error" if request fails
      });
  };

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color="#FF69B4" />
          </View>
        );
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return (
          <View style={[styles.centered, styles.errorContainer]}>
            <Text style={styles.errorText}>Something went wrong. Please try again with a correct city name.</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WeatherApp</Text>
      <WeatherSearch searchWeather={searchWeather} />
      {renderComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFF00', // Yellow color
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
