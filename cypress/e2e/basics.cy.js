/// <reference types="cypress" />

describe('tasks page', () => {
  it('Should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header img').should('be.visible');
    
  });
  it('Should display the page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header h1').should('contain.text', 'React Tasks');
  });
})