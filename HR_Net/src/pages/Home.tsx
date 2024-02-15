import NewEmployeeForm from '../components/NewEmployeeForm/NewEmployeeForm'
import { useState } from 'react'

import Modal from '../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()

    const handleClickEmployees = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        navigate('/employees')
    }

    return (
        <>
            <main>
                <button
                    id="viewEmployees"
                    onClick={(e) => handleClickEmployees(e)}
                >
                    View current employees
                </button>
                <section>
                    <NewEmployeeForm setModalOpen={setModalOpen} />
                </section>
            </main>
            {modalOpen && (
                <Modal
                    setModalOpen={setModalOpen}
                    message="Employee successfully created!"
                    aria_labelledby="Employee successfully created"
                />
            )}
        </>
    )
}

export default Home
