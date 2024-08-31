import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isLoginSucess: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isLoginSucess = false;
    },
    loginSucess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoginSucess = true;
      console.log(action.payload);
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.isLoginSucess = false;
      state.error = action.payload;
    },
    loginReset: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isLoginSucess = false;
    },
  },
});
export const { loginRequest, loginSucess, loginFailure, loginReset } = authSlice.actions;

export default authSlice.reducer;