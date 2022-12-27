const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercise}

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
       {parts.map(part=>
         <Part key={part.id} name={part.name} exercise={part.exercises}
          
          />
          )}

      
    </div>
  )
}

const Course = ({course}) => {
  console.log("this is",course.name);
  
  return(
    <div>    
      
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  
  )
    }

    const Total = ({parts}) => {

      const total = parts.reduce((runningTotal,num)=> runningTotal+num.exercises,0)
      return (
        <div>
          <p>Number of exercises {total}</p>
        </div>
      )
    }
  
  const App = () => {
    
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return( 
      <>
      
      {courses.map((parts,id)=>
    <Course key={id} course={parts} />
  )}
      </>
    
    )
  }
  
  export default App

  // courses.map(parts=>
  //   <Course course={course} />
  // )