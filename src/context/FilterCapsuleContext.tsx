import { ReactElement, createContext, useState } from "react"
import { CapsuleData } from "../utils/types"

type CapsuleStateType = {
    filterData: CapsuleData[] | undefined,
    setFilterData: React.Dispatch<React.SetStateAction<CapsuleData[] | undefined>>,
}

export const FilterCapsuleDataContext = createContext<CapsuleStateType>({} as CapsuleStateType)

const FilterCapsuleContext = ({ children }: { children: ReactElement }) => {

    const [filterData, setFilterData] = useState<CapsuleData[] | undefined>(undefined)

    return (
        <FilterCapsuleDataContext.Provider value={{ filterData, setFilterData }}>
            {children}
        </FilterCapsuleDataContext.Provider>
    )
}

export default FilterCapsuleContext
