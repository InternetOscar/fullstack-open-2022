const Header = (props) => {
  // const course = 'Half Stack application development'
  console.log(props);

  return (
    <>
      <h1>{props.course}</h1>
    </>

  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>

  )
}


const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>Part: {props.part.name} - Exercises: {props.part.exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Total exercises: {props.total_exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts[0].exercises + parts[1].exercises + parts[2].exercises)
  return (
    <>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total total_exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />

    </>
  )
}


export default App;
