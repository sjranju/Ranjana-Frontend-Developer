import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../Search';
import { CapsuleDataContext } from '../../context/CapsuleContext';
import { FilterCapsuleDataContext } from '../../context/FilterCapsuleContext';
import { Status } from '../../utils/types';

const mockData = [
    {
        capsule_serial: "C112",
        capsule_id: "dragon1",
        status: Status.active,
        original_launch: "2017-02-19T14:39:00.000Z",
        original_launch_unix: 1487515140,
        missions: [
            {
                name: "CRS-10",
                flight: 36
            }
        ],
        landings: 1,
        type: "Dragon 1.1",
        details: null,
        reuse_count: 0
    },
    {
        capsule_serial: "C113",
        capsule_id: "dragon2",
        status: Status.retired,
        original_launch: "2018-02-19T14:39:00.000Z",
        original_launch_unix: 1487515140,
        missions: [
            {
                name: "CRS-10",
                flight: 36
            }
        ],
        landings: 1,
        type: "Dragon 2.0",
        details: null,
        reuse_count: 1
    }
];

const mockSetFilterData = jest.fn();

describe('Search Component', () => {
    beforeEach(() => {
        render(
            <CapsuleDataContext.Provider value={{ data: mockData, setData: jest.fn() }}>
                <FilterCapsuleDataContext.Provider value={{ filterData: [], setFilterData: mockSetFilterData }}>
                    <Search />
                </FilterCapsuleDataContext.Provider>
            </CapsuleDataContext.Provider>
        );
    });

    it('renders without crashing', () => {
        expect(screen.getByText('Capsules')).toBeInTheDocument();
    });

    it('filters data by status', () => {
        fireEvent.change(screen.getByRole('combobox', { name: 'status' }), { target: { value: Status.active } });
        expect(mockSetFilterData).toHaveBeenCalledWith([mockData[0]]);
    });

    it('filters data by type', () => {
        fireEvent.change(screen.getByRole('combobox', { name: /type/i }), { target: { value: 'Dragon 2.0' } });
        expect(mockSetFilterData).toHaveBeenCalledWith([mockData[1]]);
    });

    it('filters data by date', () => {
        fireEvent.change(screen.getByPlaceholderText(/please choose launch date/i), { target: { value: '2017-02-19' } });
        expect(mockSetFilterData).toHaveBeenCalledWith([mockData[0]]);
    });

    it('clears filters', async () => {
        // Set initial filters
        fireEvent.change(screen.getByRole('combobox', { name: /status/i }), { target: { value: Status.active } });
        fireEvent.change(screen.getByRole('combobox', { name: /type/i }), { target: { value: 'Dragon 2.0' } });
        fireEvent.change(screen.getByPlaceholderText(/please choose launch date/i), { target: { value: '2017-02-19' } });
        console.log("screen.getByRole('combobox', { name: /status/i }).innerText", screen.getByRole('combobox', { name: /status/i }).outerText)
        // Clear filters
        fireEvent.click(screen.getByRole('button', { name: /clear filter/i }));
        await waitFor(() => {
            expect(screen.getByRole('combobox', { name: /status/i }).textContent).toBe('Status (Please select one)ActiveUnknownRetiredDestroyed');
            expect(screen.getByRole('combobox', { name: /type/i }).textContent).toBe('Type (Please select one)Dragon 1.0Dragon 1.1Dragon 2.0');
            expect(screen.getByPlaceholderText(/please choose launch date/i)).toBeInTheDocument();
        });
    });
});
