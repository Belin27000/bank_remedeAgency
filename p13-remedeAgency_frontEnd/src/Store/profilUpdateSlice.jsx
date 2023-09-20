import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const getAuthToken = () => {
    return localStorage.getItem('user')
};

axios.interceptors.request.use(
    (config) => {
        const token = getAuthToken()
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)
export const profilUpdate = createAsyncThunk(
    'user/update',
    async () => {
        try {

            const request = await axios.post(`http://localhost:3001/api/v1/user/profile/`);
            return request.data

        } catch (error) {
            console.log(error);
        }
    }
)

const profilUpdateSlice = createSlice({

    name: 'updateAccount',
    initialState: {
        loading: false,

    }
})

export default profilUpdateSlice.reducer;