import propTypes from 'prop-types'

const Person = ({ person, onDelete }) => {
  return (
    <li>
      {person.name}: {person.number} 
      <button onClick={() => onDelete(person.id, person.name)}>Delete</button>
    </li>
  )
}

Person.propTypes = {
  person: propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    id: propTypes.number.isRequired
  }).isRequired,
  onDelete: propTypes.func.isRequired
}

export default Person