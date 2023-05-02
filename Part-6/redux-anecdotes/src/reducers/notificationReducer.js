import { createSlice } from "@reduxjs/toolkit";



const notificationSlice = createSlice({
    name: "notification",
    initialState: "test notification",
    reducers: {
        createNotification: (state, action) => {
            const message = action.payload;
            state.push(message);
        }
    }
});

export const { createNotification } = notificationSlice.actions;
export default notificationSlice.reducer;