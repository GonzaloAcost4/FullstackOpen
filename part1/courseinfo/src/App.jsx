import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total' // importamos los componentes que creamos en la carpeta components para usarlos en el componente padre (App.jsx) 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return ( // los props se pasan como atributos a los componentes hijos (Header, Content y Total) desde la función padre (App.jsx)
    <div>
      <Header course={course} /> 
      <Content part1 ={part1} part2 = {part2} part3 = {part3} />    
      <Total part1 = {part1} part2 = {part2} part3 = {part3} />   
    </div>
  ) 
}

export default App