import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    hasErrors: false,
    soz: {},
    fav: []
}
export const sozlukSlice = createSlice({
    name: 'tdk',
    initialState,
    reducers: {
        getTdk: state => {
            state.loading = true
        },
        getTdkSuccess: (state, { payload }) => {
            state.soz = payload
            state.loading = false
            state.hasErrors = false
        },
        getTdkFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        getFavWord: (state, { payload }) => {
            const newFav = [...state.fav]
            newFav.push({ madde: payload.madde, anlamlarListe: payload?.anlamlarListe, kelime_no: payload.kelime_no})
            state.fav = payload
        }
    },
})

export const { getTdk, getTdkSuccess, getTdkFailure, getFavWord } = sozlukSlice.actions
export const sozlukSelector = state => state
export default sozlukSlice.reducer

