import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getKitchens,getCatagories,getMyOrders,getKitchensByCatagories, getKitchenMenu} from '../../services/userservice';

export const getAllKitchens = createAsyncThunk(
  'user/getKitchens',
  async (data, {getState, dispatch}) => {
    try {
      const response = await getKitchens(data);

      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);
export const getAllCatagories = createAsyncThunk(
  'user/getCatagories',
  async (data, {getState, dispatch}) => {
    try {
      const response = await getCatagories(data);

      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);
export const getKitchensFromCatagories = createAsyncThunk(
  'user/getCatagoriesKitchen',
  async (data, {getState, dispatch}) => {
    try {
      console.log(data)
      const response = await getKitchensByCatagories(data);
      console.log(response.data,"getletcccc")
      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);
export const getKitchenM = createAsyncThunk(
  'user/getKitchenMenu',
  async (data, {getState, dispatch}) => {
    try {
      console.log(data)
      const response = await getKitchenMenu(data);
      console.log(response.data,"asdasds")
      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);

export const getAllOrders = createAsyncThunk(
  'user/getOrders',
  async (data, {getState, dispatch}) => {
    try {
      const response = await getMyOrders();

      return response.data;
    } catch (e) {
      return e.response;
    }
  },
);
const KitchenSlice = createSlice({
  name: 'userKitchens',
  initialState: {
    kitchens: '',
    catkitchens: '',
    kitchensError: '',
    catkitchensError: '',
    kitchenmenu:[],
    kitchenmenuerr:"",
    Catagories: '',
    CatagoriesError: '',
  },
  extraReducers: builder => {
    builder.addCase(getAllKitchens.fulfilled, (state, action) => {
      state.kitchens = action.payload.data;
    });
    builder.addCase(getAllKitchens.rejected, (state, action) => {
      state.kitchensError = action.payload;
    });
    builder.addCase(getAllCatagories.fulfilled, (state, action) => {
      state.Catagories = action.payload.data;
    });
    builder.addCase(getAllCatagories.rejected, (state, action) => {
      state.CatagoriesError = action.payload;
    });
    builder.addCase(getKitchenM.fulfilled, (state, action) => {
      state.kitchenmenu = action.payload;
    });
    builder.addCase(getKitchenM.rejected, (state, action) => {
      state.kitchenmenuerr = action.payload;
    });
    builder.addCase(getKitchensFromCatagories.fulfilled, (state, action) => {
      state.catkitchens = action.payload;
    });
    builder.addCase(getKitchensFromCatagories.rejected, (state, action) => {
      state.catkitchensError = action.payload;
    });
  },
});

export default KitchenSlice.reducer;
