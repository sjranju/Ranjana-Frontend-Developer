import { ReactElement, createContext, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleStateType = {
    data: CapsuleData[] | undefined,
    setData: React.Dispatch<React.SetStateAction<CapsuleData[] | undefined>>
}

export const CapsuleDataContext = createContext<CapsuleStateType>({} as CapsuleStateType)

const CapsuleContext = ({ children }: { children: ReactElement }) => {

    const [data, setData] = useState<CapsuleData[] | undefined>(undefined)

    return (
        <CapsuleDataContext.Provider value={{ data, setData }}>
            {children}
        </CapsuleDataContext.Provider>
    )
}

export default CapsuleContext
