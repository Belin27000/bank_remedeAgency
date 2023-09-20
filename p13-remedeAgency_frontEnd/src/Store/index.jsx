import { configureStore } from '@reduxjs/toolkit'
import userConnectReducer from './LoginSlice.jsx'
import userAccountReducer from './userAccountSlice.jsx';

const store = configureStore({
    reducer: {
        user: userConnectReducer,
        userAccount: userAccountReducer
    }

})

export default store;