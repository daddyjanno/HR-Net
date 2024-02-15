import { useSelector } from 'react-redux'
import { getEmployees } from '../app/employeesSlice'
import Table from '@daddyjanno/simple-table-comp'
import { useNavigate } from 'react-router-dom'

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

    const data = useSelector(getEmployees)
    const navigate = useNavigate()
    // const data = []

    const handleClickHome = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <main>
            <span id="viewHome" onClick={(e) => handleClickHome(e)}>
                Home
            </span>
            <div className="tableContainer">
                <Table
                    caption={'Current Employees'}
                    data={data}
                    columns={columns}
                    showEntries={true}
                    showSearch={true}
                />
            </div>
        </main>
    )
}

export default Employees
