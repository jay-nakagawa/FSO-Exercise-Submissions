// const Course = ({course}) => {
//   const {name,parts} = course
  
//   return(
//     <div>
//       <h1>{name}</h1>
//       <ul>
  
  
//         {parts.map(a=>
//           <li key={a.id}>
//             {a.name}
          
//           </li>
//           )}
  
  
//       {/* {parts[1].name} 
//       {parts[2].name}  */}
//       </ul>
//     </div>
  
//   )
//     }
const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercise}

    </div>
  )
}

const Header = ({name}) => {
  console.log(name)
  return (

    
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Content = ({parts}) => {
  
  return (

    
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  )
}

const Course = ({course}) => {
  console.log("this is",course.name);
  
  return(
    <div>
      
      
       <Header name={course.name} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  
  )
    }
  
  const App = () => {
    
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
    console.log(course.parts[1].name)
  
    return( 
      <>
      
      <Course course={course} />
      </>
    
    )
  }
  
  export default App