import { useState } from 'react'

const Button = ({handleClick, text}) =>{
  return (
    <button onClick={handleClick}>{text}</button>
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
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        
        <Button handleClick={() => setGood(good +1)} text = "good"/>
        <Button handleClick={() => setNeutral(neutral +1)} text = "neutral"/>
        <Button handleClick={() => setBad(bad +1)} text = "bad"/>

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
