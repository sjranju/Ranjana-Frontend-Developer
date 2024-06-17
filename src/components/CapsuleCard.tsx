import { BsRocketFill } from "react-icons/bs"
import { CapsuleData } from "../utils/types"


const CapsuleCard = ({ capsule, setOpenModal }: { capsule: CapsuleData, setOpenModal: any }) => {

    return (
        <button className="p-2 hover:scale-95 transition-all ease-in-out duration-100 "
            onClick={() => setOpenModal(capsule)}>
            <div className="min-h-[150px] relative mx-auto flex flex-col space-y-1 justify-center pt-1 font-semibold z-20 bg-[#093247] text-white shadow-lg shadow-gray-500 hover:shadow-gray-400 rounded-md">
                <p className='flex justify-center '><BsRocketFill size={20} scale={20} /><span>{capsule.capsule_serial}</span></p>
                <p className='text-sm text-white'>
                    Type: <span className=''> {capsule.type}</span>
                </p>
                <p className='text-sm text-white'>
                    Status:
                    <span className={`${capsule?.status.toString() === 'active' ? 'text-green-600' : 'text-red-600'} ml-1`}>
                        {capsule.status && capsule.status.toString().charAt(0).toUpperCase() + capsule.status.toString().slice(1)}
                    </span></p>
            </div>
        </button>
    )
}

export default CapsuleCard
