import stateList from '../../data/state.json'
import departmentList from '../../data/department.json'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewEmployee } from '../../app/employeesSlice'
import { formValidationRules } from '../../utils/formValidation'

type FormData = {
    firstName: string
    lastName: string
    dateOfBirth: string
    startDate: string
    street: string
    city: string
    state: string
    zipCode: string
    department: string
}

interface IProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: FormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
}

function NewEmployeeForm({ setModalOpen }: IProps) {
    const [formData, setFormData] = useState<FormData>(initialState)
    const [currentDate] = useState(new Date().toISOString().slice(0, 10))
    const dispatch = useDispatch()
    const canSave: boolean = Object.values(formData).every(Boolean)

    const handleBlur = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.currentTarget

        const span: HTMLElement | null = document.querySelector(
            `span[id=${name}]`
        )

        if (
            formValidationRules[name].regex.test(value) &&
            e.currentTarget.value.length >= 2
        ) {
            span ? (span.textContent = '') : null
            setFormData({ ...formData, [name]: value })
        } else {
            span
                ? (span.textContent = formValidationRules[name].errorMessage)
                : null
        }
    }
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.currentTarget
        const span: HTMLElement | null = document.querySelector(
            `span[id=${name}]`
        )
        if (
            formValidationRules[name].regex.test(value) &&
            e.currentTarget.value.length >= 2
        ) {
            span ? (span.textContent = '') : null
            setFormData({ ...formData, [name]: value })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(addNewEmployee(formData))
        const form = document.querySelector('form')
        form?.reset()
        setFormData(initialState)
        setModalOpen(true)
    }

    return (
        <>
            <form
                action="#"
                id="create-employee"
                name="newEmployee"
                className="formContainer"
                onSubmit={handleSubmit}
            >
                <div className="inputs">
                    <div className="infos">
                        <div className="inputContainer">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                autoFocus
                                required
                            />
                            <span
                                id="firstName"
                                className={'errorMessage'}
                            ></span>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                            />
                            <span
                                id="lastName"
                                className={'errorMessage'}
                            ></span>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                max={currentDate}
                                required
                            />
                            <span
                                id="dateOfBirth"
                                className={'errorMessage'}
                            ></span>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                max={currentDate}
                                min={formData.dateOfBirth}
                                required
                            />
                            <span
                                id="startDate"
                                className={'errorMessage'}
                            ></span>
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="department">Department</label>
                            <select
                                id="department"
                                name="department"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                            >
                                <option value={''}>
                                    {'-- select a department --'}
                                </option>
                                {departmentList.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            <span
                                id="department"
                                className={'errorMessage'}
                            ></span>
                        </div>
                    </div>
                    <fieldset className="address">
                        <legend>Address</legend>
                        <div className="inputContainer">
                            <div className="inputContainer">
                                <label htmlFor="street">Street</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    id="street"
                                    className={'errorMessage'}
                                ></span>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    id="city"
                                    className={'errorMessage'}
                                ></span>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="state">State</label>
                                <select
                                    id="state"
                                    name="state"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value={''}>
                                        {'-- select a state --'}
                                    </option>
                                    {stateList.map((state) => (
                                        <option
                                            key={state.name}
                                            value={state.abbreviation}
                                            title={state.name}
                                        >
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                                <span
                                    id="state"
                                    className={'errorMessage'}
                                ></span>
                            </div>
                            <div className="inputContainer">
                                <label htmlFor="zipCode">Zip Code</label>
                                <input
                                    type="number"
                                    id="zipCode"
                                    name="zipCode"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    id="zipCode"
                                    className={'errorMessage'}
                                ></span>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="btnContainer">
                    <button
                        id="submit"
                        className="submit"
                        type="submit"
                        disabled={!canSave}
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default NewEmployeeForm
