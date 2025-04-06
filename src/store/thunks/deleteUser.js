import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const deleteUser = createAsyncThunk("user/delete", async (user) => {
    const response = await axios.delete(`http://localhost:3005/${user.id}`)

    return response.data
})