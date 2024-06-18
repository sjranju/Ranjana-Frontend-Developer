import { fireEvent, render, screen } from "@testing-library/react"
import CapsuleCard from "../CapsuleCard"
import { Status } from "../../utils/types"
import "@testing-library/jest-dom"

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

const mockSetOpenModal = jest.fn()
describe('Capsule component', () => {

    it('should render capsule card component', () => {
        render(<CapsuleCard capsule={mockCapsuleData} setOpenModal={mockSetOpenModal} />)
        expect(screen.getByText(/active/i)).toBeInTheDocument()
        expect(screen.getByText(/C112/i)).toBeInTheDocument()
        expect(screen.getByText(/2017-02-19/i)).toBeInTheDocument()
        expect(screen.getByText(/Dragon 1.1/i)).toBeInTheDocument()
    })

    it('should show capsule details', () => {
        render(<CapsuleCard capsule={mockCapsuleData} setOpenModal={mockSetOpenModal} />)
        fireEvent.click(screen.getByTestId('openCapsuleDetailsModal'))
        expect(mockSetOpenModal).toHaveBeenCalledTimes(1)
        expect(mockSetOpenModal).toHaveBeenCalledWith(mockCapsuleData)
    })
})