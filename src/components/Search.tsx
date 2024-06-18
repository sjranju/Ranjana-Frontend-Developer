import { useContext, useEffect, useState } from "react"
import { CapsuleDataContext } from "../context/CapsuleContext"
import { Status } from "../utils/types"
import { FilterCapsuleDataContext } from "../context/FilterCapsuleContext"

const Search = () => {
    const { data } = useContext(CapsuleDataContext)
    const { setFilterData } = useContext(FilterCapsuleDataContext)
    const [status, setStatus] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const handleStatus = () => {
        let capsuleDataCopy = data
        if (status !== '') {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => capsule.status === status)
        }
        if (type !== '') {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => {
                return capsule.type === type
            })
        }
        if (date?.length) {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => {
                const originalDate = new Date(capsule.original_launch).toISOString().substring(0, 10)
                return originalDate === date
            })
        }
        setFilterData(capsuleDataCopy)
    }

    useEffect(() => {
        handleStatus()
    }, [status, type, date])

    return (
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between items-center md:space-x-0 md:space-y-0 bg-[#BFB6A0] pt-12 px-24">
            <div className="text-2xl font-bold ">
                Capsules
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
                <div className="w-full md:w-1/4">
                    <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" className="w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                        <option value='Status (Please select one)' className="text-gray-600 md:text-base">Status (Please select one)</option>
                        {
                            Object.values(Status).map(curStatus =>
                                <option key={curStatus} value={curStatus} className="p-10">
                                    {curStatus.charAt(0).toUpperCase() + curStatus.slice(1)}
                                </option>
                            )
                        }
                    </select>
                </div>
                <div className="w-full md:w-1/4">
                    <select value={type} onChange={(e) => setType(e.target.value)} name="type" className="w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                        <option value='Type (Please select one)' className="text-gray-600 md:text-base">Type (Please select one)</option>
                        <option value="Dragon 1.0" className="p-10">Dragon 1.0</option>
                        <option value="Dragon 1.1" className="p-10">Dragon 1.1</option>
                        <option value="Dragon 2.0" className="p-10">Dragon 2.0</option>
                    </select>
                </div>
                <div className="w-full md:w-1/4">
                    <input
                        type="text"
                        onChange={(e) => setDate(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "date")}
                        placeholder="Please choose launch date"
                        className="placeholder:text-gray-600 w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"
                    />
                </div>
                <div className={`${(status || type || date) ? 'bg-[#093247]' : 'bg-gray-300 text-black'} max-w-full md:w-1/4 text-xs md:text-base text-white py-2 flex justify-center items-center rounded-md shadow-md ring-1 ring-gray-300 text-left font-semibold`}>
                    <button onClick={() => {
                        setStatus('')
                        setType('')
                        setDate('')
                    }}>Clear filter</button>
                </div>
            </div>
        </div>
    )
}

export default Search
