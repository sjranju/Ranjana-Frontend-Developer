import axios from 'axios'
import { useContext, useEffect } from 'react'
import { showCapsuleDetials } from '../context/OpenCapsuleModal'
import CapsuleDetails from './CapsuleDetails'
import { BsRocketFill } from "react-icons/bs";
import { CapsuleDatContext } from '../context/CapsuleContext'
import { FilterCapsuleDatContext } from '../context/FilterCapsuleContext';
import CapsuleCard from './CapsuleCard';

const Capsules = () => {
    const { data, setData } = useContext(CapsuleDatContext)
    const { openModal, setOpenModal } = useContext(showCapsuleDetials)
    const { filterData } = useContext(FilterCapsuleDatContext)

    useEffect(() => {
        const fetchCapsules = async () => {
            const response = await axios.get("https://api.spacexdata.com/v3/capsules")
            setData(response.data)
        }
        fetchCapsules()

    }, [])
    console.log(data)

    return (
        <div className="max-h-full w-full py-16 bg-[#BFB6A0]">
            {/* <div className="relative h-full w-full mt-32 py-20 bg-gradient-to-br from-[#093247] to-[#F0E1BE]"> */}
            {/* Capsule data grid cards */}
            <div className='mx-20 grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    filterData?.length ?
                        filterData.map(capsule =>
                            <CapsuleCard key={capsule.capsule_serial} capsule={capsule} setOpenModal={() => setOpenModal(capsule)} />
                        )
                        : data &&
                        data.map(capsule =>
                            <CapsuleCard key={capsule.capsule_serial} capsule={capsule} setOpenModal={() => setOpenModal(capsule)} />
                        )
                }
            </div>

            {/* Open modal opens capsule details modal */}
            <div className={`${openModal ? 'fixed h-full w-full inset-0 mx-auto backdrop-brightness-50 flex items-center justify-center z-50' : 'hidden'}`}>
                <CapsuleDetails />
            </div>
        </div>
    )
}

export default Capsules
