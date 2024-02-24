import { createSlice } from "@reduxjs/toolkit";

const InitialValue = {
  status: false,
  data: "",
};

const adminAuthSlice = createSlice({
  name: "auth",
  initialState: InitialValue,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.data = action.payload.data;
    },
    logout: (state, action) => {
      console.log("logout called");
      state.state = false;
      state.data = "";
    },
  },
});

export const adminAuthReducer = adminAuthSlice.reducer;
export const { login, logout } = adminAuthSlice.actions;
