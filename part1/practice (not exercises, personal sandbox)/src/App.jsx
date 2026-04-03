import React, { useState } from 'react'
// import Display from './components/Display'
// import Button from './components/Button'
import History from './components/History'
import Button from './components/Button'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [all, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(all.concat('L'))
    setLeft(left + 1)
    setTotal(total + 1)
  }


  const handleRightClick = () => {
    setAll(all.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={all} />
    </div>
  )
}
export default App