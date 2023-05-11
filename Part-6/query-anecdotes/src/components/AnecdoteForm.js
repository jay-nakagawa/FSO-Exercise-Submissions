import { useMutation, useQueryClient } from "react-query";
import { createAnecdote } from "../requests";

import { useContext } from "react";
import NotificationContext from "../NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const [notification, notificationDispatch] = useContext(NotificationContext);

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries("anecdotes");
    },
    onError: (error) => {
      console.log(error);
      notificationDispatch({ type: "ERROR", message: error.message });
      setTimeout(() => {
        notificationDispatch({ type: "CLEAR" });
      }, 5000);
    },
  });

  const onCreate = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    console.log(notification);
    newAnecdoteMutation.mutate({ content });

    notificationDispatch({ type: "CREATE" });
    setTimeout(() => {
      notificationDispatch({ type: "CLEAR" });
    }, 5000);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
