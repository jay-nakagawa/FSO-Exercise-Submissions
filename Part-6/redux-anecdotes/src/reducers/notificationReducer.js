import { createSlice } from "@reduxjs/toolkit";



const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        createNotification: (state, action) => {
           console.log(action.payload,state)
            return action.payload;
        },
        clearNotification : (state, action) => {
            return "";
        }
    }
});

export const setNotification = (message, timeout) => {
   return dispatch =>{
   dispatch(createNotification(message));
    setTimeout(() => {
        dispatch(clearNotification());
    }, timeout);
};
};


export const { createNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;