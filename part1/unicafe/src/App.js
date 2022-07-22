import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // bonus statistics
  const all = good + bad + neutral
  const average = ((good * 1) + (bad * -1)) / 2
  const positive = (good / all) * 100

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Bad
      </button>
      <h2>Statistics</h2>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>--- Bonus Statistics ---</div>
      <div>All: {all}</div>
      <div>Average: {average}</div>
      <div>Positive: {positive}%</div>
    </>

  )
}

export default App
