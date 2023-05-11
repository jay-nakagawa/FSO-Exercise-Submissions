import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAnecdotes, updateAnecdote } from "./requests";
import { useReducer } from "react";

import NotificationContext from "./NotificationContext";

import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "VOTE":
      return "you voted";
    case "CREATE":
      return "you created";
    case "CLEAR":
      return null;
    default:
      return state;
  }
};

const App = () => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );
  const queryClient = useQueryClient();

  const result = useQuery("anecdotes", getAnecdotes, {
    retry: false,
  });
  const anecdotes = result.data;
  console.log(result);

  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
  });
  const handleVote = (anecdote) => {
    notificationDispatch({ type: "VOTE" });
    setTimeout(() => {
      notificationDispatch({ type: "CLEAR" });
    }, 5000);
    console.log(anecdote);
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  if (result.isLoading) {
    return <div>loading data...</div>;
  }
  if (result.isError) {
    return <span>Error: {result.error.message}</span>;
  }
  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </NotificationContext.Provider>
  );
};

export default App;
