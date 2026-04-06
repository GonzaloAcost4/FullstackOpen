import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '3625 175546',
      id: 1
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

 const addPerson =(event) => {
  event.preventDefault()
  const personObject = {
    name: newName,
    number: newNumber,
    id: persons.length + 1,
  }
  if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) { // Verifica nombres duplicados sin importar mayúsculas/minúsculas
    alert(`${newName} is already added to phonebook`)
    return
  }
  setPersons(persons.concat(personObject))
  setNewName('')
  setNewNumber('')
 }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}: {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App