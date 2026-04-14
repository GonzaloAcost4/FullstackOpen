import Person from './Person'
import propTypes from 'prop-types'

const Persons = ({ persons, onDelete, onUpdate }) => {
  return (
    <ul>
      {persons.map(person => (
        <Person key={person.id} person={person} onDelete={onDelete} onUpdate={onUpdate} />
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
  ).isRequired,
  onDelete: propTypes.func.isRequired,
  onUpdate: propTypes.func.isRequired
}

export default Persons