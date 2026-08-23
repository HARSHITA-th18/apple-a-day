import { createSlice } from "@reduxjs/toolkit"
import { dummyOrders } from "../data/adminDummyData"

const orderSlice = createSlice({
  name: "orders",

  initialState: dummyOrders,

  reducers: {
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload

      const order = state.find((order) => order.id === id)

      if (order) {
        order.status = status
      }
    },
  },
})

export const { updateOrderStatus } = orderSlice.actions

export default orderSlice.reducer