import { configureStore } from '@reduxjs/toolkit';
import poll from './slices/Poll';


export default configureStore({
    reducer: {
        poll
    }
})