import { useState } from 'react'

const Button = (props) =>{
  return (
    <button>{props.text}</button>
  )

}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
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
      <div>good 6    </div>
      <div>neutral 2    </div>
      <div>bad 1    </div>
      </div>
    </div>

  )
}

export default App
