import { BsRocketFill } from "react-icons/bs"
import { CapsuleData } from "../utils/types"


const CapsuleCard = ({ capsule, setOpenModal }: { capsule: CapsuleData, setOpenModal: any }) => {

    return (
        // Display Capsule Card data like capsule serial, type, status and launch date
        <button data-testid="openCapsuleDetailsModal" className="hover:scale-95 transition-all ease-in-out duration-100 "
            onClick={() => setOpenModal(capsule)}>
            <div className="px-2 min-h-[150px] relative mx-auto flex flex-col space-y-1 justify-center font-semibold z-20 bg-[#093247] text-white shadow-lg shadow-gray-500 hover:shadow-gray-400 rounded-md">
                <div className='flex justify-center mb-2'>
                    <BsRocketFill size={20} scale={20} />
                    <span>{capsule.capsule_serial}</span>
                </div>
                <div className='text-sm text-gray-300'>
                    Type: <span className=''> {capsule.type}</span>
                </div>
                <div className='text-sm text-gray-300'>
                    Status:
                    <span className={`${capsule?.status.toString() === 'active' ? 'text-green-600' : 'text-red-600'} ml-1`}>
                        {capsule.status && capsule.status.toString().charAt(0).toUpperCase() + capsule.status.toString().slice(1)}
                    </span>
                </div>
                <div className="text-sm text-gray-300">
                    Launch Date:
                    <span className="ml-1">
                        {capsule.original_launch ? new Date(capsule.original_launch).toISOString().slice(0, 10) : 'Yet to be revealed'}
                    </span>
                </div>
            </div>
        </button>
    )
}

export default CapsuleCard
