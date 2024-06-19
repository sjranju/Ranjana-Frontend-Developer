import React from 'react';

type PaginationProps = {
    currentPage: number,
    numOfPages: number,
    setCurrentPage: (value: React.SetStateAction<number>) => void
}

const Pagination = ({ currentPage, numOfPages, setCurrentPage }: PaginationProps) => {
    const pageNumbers = Array.from({ length: numOfPages }, (_, i) => i + 1);

    return (
        <div className="flex space-x-4 justify-end pt-4 pb-16">
            {/* PREV button */}
            <button
                onClick={() => { currentPage > 1 && setCurrentPage(prev => prev - 1) }}
                disabled={currentPage === 1}
                className={`${currentPage === 1 ? 'bg-gray-400 text-gray-700' : 'bg-[#093247] text-white'}  px-3 py-1.5 rounded-md font-semibold text-sm`}
            >
                PREV
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`${currentPage === number ? 'bg-[#093247] text-white' : 'bg-gray-200 text-black'} px-3 py-1.5 rounded-md font-semibold text-sm`}
                >
                    {number}
                </button>
            ))}
            {/* Next button */}
            <button
                onClick={() => { currentPage < numOfPages && setCurrentPage(prev => prev + 1) }}
                disabled={currentPage === numOfPages}
                className={`${currentPage === numOfPages ? 'bg-gray-400 text-gray-700' : 'bg-[#093247] text-white'}  px-3 py-1.5 rounded-md font-semibold text-sm`}
            >
                NEXT
            </button>
        </div>
    );
};

export default Pagination;
