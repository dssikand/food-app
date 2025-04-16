import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getOrders} from '../../services/userservice';


export const getOrder = createAsyncThunk(
    'user/getOrders',
    async (data, {getState, dispatch}) => {
      try {
        const response = await getOrders(data);
        return response.data;
      } catch (e) {
        return e.response;
      }
    },
  );


  const orderSlice = createSlice({
    name: 'userOr   ders',
    initialState: {
      usercreate: '',
      usererror: '',
    },
    extraReducers: builder => {
      builder.addCase(GETOrder.fulfilled, (state, action) => {
        state.usercreate = action.payload;
      });
      builder.addCase(GETOrder.rejected, (state, action) => {
        state.usererror = action.payload;
      });
    },
  });

  export default orderSlice.reducer;