//your JS code here. If required.
// Cypress test example
describe('Promise Chaining Tests', () => {
    it('should update the output correctly', () => {
        cy.visit(baseUrl + "/main.html"); // Adjust baseUrl as needed
        cy.get("#output").should("contain", ""); // Initially empty
        
        // First promise check
        cy.wait(4000); // Wait for first promise to resolve (3 seconds + 1 second)
        cy.get("#output").should("contain", "2,4"); // Check for even numbers

        // Second promise check
        cy.wait(2000); // Wait for second promise to resolve (2 additional seconds)
        cy.get("#output").should("contain", "4,8"); // Check for multiplied numbers
    });
});
