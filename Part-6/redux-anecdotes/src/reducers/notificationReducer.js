import { createSlice } from "@reduxjs/toolkit";



const notificationSlice = createSlice({
    name: "notification",
    initialState: "test notification",
    reducers: {
        createNotification: (state, action) => {
           console.log(action.payload,state)
            return action.payload;
        }
    }
});

export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;