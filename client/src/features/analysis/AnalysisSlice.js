import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AnalysisAPIService from './AnalysisAPIService'

const initialState = {
    inventories: [],
    loading: false,
    error: false,
    isSuccess: false,
    message:''
}

// fetch items to analyse 
export const fetchData = createAsyncThunk(
    "items/fetchdata",
    async (thunkAPI) => {
        try {
            return await AnalysisAPIService.getInventories();
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValueso(message)
        }
    }
)

const AnalysisSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        reset:(state)=>initialState
    },
   
})

