import { useContext } from "react"
import { showCapsuleDetials } from "../context/OpenCapsuleModal"
import { CapsuleDatContext } from "../context/CapsuleContext"
import { Status } from "../utils/types"

const Search = () => {
    const { data, setData } = useContext(CapsuleDatContext)
    console.log(Status.active)
    return (
        <div className="flex justify-between bg-gray-200 pt-12 px-24">
            <div className="">
                <select name="status" className="w-full pl-2 pr-32 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
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
                <select name="type" className="w-full pl-2 pr-32 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md">
                    <option value="Dragon 1.0" className="p-10">Dragon 1.0</option>
                    <option value="Dragon 1.1" className="p-10">Dragon 1.1</option>
                    <option value="Dragon 2.0" className="p-10">Dragon 2.0</option>
                </select>
            </div>
            <div className="">
                <input type="date" className="pl-2 pr-32 py-2 ring-1 ring-gray-100 rounded-md text-left bg-slate-100 shadow-md"></input>
            </div>
        </div>
    )
}

export default Search
