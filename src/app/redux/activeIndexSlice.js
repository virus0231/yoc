import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: 0,
};

const activeIndexSlice = createSlice({
  name: 'activeIndex',
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = activeIndexSlice.actions;
export default activeIndexSlice.reducer;
