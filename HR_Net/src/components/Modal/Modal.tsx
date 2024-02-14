import {
    Dispatch,
    RefObject,
    SetStateAction,
    createRef,
    useEffect,
} from 'react'

type Modal = {
    setModalOpen: Dispatch<SetStateAction<boolean>>
    message: string
    aria_labelledby: string
}

function Modal({ setModalOpen, message, aria_labelledby }: Modal) {
    useEffect(() => {
        function keyListener(e: KeyboardEvent) {
            handleKey(e)
        }
        document.addEventListener('keydown', keyListener)

        return () => document.removeEventListener('keydown', keyListener)
    })

    const modalRef: RefObject<HTMLDivElement> = createRef()

    const handleKey = (e: KeyboardEvent) => {
        const button = modalRef.current?.querySelector('button')
        button?.focus()
        if (e.key === 'Tab') {
            button?.focus()
            return e.preventDefault()
        }
        if (e.key === 'Escape') {
            setModalOpen(false)
        }
    }

    return (
        <div
            className="modal-container"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={aria_labelledby}
        >
            <div className="modal-content" ref={modalRef}>
                <div className="modal-body">
                    <p className="modal-text">{message}</p>
                    <button
                        onClick={() => setModalOpen(false)}
                        aria-label="Close Modal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
