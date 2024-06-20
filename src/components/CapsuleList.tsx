import { useContext, useEffect, useState } from 'react';
import CapsuleCard from './CapsuleCard';
import CapsuleDetails from './CapsuleDetails';
import Pagination from './Pagination';
import { CapsuleDataContext } from '../context/CapsuleContext';
import { FilterCapsuleDataContext } from '../context/FilterCapsuleContext';
import { showCapsuleDetials } from '../context/OpenCapsuleModal';
import Search from './Search';
import axios from 'axios';
import { CapsuleData } from '../utils/types';

type CapsuleListProps = {
    pageTitle: string,
    apiEndpoint: string,
    capsuleState: string,
}

const CapsuleList = ({ pageTitle, apiEndpoint, capsuleState }: CapsuleListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [localData, setLocalData] = useState<CapsuleData[]>([])
    const { openModal, setOpenModal } = useContext(showCapsuleDetials);
    const { filterData, setFilterData } = useContext(FilterCapsuleDataContext);
    const NUM_OF_CARDS_PER_PAGE = 8;

    useEffect(() => {
        const fetchCapsules = async () => {
            const response = await axios.get(apiEndpoint)
            console.log(response.data)
            setLocalData(response.data)
        }
        fetchCapsules()

        return () => {
            setLocalData([])
            setFilterData([])
        }
    }, [apiEndpoint])

    useEffect(() => {
        setCurrentPage(1)
    }, [filterData])

    console.log('filterData', filterData)
    console.log('data', localData)

    // Compute start and end page for pagination
    const startIndex = (currentPage - 1) * NUM_OF_CARDS_PER_PAGE;
    const endIndex = startIndex + NUM_OF_CARDS_PER_PAGE;
    const currentData = localData?.slice(startIndex, endIndex)
    const numOfPages = Math.ceil((localData?.length || 0) / NUM_OF_CARDS_PER_PAGE);

    return (
        <div className="min-h-screen w-full bg-[#BFB6A0] px-20 pb-12">
            <div className="flex justify-between items-center">
                <div className="">{capsuleState && <div className="text-xl font-bold pt-6">{capsuleState}</div>}</div>
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
    );
};

export default CapsuleList;
