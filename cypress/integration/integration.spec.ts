describe('E2E Tests', () => {
	it('should display the title', () => {
		cy.visit('http://localhost:3000/')
		cy.get(':nth-child(2) > button')
	})
})
