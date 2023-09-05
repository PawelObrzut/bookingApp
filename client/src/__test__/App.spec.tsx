import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../App"

describe('Check Jest', () => {
	it('run tests in react-vite-ts', () => {
		expect(true).toBe(true)
	})
})

describe('App', () => {
	it('should render', () => {
		const { getByText } = render(<App />)
		const hello = getByText(/hello/i)
		expect(hello).toBeInTheDocument()
	})
  it("renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
