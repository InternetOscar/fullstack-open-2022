import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  console.log(props)
  // bonus statistics
  const all = parseInt(props.good + props.bad + props.neutral)
  const average = ((props.good * 1) + (props.bad * -1)) / 2
  const positive = ((props.good / all) * 100) + "%"

  console.log(all)
  console.log(average)
  console.log(positive)

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
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


      <Statistics good={good} neutral={neutral} bad={bad} />
    </div >
  )
}

export default App
