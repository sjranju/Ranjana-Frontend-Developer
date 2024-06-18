import { useContext, useEffect, useState } from 'react'
import { showCapsuleDetials } from '../context/OpenCapsuleModal'
import CapsuleDetails from './CapsuleDetails'
import { CapsuleDataContext } from '../context/CapsuleContext'
import { FilterCapsuleDataContext } from '../context/FilterCapsuleContext';
import CapsuleCard from './CapsuleCard';
import axios from 'axios'

const Capsules = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data, setData } = useContext(CapsuleDataContext)
    const { openModal, setOpenModal } = useContext(showCapsuleDetials)
    const { filterData } = useContext(FilterCapsuleDataContext)
    const NUM_OF_CARDS_PER_PAGE = 8

    useEffect(() => {
        const fetchCapsules = async () => {
            const response = await axios.get("https://api.spacexdata.com/v3/capsules")
            setData(response.data)
        }
        fetchCapsules()
    }, [])

    useEffect(() => {
        setCurrentPage(1)
    }, [filterData])

    // Compute start and end page for pagination
    const startIndex = (currentPage - 1) * NUM_OF_CARDS_PER_PAGE
    const endIndex = startIndex + NUM_OF_CARDS_PER_PAGE
    const currentData = filterData?.length ? filterData.slice(startIndex, endIndex) : data?.slice(startIndex, endIndex)
    const numOfPages = Math.ceil((filterData?.length ? filterData.length : data?.length || 0) / NUM_OF_CARDS_PER_PAGE)

    return (
        <div className="max-h-full w-full py-16 bg-[#BFB6A0] px-20 space-y-6">
            {/* <div className="relative h-full w-full mt-32 py-20 bg-gradient-to-br from-[#093247] to-[#F0E1BE]"> */}
            {/* Capsule data grid cards */}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-10'>
                {
                    currentData?.map(capsule =>
                        <CapsuleCard key={capsule.capsule_serial} capsule={capsule} setOpenModal={() => setOpenModal(capsule)} />
                    )
                }
            </div>
            <div className="flex space-x-4 justify-end">
                <button onClick={() => { currentPage > 1 && setCurrentPage(prev => prev - 1) }}
                    disabled={currentPage === 1}
                    className={`${currentPage === 1 ? 'bg-gray-400 text-gray-700' : 'bg-[#093247] text-white'}  px-3 py-1.5 rounded-md font-semibold text-sm`}>
                    PREV
                </button>
                <button onClick={() => { currentPage < numOfPages && setCurrentPage(prev => prev + 1) }}
                    disabled={currentPage === numOfPages}
                    className={`${currentPage === numOfPages ? 'bg-gray-400 text-gray-700' : 'bg-[#093247] text-white'}  px-3 py-1.5 rounded-md font-semibold text-sm`}>
                    NEXT
                </button>
            </div>
            {/* Open modal opens capsule details modal */}
            <div className={`${openModal ? 'fixed h-full w-full inset-0 mx-auto backdrop-brightness-50 flex items-center justify-center z-50' : 'hidden'}`}>
                <CapsuleDetails />
            </div>
        </div>
    )
}

export default Capsules
