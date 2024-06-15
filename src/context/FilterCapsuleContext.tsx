import { ReactElement, createContext, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleStateType = {
    filterData: CapsuleData[] | undefined,
    setFilterData: React.Dispatch<React.SetStateAction<CapsuleData[] | undefined>>
}

export const FilterCapsuleDatContext = createContext<CapsuleStateType>({} as CapsuleStateType)

const FilterCapsuleContext = ({ children }: { children: ReactElement }) => {

    const [filterData, setFilterData] = useState<CapsuleData[] | undefined>(undefined)

    return (
        <FilterCapsuleDatContext.Provider value={{ filterData, setFilterData }}>
            {children}
        </FilterCapsuleDatContext.Provider>
    )
}

export default FilterCapsuleContext
