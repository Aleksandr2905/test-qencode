import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPassword, login, resetPassword } from "../service/api";
import { toast } from "react-toastify";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await login(userData);
      return response;
    } catch (error) {
      toast.error(error.message || `Incorrect email or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const forgotPassThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const response = await forgotPassword(email);
      toast.success("Email sent successfully");
      return response;
    } catch (error) {
      toast.error(error.message || "Incorrect email");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPassThunk = createAsyncThunk(
  "auth/updatePassword",
  async (newPassword, thunkAPI) => {
    try {
      const response = await resetPassword(newPassword);
      toast.success("Update password successfully");
      return response;
    } catch (error) {
      toast.error(error.message || "Incorrect password");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
