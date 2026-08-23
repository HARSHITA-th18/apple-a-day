import { createSlice } from "@reduxjs/toolkit"
import { dummyRoomBookings } from "../data/adminDummyData"

const bookingSlice = createSlice({
  name: "bookings",

  initialState: dummyRoomBookings,

  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload)
    },

    confirmBooking: (state, action) => {
      const booking = state.find(
        (item) => item.id === action.payload
      )

      if (booking) {
        booking.status = "CONFIRMED"
      }
    },

    cancelBooking: (state, action) => {
      const booking = state.find(
        (item) => item.id === action.payload
      )

      if (booking) {
        booking.status = "CANCELLED"
      }
    },
  },
})

export const {
  addBooking,
  confirmBooking,
  cancelBooking,
} = bookingSlice.actions

export default bookingSlice.reducer;