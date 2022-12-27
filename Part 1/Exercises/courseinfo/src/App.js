const Course = ({props}) => {
const {name,parts} = props

return(
  <div>
    <h1>{name}</h1>
    <ul>


      {parts.map(a=>
        <li key={a.id}>
          {a.name}
        
        </li>
        )}


    {/* {parts[1].name} 
    {parts[2].name}  */}
    </ul>
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
    
    <Course key= {} props={course} />
    </>
  
  )
}

export default App