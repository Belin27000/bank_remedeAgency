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
    async (updatedUserData) => {
        console.log(updatedUserData);
        try {

            const request = await axios.put(`http://localhost:3001/api/v1/user/profile/`, updatedUserData);
            return request.data

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

const profilUpdateSlice = createSlice({

    name: 'updateAccount',
    initialState: {
        loading: false,
        userProfile: null,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(profilUpdate.pending, (state) => {
                state.loading = true;
            })
            .addCase(profilUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.userProfile = action.payload;
            })
            .addCase(profilUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.error("Erreur lors de la mise à jour du profil :", action.error);

            })
    }
})

export default profilUpdateSlice.reducer;