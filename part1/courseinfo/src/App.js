const Header = (props) => {
  // const course = 'Half Stack application development'

  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>Part: {props.part} - Exercises: {props.exercises}</p>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </>

  )
}

const Total = (props) => {
  return (
    <>
      <p>Total exercises: {props.total_exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const total_exercises = '31'

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total_exercises={total_exercises} />

    </div>
  )
}


export default App;
