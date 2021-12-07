import { createSlice } from "@reduxjs/toolkit";
import api from './axios/index'
import {message} from 'antd';

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
          window.location.reload();
          resolve(response);
      })
      .catch((error) => {
        message.error("Credenciais inválidas")
          reject(error);
      })
    });
  }

  export default AuthSlice.reducer;