import { useState } from 'react'
import Button from './Components/Button'
import Header1 from './Components/Header1'
import Header2 from './Components/Header2'
import Counter from './Components/counter'
import Statistics from './Components/statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header1 text = 'give feedback' />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Header2 text = 'statistics' />
      <Counter text="good" counter = {good} />
      <Counter text="neutral" counter = {neutral} />
      <Counter text="bad" counter = {bad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App