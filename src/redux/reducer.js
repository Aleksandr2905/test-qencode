import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { forgotPassThunk, loginThunk, resetPassThunk } from "./operations";

const initialState = {
  email: null,
  token: null,
  error: null,
  isSignedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          forgotPassThunk.pending,
          resetPassThunk.pending
        ),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.fulfilled,
          forgotPassThunk.fulfilled,
          resetPassThunk.fulfilled
        ),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          forgotPassThunk.rejected,
          resetPassThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
