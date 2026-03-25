const Hello = (props) => {
  console.log(props)  
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Charlie'
  const age = '10'
  return (
    <>
      <h1>Greetings</h1>

      <Hello name="Alice" age={30} />
      <Hello name="Bob" age={25+10} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App