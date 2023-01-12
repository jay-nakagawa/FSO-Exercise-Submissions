const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercise}

    </div>
  )
}

const Header = ({ name }) => {
  console.log(name)
  return (


    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {

  return (


    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercise={part.exercises}

        />
      )}


    </div>
  )
}

const Course = ({ course }) => {
  console.log("this is", course.name);

  return (
    <div>

      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

  )
}

const Total = ({ parts }) => {

  const total = parts.reduce((runningTotal, num) => runningTotal + num.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}
  export default Course