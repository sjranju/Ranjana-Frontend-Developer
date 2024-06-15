import { useContext, useEffect, useState } from "react"
import { showCapsuleDetials } from "../context/OpenCapsuleModal"
import CapsuleContext, { CapsuleDatContext } from "../context/CapsuleContext"
import { Status } from "../utils/types"
import { FilterCapsuleDatContext } from "../context/FilterCapsuleContext"

const Search = () => {
    const { data } = useContext(CapsuleDatContext)
    const { setFilterData } = useContext(FilterCapsuleDatContext)
    const [status, setStatus] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const handleStatus = () => {
        if (status) {
            setFilterData(data?.filter(capsule => capsule.status === status))
        } else if (type) {
            setFilterData(data?.filter(capsule => capsule.type === type))
        } else {
            setFilterData(data?.filter(capsule => {
                const originalDate = new Date(capsule.original_launch).toISOString().substring(0, 10)
                return originalDate === date
            }))
        }

    }

    useEffect(() => {
        handleStatus()
    }, [status, type, date])

    console.log(date)
    return (
        <div className="flex justify-between bg-gray-200 pt-12 px-24">
            <div className="">
                <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" className="w-full pl-2 pr-12 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                    <option defaultValue='status'>Status (Please select one)</option>
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
            <div className="">
                <select value={type} onChange={(e) => setType(e.target.value)} name="type" className="w-full pl-2 pr-12 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                    <option defaultValue='type'>Type (Please select one)</option>
                    <option value="Dragon 1.0" className="p-10">Dragon 1.0</option>
                    <option value="Dragon 1.1" className="p-10">Dragon 1.1</option>
                    <option value="Dragon 2.0" className="p-10">Dragon 2.0</option>
                </select>
            </div>
            <div className="">
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="pl-2 pr-32 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"></input>
            </div>
        </div>
    )
}

export default Search
