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

const Statistics = (props) =>{
  return (
    <div>
      <Stats text= "good" count= {props.good}/>
      <Stats text= "neutral" count= {props.neutral}/>
      <Stats text= "bad" count= {props.bad}/>
    </div>

  )

}





const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(1)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const totalFeedback= (good + neutral + bad)
  const positive= good/totalFeedback*100 + " %"
  const average= (good - bad)/totalFeedback   

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        
        <Button handleClick={() => setGood(good +1)} text = "good"/>
        <Button handleClick={() => setNeutral(neutral +1)} text = "neutral"/>
        <Button handleClick={() => setBad(bad +1)} text = "bad"/>

      </div>

      <h2>statistics</h2>
      


      <div>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}/>
        <h2>other</h2>
        <Stats text= "all" count= {totalFeedback} />
        <Stats text= "average" count= {average} />
        <Stats text= "positive" count= {positive} />
      </div>
    </div>

  )
}

export default App
