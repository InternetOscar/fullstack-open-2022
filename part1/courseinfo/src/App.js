const Header = (props) => {
  // const course = 'Half Stack application development'
  console.log(props)

  return (
    <h1>{props.course}</h1>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  console.log(part1.exercises + part2.exercises + part3.exercises)
  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total_exercises={part1.exercises + part2.exercises + part3.exercises} />

    </>
  )
}


export default App;
