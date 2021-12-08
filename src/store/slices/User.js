import { createSlice } from '@reduxjs/toolkit'
import api from './axios/index'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state.user = {...action.payload}
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
    },
})

export const { setUser } = UserSlice.actions

export const editUser =
    ({ email, name, phoneNumber }) =>
    (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            api.put(`v1/user/`, {
                email: email,
                name: name,
                phoneNumber: phoneNumber,
            })
                .then((response) => {
                    dispatch(setUser(response.data))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

export const getUser = (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        api.get(`v1/user/`)
            .then((response) => {
                dispatch(setUser(response.data))
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default UserSlice.reducer
