const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback collected yet</p>
  }

  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  return (
    <div>
      <p>Total feedback: {total}</p>
      <p>Average score: {average.toFixed(2)}</p> 
      <p>Positive feedback: {positivePercentage.toFixed(1)}%</p>
    </div>
  )
}
export default Statistics