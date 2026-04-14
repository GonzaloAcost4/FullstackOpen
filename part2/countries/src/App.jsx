import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import countryService from './services/countries'

const CountriesList = ({ countries }) => { 
  if (countries.length > 1) {
    return countries.map(country => (
      <p key={country.name.common}>{country.name.common}</p>
    ))
  }
  
  if (countries.length === 1) {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <p>capital {countries[0].capital}</p>
        <p>area {countries[0].area}</p>
        <h2>languages:</h2>
        <ul>
          {Object.values(countries[0].languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={countries[0].flags.png} alt={`Flag of ${countries[0].name.common}`} />
      </div>
    )
  }
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  // filtra según lo que escribe el usuario
  const countriesToShow = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div>
        {countriesToShow.length > 10
          ? <p>Too many matches, specify another filter</p>
          : <CountriesList countries={countriesToShow} />
        }
      </div>
    </div>
  )
}

export default App