import PropTypes from 'prop-types'
import Weather from './Weather'

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
      <p style={{ margin: '3px 0' }}>capital {country.capital?.[0] || 'N/A'}</p>
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

export default CountryDetail
