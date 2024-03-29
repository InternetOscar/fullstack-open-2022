import { useState } from 'react'

// TODO: Separate the voting function from the quote
const VoteCount = (props) => {
  
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const array_len = anecdotes.length;

  const points = Array(array_len + 1).join('0').split('').map(parseFloat);

  const copy = [...points]
  // copy[2] += 1 || CAN SET ARRAY VALUE HERE
  console.log(copy);

  const [selected, setSelected] = useState(0)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>

      <button onClick={() => setSelected[selected] + 1}>Vote </button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>New Quote</button>

    </div >
  )
}

export default App
