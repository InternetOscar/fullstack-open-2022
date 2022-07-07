const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Oscar"
  const age = "18"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="spooky" age="1.5" />
    </div>
  )
}

export default App
