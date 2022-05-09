/* eslint-disable jest/expect-expect */
import Counter from '@/features/counter/Counter'
import { render, screen } from '@/utils/testUtils'

describe('Counter', () => {
	render(<Counter />)
	it('renders without crashing', () => {
		screen.getByText(/0/i)
	})
})
