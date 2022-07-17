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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
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
  console.log(props.total[0])
  return (
    <>
      <p>Total exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
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
      <Content parts={parts} />
      <Total total={parts} />

    </>
  )
}


export default App;
