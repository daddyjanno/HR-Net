import { createSlice } from '@reduxjs/toolkit'

interface State {
    nav: { currentPage: string }
}

const initialState = {
    currentPage: 'HR Net',
}
document.title = initialState.currentPage

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        changeCurrentPage(state, action) {
            state.currentPage = action.payload
            document.title = state.currentPage
        },
    },
})

// selectors

export const getCurrentPage = (state: State) => state.nav.currentPage

// actions

export const { changeCurrentPage } = navSlice.actions

// reducers

export const navReducer = navSlice.reducer
