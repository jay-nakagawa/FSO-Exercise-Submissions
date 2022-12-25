import { useState } from 'react' 

const Button = ({handleClick, text}) =>{
  return (
    <>
   
    <button onClick={handleClick}>{text}</button>
    
  </>
  )

}





const StatisticLine = (props) =>{
  return (
    <div>{props.text}: {props.count}</div>
  )

}

const Statistics = (props) =>{
  if (props.totalFeedback === 0){
    return ( 
      <div>
        <p>No feedback given</p>
      </div>

    )
  }
  return (
    <div>
      <StatisticLine text= "good" count= {props.good}/>
      <StatisticLine text= "neutral" count= {props.neutral}/>
      <StatisticLine text= "bad" count= {props.bad}/>
      <h2>other</h2>
      <StatisticLine text= "all" count= {props.totalFeedback} />
      <StatisticLine text= "average" count= {props.average} />
      <StatisticLine text= "positive" count= {props.positive} />
    </div>

  )

}





const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
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
      

      
      


      <div>
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} average={average} positive={positive}/>
        
       
      </div>
    </div>

  )
}

export default App
