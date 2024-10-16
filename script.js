describe('Manipulating Data with Promises', () => {
    beforeEach(() => {
        cy.visit('/main.html'); // Adjust to the correct path of your HTML file

        cy.window().then((win) => {
            win.manipulateArray(); // Call the function from the window object
        });
    });

    it('should display even numbers after 1 second', () => {
        cy.wait(4000); // Total wait time for initial and filtering
        cy.get('#output').should('contain', 'Even Numbers: 2, 4');
    });

    it('should display multiplied numbers after an additional 2 seconds', () => {
        cy.wait(6000); // Total wait time for all processes
        cy.get('#output').should('contain', 'Multiplied by 2: 4, 8');
    });
});
