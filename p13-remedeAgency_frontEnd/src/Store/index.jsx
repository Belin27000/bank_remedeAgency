import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.jsx'
import userAccountReducer from './userAccountSlice.jsx';

const store = configureStore({
    reducer: {
        user: userReducer,
        userAccount: userAccountReducer
    }

})

export default store;