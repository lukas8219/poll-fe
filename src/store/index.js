import { configureStore } from '@reduxjs/toolkit';
import poll from './slices/Poll';
import auth from './slices/Auth'


export default configureStore({
    reducer: {
        poll,
        auth
    }
})