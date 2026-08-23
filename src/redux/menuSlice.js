import { createSlice } from "@reduxjs/toolkit"
import { dummyMenuItems } from "../data/adminDummyData"

const menuSlice = createSlice({
  name: "menu",
  initialState: dummyMenuItems,

  reducers: {
    addMenuItem: (state, action) => {
      state.push(action.payload)
    },

    updateMenuItem: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index !== -1) {
        state[index] = action.payload
      }
    },

    deleteMenuItem: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload
      )
    },

    toggleMenuAvailability: (state, action) => {
      const item = state.find(
        (item) => item.id === action.payload
      )

      if (item) {
        item.available = !item.available
      }
    },
  },
})

export const {
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  toggleMenuAvailability,
} = menuSlice.actions

export default menuSlice.reducer;