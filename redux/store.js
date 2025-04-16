import {configureStore} from '@reduxjs/toolkit';

import userSlice from './users/user.slice';
import kitchenSlice from './kitchens/kitchenSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    kitechen: kitchenSlice
  },
});
