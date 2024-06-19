import { useContext, useEffect, useState } from "react"
import { CapsuleDataContext } from "../context/CapsuleContext"
import { Status } from "../utils/types"
import { FilterCapsuleDataContext } from "../context/FilterCapsuleContext"

const Search = () => {
    const { data } = useContext(CapsuleDataContext)
    const { setFilterData } = useContext(FilterCapsuleDataContext)
    const [filters, setFilters] = useState({ status: '', type: '', date: '' });

    const handleStatus = () => {
        let capsuleDataCopy = data
        if (filters.status !== '') {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => capsule.status === filters.status)
        }
        if (filters.type !== '') {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => {
                return capsule.type === filters.type
            })
        }
        if (filters.date?.length) {
            capsuleDataCopy = capsuleDataCopy?.filter(capsule => {
                const originalDate = new Date(capsule.original_launch).toISOString().substring(0, 10)
                return originalDate === filters.date
            })
        }
        setFilterData(capsuleDataCopy)
    }

    useEffect(() => {
        handleStatus()
    }, [filters])

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }

    return (
        <div className="flex items-center justify-center bg-[#BFB6A0]">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
                {/* Search based on status */}
                <div className="w-full md:w-1/4">
                    <select
                        value={filters.status}
                        onChange={(e) => handleFilterChange(e)}
                        name="status"
                        aria-label="status"
                        className="w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"
                    >
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
                {/* Search based on type */}
                <div className="w-full md:w-1/4">
                    <select
                        value={filters.type}
                        onChange={(e) => handleFilterChange(e)}
                        name="type"
                        aria-label="type"
                        className="w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"
                    >
                        <option value='Type (Please select one)' className="text-gray-600 md:text-base">Type (Please select one)</option>
                        <option value="Dragon 1.0" className="p-10">Dragon 1.0</option>
                        <option value="Dragon 1.1" className="p-10">Dragon 1.1</option>
                        <option value="Dragon 2.0" className="p-10">Dragon 2.0</option>
                    </select>
                </div>
                {/* Search based on date */}
                <div className="w-full md:w-1/4">
                    <input
                        type="text"
                        value={filters.date}
                        onChange={(e) => handleFilterChange(e)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "date")}
                        placeholder="Launch date"
                        aria-placeholder="Launch date"
                        className="placeholder:text-gray-600 w-full pl-1 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"
                    />
                </div>
                {/* Clear filters */}
                <div className={`${(filters.status || filters.type || filters.date) ? 'bg-[#093247] text-white' : 'bg-gray-300 text-black'} max-w-full md:w-1/4 text-xs md:text-base py-2 flex justify-center items-center rounded-md shadow-md ring-1 ring-gray-300 text-left font-semibold`}>
                    <button onClick={() => {
                        setFilters({ status: '', type: '', date: '' })
                    }}>Clear filter</button>
                </div>
            </div>
        </div>
    )
}

export default Search
