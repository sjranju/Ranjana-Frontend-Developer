import { ReactElement, createContext, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleStateType = {
    data: CapsuleData[] | undefined,
    setData: React.Dispatch<React.SetStateAction<CapsuleData[] | undefined>>
}

export const CapsuleDatContext = createContext<CapsuleStateType>({} as CapsuleStateType)

const CapsuleContext = ({ children }: { children: ReactElement }) => {

    const [data, setData] = useState<CapsuleData[] | undefined>(undefined)

    return (
        <CapsuleDatContext.Provider value={{ data, setData }}>
            {children}
        </CapsuleDatContext.Provider>
    )
}

export default CapsuleContext
