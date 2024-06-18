import { render, screen } from "@testing-library/react"
import Footer from "../Footer"
import "@testing-library/jest-dom"

it('should render Footer component', () => {
    render(<Footer />)
    expect(screen.getByText('Made with ❤️ by Ranjana Singanoodi')).toBeInTheDocument()
})