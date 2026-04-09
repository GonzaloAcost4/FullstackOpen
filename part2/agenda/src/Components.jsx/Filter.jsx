import propTypes from 'prop-types'

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      filter shown with{' '}
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button onClick={() => setFilter('')}>clear</button>
    </div>
  )
}

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  setFilter: propTypes.func.isRequired
}

export default Filter
