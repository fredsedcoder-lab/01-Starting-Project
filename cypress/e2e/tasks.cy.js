/// <reference types="cypress" />

describe('tasks management', () => {
    it('Should open and close new task modal', () => {
       cy.visit('http://localhost:5173/');
       cy.contains('Add Task').click();
       cy.get('.backdrop').should('exist');
       cy.get('.backdrop').click({ force: true });
       cy.get('dialog.modal').should('not.exist');
    }
    );
    it('Should open and click on cancel new task modal', () => {
       cy.visit('http://localhost:5173/');
       cy.contains('Add Task').click();
       cy.get('.backdrop').should('exist');
       cy.get('form#new-task-form .actions button[type="button"]').contains('Cancel').click();
       cy.get('dialog.modal').should('not.exist');
    });
});