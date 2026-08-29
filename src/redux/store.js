import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./slices/authSlice"
import orderReducer from "./orderSlice"
import menuReducer from "./menuSlice"
import bookingReducer from "./bookingSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: orderReducer,
    menu: menuReducer,
    bookings: bookingReducer,
  },
})