//your JS code here. If required.
describe('Manipulate Array Tests', () => {
    beforeEach(() => {
        // Visit the page where your script is loaded
        cy.visit('path/to/your/index.html');

        // Call the manipulateArray function to start the process
        cy.window().then((win) => {
            win.manipulateArray(); // Ensure the function is called
        });
    });

    it('should display even numbers after 1 second', () => {
        cy.wait(4000); // Wait for 3s (initial delay) + 1s (filtering delay)
        cy.get('#output').should('contain', 'Even Numbers: 2, 4');
    });

    it('should display multiplied numbers after an additional 2 seconds', () => {
        cy.wait(6000); // Wait for 3s (initial delay) + 1s (filtering delay) + 2s (multiplication delay)
        cy.get('#output').should('contain', 'Multiplied by 2: 4, 8');
    });
});
