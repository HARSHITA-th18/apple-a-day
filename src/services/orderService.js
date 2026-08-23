import { dummyOrders } from "../data/adminDummyData"

export const getOrders = () => {
  return dummyOrders
}

export const getOrderById = (id) => {
  return dummyOrders.find((order) => order.id === id)
};