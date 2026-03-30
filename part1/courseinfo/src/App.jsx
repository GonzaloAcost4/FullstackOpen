import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total' // importamos los componentes que creamos en la carpeta components para usarlos en el componente padre (App.jsx) 

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // Destructuring del objeto course
  const { name, parts } = course

  return ( // los props se pasan como atributos a los componentes hijos (Header, Content y Total) desde la función padre (App.jsx)
    <div>
      <Header course={name} /> 
      <Content parts={parts} />    
      <Total parts={parts} />   
    </div>
  ) 
}

export default App