import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPage } from '../app/navSlice'
import { getEmployees } from '../app/employeesSlice'
import Table from '@daddyjanno/simple-table-comp'

export type EmployeeType = {
    [index: string]: string
}
export type Column = {
    label: string
    accessor: string
    sortable: boolean
}

function Employees() {
    const columns: Column[] = [
        { label: 'First Name', accessor: 'firstName', sortable: true },
        { label: 'Last Name', accessor: 'lastName', sortable: true },
        { label: 'Start Date', accessor: 'startDate', sortable: true },
        { label: 'Department', accessor: 'department', sortable: true },
        { label: 'Date of Birth', accessor: 'dateOfBirth', sortable: true },
        { label: 'Street', accessor: 'street', sortable: true },
        { label: 'City', accessor: 'city', sortable: true },
        { label: 'State', accessor: 'state', sortable: true },
        { label: 'Zip Code', accessor: 'zipCode', sortable: true },
    ]
    const dispatch = useDispatch()
    const data = useSelector(getEmployees)

    useEffect(() => {
        dispatch(changeCurrentPage('Employees'))
    }, [dispatch])

    return (
        <main>
            <Table
                caption={'Current Employees'}
                data={data}
                columns={columns}
                showEntries={true}
                showSearch={true}
            />
        </main>
    )
}

export default Employees
