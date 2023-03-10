import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

 let max = Math.max(...vote)
 let findIndex = vote.indexOf(max)
 console.log(max)

  const copy = [...vote]

  const randomNum = Math.floor(Math.random()*7)
  console.log(copy)
  
 const addVote = (selected)  => {
  copy[selected] += 1
  setVote(copy)
 }

 const plusOne = () =>{
   addVote(selected)
 }

  return (
    <>
    
      <div>
        <h2>Anecdote of the day</h2>
        <div>{anecdotes[selected]}</div>
       <div> has {copy[selected]} votes.</div>
      </div>
      <button onClick={plusOne}>
        vote
      </button>
      <button onClick={()=> setSelected(randomNum)}>
        next anecdote
      </button>
      <h2>Anecdote with the most votes</h2>
      <div>{anecdotes[findIndex]}</div>
      <div> has {max} votes.</div>
      
    </>
  )
}

export default App
