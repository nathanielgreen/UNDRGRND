describe('HomePage', function() {
  it('should() - assert that <title> is correct', function() {
    cy.visit('localhost:3000');
    cy.title().should('include', 'UNDRGRND');
  });
});
