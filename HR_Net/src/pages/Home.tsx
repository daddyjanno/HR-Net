import { useDispatch } from 'react-redux'
import NewEmployeeForm from '../components/NewEmployeeForm/NewEmployeeForm'
import { useEffect, useState } from 'react'
import { changeCurrentPage } from '../app/navSlice'
import Modal from '../components/Modal/Modal'

function Home() {
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        dispatch(changeCurrentPage('HR Net'))
    }, [dispatch])

    return (
        <>
            <main>
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
