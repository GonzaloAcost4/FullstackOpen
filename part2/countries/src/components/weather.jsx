import propTypes from 'prop-types'
const Weather = ({ weather, capital }) => {
  if (!weather) return <p>Loading weather...</p>

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>temperature: {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

Weather.propTypes = {
  weather: propTypes.object,
  capital: propTypes.string.isRequired
}

export default Weather