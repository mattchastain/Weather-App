import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationSlice.js';

export const store = configureStore({
	reducer: { locationData: locationReducer },
});
