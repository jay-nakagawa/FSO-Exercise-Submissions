const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       {props.part} {props.exercise}

//     </div>
//   )
// }




// const Footer = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
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
}

  return (
    <div>

      {/* {console.log(parts)} */}
      <Header course={course.name} />
      {/* <Content parts={parts} />
      <Footer parts={parts} /> */}

    </div>
  )
}

export default App