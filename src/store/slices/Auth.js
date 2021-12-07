import { createSlice } from "@reduxjs/toolkit";
import api from './axios/index'

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || undefined
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { setToken } = AuthSlice.actions;

export const authenticate = (credentials) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      api.post(`v1/authenticate/`, credentials)
      .then((response) => {
          dispatch(setToken(response.data.token));
          console.log(response.data.token);
          resolve(response);
      })
      .catch((error) => {
          reject(error);
      })
    });
  }

  export default AuthSlice.reducer;