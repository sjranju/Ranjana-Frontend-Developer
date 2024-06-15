import axios from 'axios'
import { useContext, useEffect } from 'react'
import { showCapsuleDetials } from '../context/OpenCapsuleModal'
import CapsuleDetails from './CapsuleDetails'
import { BsRocketFill } from "react-icons/bs";
import { CapsuleDatContext } from '../context/CapsuleContext'

const Capsules = () => {
    const { data, setData } = useContext(CapsuleDatContext)
    const { openModal, setOpenModal } = useContext(showCapsuleDetials)

    useEffect(() => {
        const fetchCapsules = async () => {
            const response = await axios.get("https://api.spacexdata.com/v3/capsules")
            setData(response.data)
        }
        fetchCapsules()

    }, [])
    console.log(data)

    return (
        <div className="relative max-h-full w-full pt-16 bg-gray-200">
            {/* <div className="relative h-full w-full mt-32 py-20 bg-gradient-to-br from-[#093247] to-[#F0E1BE]"> */}
            {/* Capsule data grid cards */}
            <div className='mx-20 grid grid-cols-4 gap-5'>
                {
                    data &&
                    data.map(card =>
                        <button key={card.capsule_serial} className="p-2 hover:scale-95 transition-all ease-in-out duration-100 "
                            onClick={() => setOpenModal(card)}>
                            <div className="min-h-[150px] relative mx-auto flex flex-col space-y-1 justify-center pt-1 font-semibold z-20 bg-gray-200 shadow-lg shadow-gray-500 hover:shadow-gray-400 rounded-md">
                                <p className='flex justify-center '><BsRocketFill size={20} scale={20} /><span>{card.capsule_serial}</span></p>
                                <p className='text-sm text-gray-600'>
                                    Type: <span className=''> {card.type}</span>
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Status:
                                    <span className={`${card?.status.toString() === 'active' ? 'text-green-600' : 'text-red-600'} ml-1`}>
                                        {card.status && card.status.toString().charAt(0).toUpperCase() + card.status.toString().slice(1)}
                                    </span></p>
                            </div>
                        </button>
                    )
                }
            </div>
            {/* Open modal opens capsule details modal */}
            <div className={`${openModal ? 'fixed min-h-screen w-full inset-0 mx-auto backdrop-brightness-50 flex items-center justify-center z-30' : 'hidden'}`}>
                <CapsuleDetails />
            </div>
        </div>
    )
}

export default Capsules