import { useContext } from "react"
import { showCapsuleDetials } from "../context/OpenCapsuleModal"
import { IoMdClose } from "react-icons/io";

const CapsuleDetails = () => {

    const { openModal, setOpenModal } = useContext(showCapsuleDetials)

    return (
        <div className={` ${openModal?.capsule_id ? 'relative w-[700px] h-[400px] bg-gray-800 text-white shadow-2xl py-14 px-10 flex flex-col justify-center text-lg rounded-md z-40' : 'hidden'}`}>
            <button className="absolute top-4 right-4 font-bold hover:scale-110" onClick={() => setOpenModal(undefined)}>{<IoMdClose size={24} />}</button>
            <p className="text-3xl font-bold pb-2 border-b">{openModal?.capsule_serial && openModal.capsule_serial.charAt(0).toUpperCase() + openModal.capsule_serial.slice(1)}</p>
            {/* Capsule details */}
            <div className="flex justify-between pt-4">
                <div className="flex flex-col space-y-2 text-sm flex-wrap shrink">
                    <p className="text-lg font-bold text-gray-400 pb-1">Type: {openModal?.type && openModal.type.charAt(0).toUpperCase() + openModal.type.slice(1)}</p>
                    <p className="font-semibold ">
                        Launch Date:
                        {openModal?.original_launch && Intl.DateTimeFormat('en-gb', { day: '2-digit', month: 'short', year: 'numeric' }).format(Date.parse(openModal?.original_launch))},
                        <span className={`${openModal?.status && (openModal.status.toString() === 'active' ? 'text-green-600' : 'text-red-600')} font-bold ml-1`}>
                            {openModal?.status && openModal.status.toString().charAt(0).toUpperCase() + openModal.status.toString().slice(1)}
                        </span>
                    </p>
                    <p className="text-xs text-gray-300">{openModal?.details}</p>
                    <p className="font-semibold text-md"> Missions:</p>
                    {
                        openModal?.missions.map(mission =>
                            <div key={mission.name} className="grid grid-cols-[90px_90px] gap-x-2">
                                <span className="flex items-center space-x-1">
                                    <span className="font-semibold text-gray-300">Name</span>:
                                    <span className="text-gray-200"> {mission.name}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                    <span className="font-semibold text-gray-300">Flight</span>:
                                    <span className="text-gray-200"> {mission.flight}</span>
                                </span>
                            </div>
                        )
                    }
                    <div className="font-semibold text-gray-300">
                        {
                            openModal?.landings === 0 ?
                                'No landings'
                                : <div className="flex items-center space-x-1 ">
                                    <div className="font-semibold text-gray-300"> Landings:</div>
                                    <div> {openModal?.landings}</div>
                                </div>
                        }
                    </div>
                    <div className="font-semibold text-gray-300">{openModal?.reuse_count === 0 ? 'Never reused' : `Reused: ` + openModal?.reuse_count}</div>

                </div>
                {/* Capsule image */}
                <div className="flex shrink-0">
                    <img src={`./images/${openModal?.type}.png`} className="w-48 h-48 object-cover rounded-sm"></img>
                </div>
            </div>
        </div>
    )
}

export default CapsuleDetails
