import { useState, useEffect } from 'react'
import Filter from './Components.jsx/Filter'
import PersonForm from './Components.jsx/PersonForm'
import Persons from './Components.jsx/Persons'
import personService from './services/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
  
    const existingPerson = persons.find(p => p.name === newName) 
    
    if (existingPerson) { //Persona con el mismo nombre ya existe en el estado
      if (existingPerson.number !== newNumber) { //El número es diferente, se actualiza el número de la persona existente
        updatePerson(existingPerson.id, newName, newNumber)
        setSuccessMessage(`Updated ${newName}'s number`)
      } else {
        alert(`${newName} is already added to phonebook with the same number`) //El número es el mismo, se muestra una alerta y no se hace nada
      }
    } else {
      const PersonObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(PersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`Added ${newName}`)
        })
    }
    
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          personService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })
        })
    }
  }

  const updatePerson = (id, name, number) => {
    if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {
      personService
        .update(id, { ...persons.find(p => p.id === id), number })
        .then(() => {
          personService
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })
        })
    }
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <p style={{ color: 'green', 
        fontWeight: 'bold', 
        backgroundColor: 'lightgray',
        fontSize: '16px', 
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '20px',
        marginTop: '10px',
        width: '300px',}}
        >{successMessage}</p>
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={removePerson} />
    </div>
  )
}

export default App