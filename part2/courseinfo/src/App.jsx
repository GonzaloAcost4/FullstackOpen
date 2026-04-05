import Course from './Components/Course' // importamos el componente Course.jsx para usarlo dentro del componente App.jsx

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Luis Advincula',
        exercises: 17,
        id: 4
      },
      {
        name: 'Quiero Queque',
        exercises: 5,
        id: 5
      } // parte de ejemplo para mostrar que el componente Content.jsx puede manejar un número variable de partes, aunque en este caso se muestra con 4 partes para mantener la consistencia con el ejercicio original
    ]
  }

  return <Course course={course} />
}

export default App