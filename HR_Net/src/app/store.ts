import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from './employeesSlice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        employees: employeesReducer,
    }),
})

export default store
