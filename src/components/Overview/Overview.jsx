import React, { useState, useEffect } from 'react';
import { WiThermometer, WiDaySunny, WiHumidity, WiStrongWind } from 'weather-icons-react';

const mockWeatherData = {
  name: 'London',
  main: {
    temp: 15,
    humidity: 80
  },
  weather: [
    {
      description: 'clear sky',
      icon: '01d' // Example icon code from OpenWeatherMap
    }
  ],
  wind: {
    speed: 5
  }
};

const Overview = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('London'); // Default location

  useEffect(() => {
    // Simulate fetching weather data
    const fetchWeatherData = async () => {
      try {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setWeatherData(mockWeatherData);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Weather Overview</h2>
      {weatherData ? (
        <div>
          <h3 className="text-xl font-medium">{weatherData.name}</h3>
          <div className="flex items-center mb-2">
            <WiThermometer size={24} className="mr-2" />
            <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
          </div>
          <div className="flex items-center mb-2">
            <WiDaySunny size={24} className="mr-2" />
            <p className="text-lg">Weather: {weatherData.weather[0].description}</p>
          </div>
          <div className="flex items-center mb-2">
            <WiHumidity size={24} className="mr-2" />
            <p className="text-lg">Humidity: {weatherData.main.humidity}%</p>
          </div>
          <div className="flex items-center mb-2">
            <WiStrongWind size={24} className="mr-2" />
            <p className="text-lg">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Overview;