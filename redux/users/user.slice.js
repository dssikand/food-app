import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CreateLoginUser} from '../../services/userservice';

export const UserCreate = createAsyncThunk(
  'user/createuser',
  async (data, {getState, dispatch}) => {
    try {
      const response = await CreateLoginUser(data);
      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    usercreate: '',
    usererror: '',
  },
  extraReducers: builder => {
    builder.addCase(UserCreate.fulfilled, (state, action) => {
      state.usercreate = action.payload;
    });
    builder.addCase(UserCreate.rejected, (state, action) => {
      state.usererror = action.payload;
    });
  },
});

export default userSlice.reducer;
