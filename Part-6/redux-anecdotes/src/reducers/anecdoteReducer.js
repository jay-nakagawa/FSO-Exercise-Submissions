import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";


// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };




const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
   
    createVote: (state, action) => {
      const id = action.payload
      
      return state.map((anecdote) =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      );
    },
    appendAnecdote: (state, action) => {
      state.push(action.payload);
    },
    setAnecdotes: (state, action) => {
      return action.payload;
    }
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
  dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = id => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.addVote(id)
    dispatch(createVote(updatedAnecdote.id))
  }
}

    


export const { createVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;









// const anecdoteReducer = (state = initialState, action) => {
//   console.log("action", action);
//   switch (action.type) {
//     case "VOTE":
//       const id = action.payload.id;
//       return state.map((anecdote) =>
//         anecdote.id === id
//           ? { ...anecdote, votes: anecdote.votes + 1 }
//           : anecdote
//       );
//     case "NEW_ANECDOTE":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export const createAnecdote = (content) => {
//   return {
//     type: "NEW_ANECDOTE",
//     payload: {
//       content,
//       votes: 0,
//       id: getId(),
//     },
//   };
// };

// export const createVote = (id) => {
//   return {
//     type: "VOTE",
//     payload: {
//       id,
//     },
//   };
// };

// export default anecdoteReducer;


