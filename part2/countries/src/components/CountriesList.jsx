import PropTypes from 'prop-types'

const CountriesList = ({ countries, onSelectCountry, selectedCountry }) => { 
  const handleCountryClick = (country) => {
    if (selectedCountry?.name.common === country.name.common) {
      onSelectCountry(null)
    } else {
      onSelectCountry(country)
    }
  }

  if (countries.length > 1) {
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
  
  if (countries.length === 1) {
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

export default CountriesList
