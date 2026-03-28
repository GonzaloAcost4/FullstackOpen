import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total' // importamos los componentes que creamos en la carpeta components para usarlos en el componente padre (App.jsx) 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return ( // los props se pasan como atributos a los componentes hijos (Header, Content y Total) desde la función padre (App.jsx)
    <div>
      <Header course={course} /> 
      <Content part1 ={part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3} />  
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />    
    </div>
  ) 
}

export default App