import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerUser = createAsyncThunk('auth/registerUser', async(userData, {rejectWithValue})=>{
    try {
        const response = await axios.post()
    } catch (error) {
        
    }
})