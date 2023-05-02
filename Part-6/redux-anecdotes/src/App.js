import AnecdoteForm from "./components/anecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
