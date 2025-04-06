import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUser";
import { addUser } from "../thunks/addUser";
const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        // fetchUsers Cases
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        });

        // addUsers Cases: 
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload)
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        });

    },
});

export default userSlice.reducer;
