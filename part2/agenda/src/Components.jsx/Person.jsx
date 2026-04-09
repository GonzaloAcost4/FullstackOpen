import propTypes from 'prop-types'
const Person = ({ person }) => {
  return (
    <li>{person.name}: {person.number}</li>
  )
}

Person.propTypes = {
  person: propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    id: propTypes.number.isRequired
  }).isRequired
}

export default Person