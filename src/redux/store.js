import { configureStore } from "@reduxjs/toolkit"

import orderReducer from "./orderSlice"
import menuReducer from "./menuSlice"
import bookingReducer from "./bookingSlice"

export const store = configureStore({
  reducer: {
    orders: orderReducer,
    menu: menuReducer,
    bookings: bookingReducer,
  },
});