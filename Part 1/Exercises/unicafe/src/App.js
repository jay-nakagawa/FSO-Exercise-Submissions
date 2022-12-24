import { useState } from 'react'

const Button = (props) =>{
  return (
    <button>{props.text}</button>
  )

}

const Stats = (props) =>{
  return (
    <div>{props.text}: {props.count}</div>
  )

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(5)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        
        <Button text = "good"/>
        <Button text = "neutral"/>
        <Button text = "bad"/>
      </div>

      <div>
        <h2>statistics</h2>
        <Stats text= "good" count= {good} />
        <Stats text= "neutral" count= {neutral} />
        <Stats text= "bad" count= {bad} />
      </div>
    </div>

  )
}

export default App
