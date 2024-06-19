import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import Capsules from "../Capsules"
import { FilterCapsuleDataContext } from "../../context/FilterCapsuleContext"
import { showCapsuleDetials } from "../../context/OpenCapsuleModal"
import { CapsuleDataContext } from "../../context/CapsuleContext"
import { Status } from "../../utils/types"
import axios from "axios"
import '@testing-library/jest-dom'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockCapsuleData = {
    "capsule_serial": "C112",
    "capsule_id": "dragon1",
    "status": Status.active,
    "original_launch": "2017-02-19T14:39:00.000Z",
    "original_launch_unix": 1487515140,
    "missions": [
        {
            "name": "CRS-10",
            "flight": 36
        }
    ],
    "landings": 1,
    "type": "Dragon 1.1",
    "details": null,
    "reuse_count": 0
}

describe('Capsules Component', () => {
    beforeAll(() => {
        render(
            <CapsuleDataContext.Provider value={{ data: [mockCapsuleData], setData: jest.fn() }}>
                <FilterCapsuleDataContext.Provider value={{ filterData: [], setFilterData: jest.fn() }}>
                    <showCapsuleDetials.Provider value={{ openModal: mockCapsuleData, setOpenModal: jest.fn() }}>
                        <Capsules />
                    </showCapsuleDetials.Provider>
                </FilterCapsuleDataContext.Provider>
            </CapsuleDataContext.Provider>
        )
    })

    it('should render capsules component', async () => {
        mockedAxios.get.mockResolvedValue({ data: [mockCapsuleData] })

        await waitFor(() => {
            expect(screen.getAllByText(/C112/).length).toEqual(2)
            // expect(screen.getAllByRole("button").length).toEqual(4)
        })
    })
    it('should show prev and next buttons disabled', async () => {
        mockedAxios.get.mockResolvedValue({ data: [mockCapsuleData] })

        await waitFor(() => {
            expect(screen.getAllByRole("button").length).toEqual(4)
            // Considering that there is only mockCapsuleData
            const prevButton = screen.getAllByRole('button').find(btn => btn.innerHTML === 'PREV')
            expect(prevButton).toBeInTheDocument()
            expect(prevButton).toBeDisabled()
            const nextButton = screen.getAllByRole('button').find(btn => btn.innerHTML === 'NEXT')
            expect(nextButton).toBeInTheDocument()
            expect(nextButton).toBeDisabled()
        })
    })

})