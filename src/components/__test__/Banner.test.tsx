import { render, screen } from "@testing-library/react"
import Banner from "../Banner"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe('Banner Component', () => {
    it('should render Banner image', () => {
        render(
            <BrowserRouter>
                <Banner />
            </BrowserRouter>
        )
        const bgImage = screen.getByAltText('SpaceX')
        expect(bgImage).toBeInTheDocument()
    }),
        it('should render navbar', () => {
            render(
                <BrowserRouter>
                    <Banner />
                </BrowserRouter>
            )
            expect(screen.getByText('Home')).toBeInTheDocument()
            expect(screen.getByText('Upcoming')).toBeInTheDocument()
            expect(screen.getByText('Past')).toBeInTheDocument()
            expect(screen.getByText('About')).toBeInTheDocument()
        }),
        it('should have SpaceX logo', () => {
            render(
                <BrowserRouter>
                    <Banner />
                </BrowserRouter>
            )
            expect(screen.getByAltText('Logo')).toBeInTheDocument()
        })
})