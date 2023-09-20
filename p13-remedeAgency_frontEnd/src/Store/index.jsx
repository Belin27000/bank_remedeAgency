import { configureStore } from '@reduxjs/toolkit'
import userConnectReducer from './LoginSlice.jsx'
import userAccountReducer from './userAccountSlice.jsx';
import profilUpdateReducer from './profilUpdateSlice.jsx';


const store = configureStore({
    reducer: {
        user: userConnectReducer,
        userAccount: userAccountReducer,
        userUpdate: profilUpdateReducer
    }

})

export default store;