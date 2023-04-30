const filterReducer = (state = "", action) => {
    console.log("filter state now: ", state);
  switch (action.type) {
    case "SET_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const filterChange = (filterValue) => {
  return {
    type: "SET_FILTER",
    payload: filterValue,
  };
};

export default filterReducer;
