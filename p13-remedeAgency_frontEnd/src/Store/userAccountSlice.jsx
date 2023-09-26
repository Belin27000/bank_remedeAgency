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

export const getUserAccount = createAsyncThunk(
    'user/account',
    async () => {
        try {

            const request = await axios.post(`http://localhost:3001/api/v1/user/profile/`);
            console.log(request);
            return request.data

        } catch (error) {
            console.log(error);
        }
    }
)



const userAccountSlice = createSlice({
    name: 'UserAccount',
    initialState: {
        lodaing: false,
        userAccount: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserAccount.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserAccount.fulfilled, (state, action) => {
                state.loading = false;
                state.userAccount = action.payload;
            })
            .addCase(getUserAccount.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export default userAccountSlice.reducer;