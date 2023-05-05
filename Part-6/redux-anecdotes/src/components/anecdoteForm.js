import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { createNotification, clearNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";


const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    console.log("content",content)
    event.target.anecdote.value = "";

    const newAnecdote = await anecdoteService.createNew(content);
    console.log("newAnecdote",newAnecdote)
    dispatch(createAnecdote(newAnecdote));    
    dispatch(createNotification('anecdote added'));
    setTimeout(() => {  
      dispatch(clearNotification());
    },5000)
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};
export default AnecdoteForm;
