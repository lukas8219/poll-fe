import { createSlice } from '@reduxjs/toolkit'
import api from './axios/index'
import { message } from 'antd'
import { setUser } from './User'
import { setLoading } from './Loading'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || undefined,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        },
    },
})

export const { setToken } = AuthSlice.actions

export const authenticate = (credentials) => (dispatch, getState) => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
        api.post(`v1/authenticate/`, credentials)
            .then((response) => {
                dispatch(setToken(response.data.token))
                dispatch(setUser(response.data.user))
                resolve(response)
            })
            .catch((error) => {
                message.error(error?.response?.data?.error)
                reject(error)
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    })
}

export default AuthSlice.reducer
