import Person from './Person'
import propTypes from 'prop-types'

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  )
}

Persons.propTypes = {
  persons: propTypes.arrayOf(
    propTypes.shape({
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
        id: propTypes.number.isRequired
    })
  ).isRequired
}

export default Persons