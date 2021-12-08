import { configureStore } from '@reduxjs/toolkit';
import poll from './slices/Poll';
import auth from './slices/Auth'
import user from './slices/User'


export default configureStore({
    reducer: {
        poll,
        auth,
        user
    }
})