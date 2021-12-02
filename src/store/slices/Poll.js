import { createSlice } from "@reduxjs/toolkit";
import api from "axios/index";

export const PollSlice = createSlice({
  name: "poll",
  initialState: {
    poll_item: {},
  },
  reducers: {
    setPollList: (state, action) => {
      state.poll_list = action.payload
    },
    setPollItem: (state, action) => {
      state.poll_item = action.payload;
    },
  },
});

export const { setPollItem, setPollList } = PollSlice.actions;

export const fetchPollById = (id) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    api.get(`poll/${id}`)
    .then((response) => {
        dispatch(setPollItem(response.data));
        resolve(response);
    })
    .catch((error) => {
        reject(error);
    })
  });
}

export const fetchPollList = (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      api({method:"get", url:"/poll/?", baseURL:"http://localhost:3000"})
      .then((response) => {
          dispatch(setPollList(response.data));
          resolve(response);
      })
      .catch((error) => {
          reject(error);
      })
    });
}


export default PollSlice.reducer;