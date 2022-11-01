import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from '../features/items/ItemSlice'
import OrderReducer from '../features/orders/OrderSlice'


export const store = configureStore({
  reducer: {
    items: ItemReducer,
    orders: OrderReducer,
  },
})