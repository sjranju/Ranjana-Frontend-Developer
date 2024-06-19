import { useContext, useEffect, useState } from 'react'
import { CapsuleDataContext } from '../context/CapsuleContext'
import { FilterCapsuleDataContext } from '../context/FilterCapsuleContext';
import axios from 'axios'
import CapsuleCard from './CapsuleCard';
import CapsuleDetails from './CapsuleDetails';
import Pagination from './Pagination';
import Search from './Search';
import { showCapsuleDetials } from '../context/OpenCapsuleModal';

const Capsules = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const { data, setData } = useContext(CapsuleDataContext)
    const { filterData } = useContext(FilterCapsuleDataContext)
    const { openModal, setOpenModal } = useContext(showCapsuleDetials);
    const NUM_OF_CARDS_PER_PAGE = 8;

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

    const startIndex = (currentPage - 1) * NUM_OF_CARDS_PER_PAGE;
    const endIndex = startIndex + NUM_OF_CARDS_PER_PAGE;
    const currentData = filterData?.length ? filterData?.slice(startIndex, endIndex) : data?.slice(startIndex, endIndex)
    const numOfPages = Math.ceil((filterData?.length ? filterData.length : data?.length || 0) / NUM_OF_CARDS_PER_PAGE);


    return (
        <div className="min-h-screen w-full bg-[#BFB6A0] px-20 pb-12 pt-24">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-between items-center">
                <div className="font-bold text-2xl">Capsules</div>
                <Search />
            </div>
            {/* Capsule data grid cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 py-12">
                {currentData?.map(capsule => (
                    <CapsuleCard key={capsule.capsule_serial} capsule={capsule} setOpenModal={() => setOpenModal(capsule)} />
                ))}
            </div>

            {/* Pagination */}
            {numOfPages > 1 && <Pagination currentPage={currentPage} numOfPages={numOfPages} setCurrentPage={setCurrentPage} />}

            {/* Modal for capsule details */}
            <div className={`${openModal ? 'fixed h-full w-full inset-0 mx-auto backdrop-brightness-50 flex items-center justify-center z-50' : 'hidden'}`}>
                <CapsuleDetails />
            </div>
        </div>
    )
}

export default Capsules
