import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const loginUser = createAsyncThunk(
    'user/login',
    async (userCredential) => {
        const request = await axios.post('http://localhost:3001/api/v1/user/login/', userCredential);
        const response = await request.data.body.token;
        localStorage.setItem('user', response);
        return response;
    }
)
const LoginSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        isAuthenticated: false,
        error: null
    },
    reducers: {
        logOutUser: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 400') {
                    state.error = "Access Debied! Invalid Credentials";
                }
                else {
                    state.error = action.error.message
                }
            })

    }

})
export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;