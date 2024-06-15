import { ReactElement, createContext, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleStateType = {
    data: CapsuleData[] | undefined,
    setData: React.Dispatch<React.SetStateAction<CapsuleData[] | undefined>>
}

export const FilterCapsuleDatContext = createContext<CapsuleStateType>({} as CapsuleStateType)

const FilterCapsuleContext = ({ children }: { children: ReactElement }) => {

    const [data, setData] = useState<CapsuleData[] | undefined>(undefined)

    return (
        <FilterCapsuleDatContext.Provider value={{ data, setData }}>
            {children}
        </FilterCapsuleDatContext.Provider>
    )
}

export default FilterCapsuleContext
