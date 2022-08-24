import { configureStore } from '@reduxjs/toolkit'
import sozlukReducer from '../features/sozlukSlice'


// Tüm store un bulunduğu alan
export const store = configureStore({
    reducer: {
        tdkSozluk: sozlukReducer
    },
})