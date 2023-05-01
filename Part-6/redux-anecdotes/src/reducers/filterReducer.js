import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterChange(state, action) {
      return action.payload;
    },
  },
});

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "SET_FILTER":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const filterChange = (filterValue) => {
//   return {
//     type: "SET_FILTER",
//     payload: filterValue,
//   };
// };

// export default filterReducer;
export const { filterChange } = filterSlice.actions;
export default filterSlice.reducer;
