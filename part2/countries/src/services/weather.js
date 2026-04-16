// src/services/weather.js
import axios from 'axios'

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

const getWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  const request = axios.get(url)
  return request.then(response => response.data)
}

export default { getWeather }