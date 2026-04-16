import { useState, useEffect } from 'react'
import countryService from './services/countries'
import weatherService from './services/weather'
import CountryDetail from './components/CountryDetail'
import CountriesList from './components/CountriesList'

const App = () => { 
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  // Cuando hay un solo resultado, mostrar automáticamente su detalle
  useEffect(() => {
    if (countries.length > 0) {
      const countriesToShow = countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
      if (countriesToShow.length === 1) {
        setSelectedCountry(countriesToShow[0])
      } else {
        setSelectedCountry(null)
      }
    }
  }, [filter, countries])

  // Obtener el clima cuando hay exactamente un país
  useEffect(() => {
    if (selectedCountry && selectedCountry.capital) {
      weatherService
        .getWeather(selectedCountry.capital[0])
        .then(weatherData => {
          setWeather(weatherData)
          setNotification(null)
        })
        .catch(error => {
          // Si es 404, la ciudad no existe en OpenWeatherMap, ignorar silenciosamente
          if (error.response?.status === 404) {
            setWeather(null)
          } else {
            // Para otros errores, mostrar notificación
            setNotification('Error fetching weather data')
            setWeather(null)
          }
        })
    }
  }, [selectedCountry])

  // filtra según lo que escribe el usuario
  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Country Finder</h1>
      
      <div style={{
        padding: '20px',
        border: '1px solid gray',
        borderRadius: '5px',
        marginBottom: '20px'
        }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>find countries</label>
          <input 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '5px', width: '200px' }}
          />
        </div>
        
        <div>
          {countriesToShow.length > 10
            ? <p>Too many matches, specify another filter</p>
            : <CountriesList 
                countries={countriesToShow} 
                onSelectCountry={setSelectedCountry}
                selectedCountry={selectedCountry}
              />
          }
        </div>
      </div>
      {notification && (
        <div style={{
          padding: '10px',
          marginBottom: '20px',
          backgroundColor: '#ffcccc',
          border: '1px solid red',
          borderRadius: '5px',
          color: 'red'
        }}>
          {notification}
        </div>
      )}
      {selectedCountry && (
        <CountryDetail country={selectedCountry} weather={weather} />
      )}
    </div>
  )
}

export default App