import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.cityName]}>{weatherData.name}</Text>
      <Text style={[styles.text, styles.temperature]}>{weatherData.main.temp}°C</Text>
      <Text style={[styles.text, styles.condition]}>{weatherData.weather[0].main}</Text>
      <View style={styles.weatherDetails}>
        <Text style={styles.detailText}>Humidity: {weatherData.main.humidity}%</Text>
        <Text style={styles.detailText}>Visibility: {weatherData.visibility} km</Text>
        <Text style={styles.detailText}>Wind Speed: {weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#800000',
    padding: 20,
  },
  text: {
    color: '#FFC0CB',
    fontSize: 24,
  },
  cityName: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  condition: {
    marginTop: 10,
    marginBottom: 20,
  },
  weatherDetails: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#800000',
    paddingTop: 10,
    width: '100%',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default WeatherInfo;
