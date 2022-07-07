const Header = (props) => {
  // const course = 'Half Stack application development'

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
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
      <Content part="Fundamentals of React" exercises={10} />
      <Content part="Using props to pass data" exercises={7} />
      <Content part="State of a component" exercises={14} />
      <Total total_exercises={total_exercises} />

    </div>
  )
}


export default App;
