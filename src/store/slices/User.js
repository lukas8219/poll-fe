import { createSlice } from '@reduxjs/toolkit'
import api from './axios/index'
import { setLoading } from './Loading'

export const UserSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state.user = {...action.payload}
            saveUserToStorage(action.payload);
        },
        setUserPhoto: (state, action) => {
            state.user.pic = action.payload.pic;
            saveUserToStorage(state.user);
        }
    },
})

function saveUserToStorage(user){
    localStorage.setItem('user', JSON.stringify(user))
}

export const { setUser, setUserPhoto } = UserSlice.actions

export const editUser =
    ({ email, name, phoneNumber }) =>
    (dispatch, getState) => {
        dispatch(setLoading(true));
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
                .finally(() => dispatch(setLoading(false)))
        })
    }

export const getUser = (dispatch, getState) => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
        api.get(`v1/user/`)
            .then((response) => {
                dispatch(setUser(response.data))
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
            .finally(() => dispatch(setLoading(false)))
    })
}

export default UserSlice.reducer
