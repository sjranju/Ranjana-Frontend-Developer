import { createContext, ReactElement, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleDeailsState = {
    openModal: CapsuleData | undefined,
    setOpenModal: React.Dispatch<React.SetStateAction<CapsuleData | undefined>>
}

export const showCapsuleDetials = createContext<CapsuleDeailsState>({} as CapsuleDeailsState)

const OpenCapsuleModal = ({ children }: { children: ReactElement }) => {
    const [openModal, setOpenModal] = useState<CapsuleData | undefined>(undefined)

    return (
        <showCapsuleDetials.Provider value={{ openModal, setOpenModal }}>
            {children}
        </showCapsuleDetials.Provider>
    )
}

export default OpenCapsuleModal
