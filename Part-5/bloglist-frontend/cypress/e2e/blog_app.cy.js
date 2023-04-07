// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("https://example.cypress.io");
//   });
// });..

describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "jay",
      username: "admin",
      password: "pass123",
    };
    // const blog = {
    //   title: "Go To Statement Considered Harmful",
    //   author: "Edsger W. Dijkstra",
    //   url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    // };
    // cy.request("POST", "http://localhost:3003/api/blogs/", blog);
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3000");
  });
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000");
    cy.contains("blogs");
  });
  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.contains("log in").click();
      cy.get("#username").type("admin");
      cy.get("#password").type("pass123");
      cy.get("#login-button").click();
      cy.contains("jay logged in");
    });

    it("fails with wrong credentials", function () {
      cy.contains("log in").click();
      cy.get("#username").type("admin");
      cy.get("#password").type("wrong");
      cy.get("#login-button").click();
      cy.contains("Wrong credentials");
    });
  });
});
