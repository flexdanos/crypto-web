import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { loginUserThunk, registerUserThunk } from "./userThunk";
import { changePasswordThunk, updateUserProfileThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  done: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/signup", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/login", user, thunkAPI);
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (user, thunkAPI) => {
    return updateUserProfileThunk("/updateUser", user, thunkAPI);
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (user, thunkAPI) => {
    return changePasswordThunk("/updatePassword", { password: user }, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = { ...payload };
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.done = true;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.done = false;
        toast.success(`Welcome ${user.firstName}`);
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.done = false;
        toast.error("Provide valid details");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { token } = payload;
        const { user } = payload;
        state.user = user;
        addUserToLocalStorage(token);
        toast.success(`Welcome back ${user.firstName}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error("Invalid Email or Passsword");
      })
      
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("User Updated");
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.isLoading = false;
        toast.error("Update failed");
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Password Updated");
      })
      .addCase(updatePassword.rejected, (state) => {
        state.isLoading = false;
        toast.error("Password Denied");
      });
  },
});

export const { toggleSidebar, logoutUser, storeUser } = userSlice.actions;

export default userSlice.reducer;
