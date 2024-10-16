// cypress/integration/manipulateArray.spec.js

describe('Manipulating Array Tests', () => {
    beforeEach(() => {
        cy.visit('/main.html'); // Ensure this path is correct
        cy.window().then((win) => {
            win.manipulateArray([1, 2, 3, 4]); // Call the function
        });
    });

    it('should display even numbers after 1 second', () => {
        cy.wait(4000); // Wait for filtering
        cy.get('#output').should('contain', 'Even Numbers: 2, 4');
    });

    it('should display multiplied numbers after an additional 2 seconds', () => {
        cy.wait(6000); // Wait for multiplication
        cy.get('#output').should('contain', 'Multiplied by 2: 4, 8');
    });
});
