// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import activeIndexReducer from './activeIndexSlice'; // Import the reducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    activeIndex: activeIndexReducer, // Set up the activeIndex reducer here
  },
});
