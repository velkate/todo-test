import { createSlice } from "@reduxjs/toolkit";

const initialState = "light"

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      return action.payload 
    }
  }
})

const { actions, reducer } = themeSlice
export const { switchTheme } = actions
export default reducer
