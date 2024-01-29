describe("Full E2E demo", () => {
  it("all interactions should work", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // click on a random menu list item to navigate to the detail page
    cy.get('a[href*="menu-item"]')
      .then((matches) => {
        // use Lodash _.sample method to pick
        // a random element from an array
        return Cypress._.sample(matches.toArray());
      })
      .click();

    // The new url should include "/menu-item"
    cy.url().should("include", "menu-item");

    // going back to previous page should take the user to the menu list again
    cy.get('[title="Go Back"').click();

    // click on a random menu list item again
    cy.get('a[href*="menu-item"]')
      .then((matches) => {
        // use Lodash _.sample method to pick
        // a random element from an array
        return Cypress._.sample(matches.toArray());
      })
      .click();

    // The new url should include "/menu-item"
    cy.url().should("include", "menu-item");

    // click on the add to cart button
    cy.get('[data-qa="add-to-cart-button"]').click();

    // navigate to the cart
    cy.get('[role="button"][title="Go to cart"]').click();

    // verify that the cart price is greater than zero since it is not empty
    cy.get('[data-qa="cart-total-price"]')
      .invoke("text") // Get the text content of the element
      .then(parseInt)
      .should("be.gt", 0); // Check if the number is greater than 0

    // empty cart
    cy.get('[aria-label="Delete Menu Item"]').click();

    // verify that the cart price is greater than zero since it is not empty
    cy.get('[data-qa="cart-total-price"]').should("not.exist");

    // go back to home page
    cy.get('[role="navigation"][aria-label="Main"]').click();

    cy.get('a[href*="menu-item"]').should("have.length.greaterThan", 0);
  });
});
