import { useSelector, useDispatch } from "react-redux";
import { createVote } from "../reducers/anecdoteReducer";

const AnecdoteList = ()=>{
    const dispatch = useDispatch();
    const anecdotes = useSelector((state) => state);

    const vote = (id) => {
        console.log("vote", id);
        dispatch(createVote(id));
      };
    
      const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

return(
    sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))
)
}

export default AnecdoteList