// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("https://example.cypress.io");
//   });
// });..

describe("Blog app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("blogs");
  });
});