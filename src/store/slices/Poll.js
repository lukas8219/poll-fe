import { createSlice } from '@reduxjs/toolkit'
import api from './axios/index'
import { message } from 'antd'
import { setLoading } from './Loading'

export const PollSlice = createSlice({
    name: 'poll',
    initialState: {
        poll_item: {},
    },
    reducers: {
        setPollList: (state, action) => {
            state.poll_list = action.payload
        },
        setPollItem: (state, action) => {
            state.poll_item = action.payload
        },
    },
})

export const { setPollItem, setPollList } = PollSlice.actions

export const voteFavor = (id) => (dispatch, getState) => {
    vote({
        id: id,
        decision: 'approve',
        dispatch: dispatch,
    })
}

export const voteAgainst = (id) => (dispatch, getState) => {
    vote({
        id: id,
        decision: 'refuse',
        dispatch: dispatch,
    })
}

const vote = ({ id, decision, dispatch }) => {
    dispatch(setLoading(true))
    return new Promise((resolve, reject) => {
        api.put(`v1/poll/${id}/${decision}`)
            .then((response) => {
                dispatch(fetchPollList)
                message.success('Votado com sucesso!')
                resolve(response)
            })
            .catch((error) => {
                const response = error.response
                message.error(response.data.error)
                reject(error)
            })
            .finally(() => dispatch(setLoading(false)))
    })
}

export const fetchPollById = (id) => (dispatch, getState) => {
    dispatch(setLoading(true))
    return new Promise((resolve, reject) => {
        api.get(`v1/poll/${id}`)
            .then((response) => {
                dispatch(setPollItem(response.data))
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
            .finally(() => dispatch(setLoading(false)))
    })
}

export const fetchPollList = (dispatch, getState) => {
    dispatch(setLoading(true))
    return new Promise((resolve, reject) => {
        api.get('v1/poll/')
            .then((response) => {
                dispatch(setPollList(response.data))
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
            .finally(() => dispatch(setLoading(false)))
    })
}

export const createPoll = (data) => (dispatch, getState) => {
    dispatch(setLoading(true))
    return new Promise((resolve, reject) => {
        api.post('v1/poll', data)
            .then((response) => {
                dispatch(fetchPollList)
                resolve(response)
            })
            .catch((error) => {
                message.error('Ocorreu um erro ao tentar criar')
                reject(error)
            })
            .finally(() => dispatch(setLoading(false)))
    })
}

export default PollSlice.reducer
