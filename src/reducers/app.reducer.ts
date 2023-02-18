import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  firstName: string;
  lastName: string;
  avatar: string;
}

const initialState: AppState = {
  firstName: "",
  lastName: "",
  avatar: "",
};

const AppReducer = createSlice({
  name: "App",
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        avatar: string;
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.avatar = action.payload.avatar;
    },
  },
});

export default AppReducer.reducer;
export const { setUserData } = AppReducer.actions;
