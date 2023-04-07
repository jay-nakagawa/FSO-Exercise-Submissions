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
    const user2 = {
      name: "jay2",
      username: "admin2",
      password: "pass123",
    };
    // const blog = {
    //   title: "Go To Statement Considered Harmful",
    //   author: "Edsger W. Dijkstra",
    //   url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    // };
    // cy.request("POST", "http://localhost:3003/api/blogs/", blog);
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.request("POST", "http://localhost:3003/api/users/", user2);
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
  describe("When logged in", function () {
    beforeEach(function () {
      cy.login({ username: "admin", password: "pass123" });
      cy.createBlog({
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 6,
      });
    });

    it("A blog can be created", function () {
      cy.contains("new blog").click();
      cy.contains("add a blog");
      cy.get("#title").type("this is a test");
      cy.get("#author").type("this is a test");
      cy.get("#url").type("this is a test");
      cy.get("#save").click();
      cy.contains("this is a test");
    });
    it("A blog can be liked", function () {
      cy.contains("show").click();
      cy.contains("likes = 0");
      cy.get("#like").click();
      cy.contains("likes = 1");
    });
    it("A blog can be deleted", function () {
      cy.contains("show").click();
      cy.contains("delete").click();
      cy.contains("Go To Statement Considered Harmful").should("not.exist");
      cy.contains("deleted blog");
    });
    it("delete button is not visible to other users", function () {
      cy.login({ username: "admin2", password: "pass123" });
      cy.contains("jay2 logged in");
      cy.contains("show").click();
      cy.contains("delete").should("not.exist");
      cy.contains("like");
    });
    it("blogs are ordered by likes", function () {
      cy.createBlog({
        title: "blog2",
        author: "blog2",
        url: "blog2",
      });
      cy.createBlog({
        title: "blog3",
        author: "blog3",
        url: "blog3",
      });
      cy.contains("blog3").parent().find("button").click();
      cy.contains("blog3").parent().find("#like").click();
      cy.contains("blog3").parent().find("#like").click();
      cy.contains("hide").click();

      cy.contains("blog2").parent().find("button").click();
      cy.contains("blog2").parent().find("#like").click();

      cy.get("#blog").then((blogs) => {
        cy.wrap(blogs[0]).contains("blog3");
        cy.wrap(blogs[1]).contains("blog2");
        cy.wrap(blogs[2]).contains("Go To Statement Considered Harmful");
      });
    });
  });
});
