import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import countryService from './services/countries'
import weatherService from './services/weather'
import Weather from './components/Weather'

const CountryDetail = ({ country, weather }) => {
  if (!country) return null
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid gray', 
      borderRadius: '5px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1
    }}>
      <h2 style={{ margin: '5px 0' }}>{country.name.common}</h2>
      <p style={{ margin: '3px 0' }}>capital {country.capital?.[0] || 'N/A'}</p> {/* Mostrar "N/A" si el área no está disponible para manejar el error que no se mostraban países sin registro de capitales*/}
      <p style={{ margin: '3px 0' }}>area {country.area}</p> 
      <h3 style={{ margin: '5px 0' }}>languages:</h3>
      <ul style={{ paddingLeft: '0', margin: '5px 0' }}>
        {country.languages && Object.values(country.languages).map(language => (
          <li style={{ listStyleType: 'none', margin: '2px 0' }} key={language}>
            {language} 
          </li>
        ))}
      </ul>
      <img 
        src={country.flags.png} 
        alt={`Flag of ${country.name.common}`}
        style={{ maxWidth: '200px', marginTop: '10px' }}
      />
      {country.capital && <Weather weather={weather} capital={country.capital[0]} />}
    </div>
  )
}

CountryDetail.propTypes = {
  country: PropTypes.object,
  weather: PropTypes.object
}

const CountriesList = ({ countries, onSelectCountry, selectedCountry }) => { 
  const handleCountryClick = (country) => {
    if (selectedCountry?.name.common === country.name.common) { // Si el país ya está seleccionado, deseleccionarlo
      onSelectCountry(null)
    } else {
      onSelectCountry(country) // Seleccionar el país clickeado
    }
  }

  if (countries.length > 1) { // Si hay más de un país, mostrar la lista con botones
    return (
      <div>
        {countries.map(country => (
          <div key={country.name.common} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '5px 0' }}>
            <p style={{ margin: '0' }}>{country.name.common}</p>
            <button onClick={() => handleCountryClick(country)}>
              {selectedCountry?.name.common === country.name.common ? 'Hide' : 'Show'}
            </button>
          </div>
        ))}
      </div>
    )
  }
  
  if (countries.length === 1) { // Si hay exactamente un país, mostrar su nombre sin botón
    return (
      <div style={{ padding: '10px 0' }}>
        <p style={{ margin: '0' }}>{countries[0].name.common}</p>
      </div>
    )
  }
  
  return null
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
  onSelectCountry: PropTypes.func.isRequired,
  selectedCountry: PropTypes.object
}

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