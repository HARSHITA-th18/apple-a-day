import { dummyMenuItems } from "../data/adminDummyData"

export const getMenuItems = () => {
  return dummyMenuItems
}

export const getMenuItemById = (id) => {
  return dummyMenuItems.find(
    (item) => item.id === id
  )
};