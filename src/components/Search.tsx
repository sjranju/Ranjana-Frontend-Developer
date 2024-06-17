import { useContext, useEffect, useState } from "react"
import { CapsuleDatContext } from "../context/CapsuleContext"
import { Status } from "../utils/types"
import { FilterCapsuleDatContext } from "../context/FilterCapsuleContext"

const Search = () => {
    const { data } = useContext(CapsuleDatContext)
    const { setFilterData } = useContext(FilterCapsuleDatContext)
    const [status, setStatus] = useState<string>('Status (Please select one)')
    const [type, setType] = useState<string>('Type (Please select one)')
    const [date, setDate] = useState<string>('')

    const handleStatus = () => {
        if (status !== 'Status (Please select one)' && type === 'Type (Please select one)') {
            setFilterData(data?.filter(capsule => capsule.status === status))
        } else if (type !== 'Type (Please select one)' && status === 'Status (Please select one)') {
            setFilterData(data?.filter(capsule => {
                return capsule.type === type
            }))
        } else if (type !== 'Type (Please select one)' && status !== 'Status (Please select one)') {
            setFilterData(data?.filter(capsule => capsule.type === type && capsule.status === status))
        } else if (data?.length) {
            setFilterData(data?.filter(capsule => {
                const originalDate = new Date(capsule.original_launch).toISOString().substring(0, 10)
                return originalDate === date
            }))
        }

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
                <div className="w-full md:w-1/3">
                    <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" className="w-full pl-2 pr-10 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                        <option value='Status (Please select one)' className="text-gray-600 md:text-base">Status (Please select one)</option>
                        <option value={Status.active} className="p-10">
                            {Status.active.charAt(0).toUpperCase() + Status.active.slice(1)}
                        </option>
                        <option value={Status.unknown} className="p-10">
                            {Status.unknown.charAt(0).toUpperCase() + Status.unknown.slice(1)}
                        </option>
                        <option value={Status.retired} className="p-10">
                            {Status.retired.charAt(0).toUpperCase() + Status.retired.slice(1)}
                        </option>
                    </select>
                </div>
                <div className="w-full md:w-1/3">
                    <select value={type} onChange={(e) => setType(e.target.value)} name="type" className="w-full pl-2 pr-10 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                        <option value='Type (Please select one)' className="text-gray-600 md:text-base">Type (Please select one)</option>
                        <option value="Dragon 1.0" className="p-10">Dragon 1.0</option>
                        <option value="Dragon 1.1" className="p-10">Dragon 1.1</option>
                        <option value="Dragon 2.0" className="p-10">Dragon 2.0</option>
                    </select>
                </div>
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        onChange={(e) => setDate(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "date")}
                        placeholder="Please select Launch time"
                        className="placeholder:text-gray-600 w-full pl-2 pr-10 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"
                    />
                    {/* <input type="date" placeholder="Launch time" value={date} onChange={e => setDate(e.target.value)} className="w-full pl-2 pr-10 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"></input> */}
                </div>
            </div>
        </div>
    )
}

export default Search
