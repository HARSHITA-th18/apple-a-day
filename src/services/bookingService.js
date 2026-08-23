import { dummyRoomBookings } from "../data/adminDummyData"

export const getBookings = () => {
  return dummyRoomBookings
}

export const getBookingById = (id) => {
  return dummyRoomBookings.find(
    (booking) => booking.id === id
  )
};