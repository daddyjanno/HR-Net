import { createSlice } from '@reduxjs/toolkit'
import { createMockedUsers } from '../data/mockedUsers'
import { EmployeeType } from '../pages/Employees'

const mockedUsers = createMockedUsers()
// const mockedUsers = []
const initialState: Array<object> = mockedUsers

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addNewEmployee(state, action) {
            state.unshift(action.payload)
        },
    },
})

// selectors

export const getEmployees = (state: {
    nav: object
    employees: EmployeeType[]
}) => state.employees
export const getDataLength = (state: {
    nav: object
    employees: EmployeeType[]
}) => state.employees.length

// actions

export const { addNewEmployee } = employeesSlice.actions

// reducers

export const employeesReducer = employeesSlice.reducer
