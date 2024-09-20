/// <reference types="cypress" />
import herokuHomePage from "../page_objects/herokuHomePage";
import addRemoveElementsPage from "../page_objects/addRemoveElementsPage";
import basicAuthPage from "../page_objects/basicAuthPage";
import challengingDOMPage from "../page_objects/challengingDOMPage";

describe("Heroku app tests", () => {
  it("Add/Remove Elements Test", () => {
    herokuHomePage.visitHomePage();
    herokuHomePage.navigateToExamples(
      herokuHomePage.elements.addRemoveElements
    );

    addRemoveElementsPage.addElements(4);
    cy.get(addRemoveElementsPage.elements.deleteElementButton).should(
      "have.length",
      4
    );

    addRemoveElementsPage.deleteAllElements();
    cy.get(addRemoveElementsPage.elements.deleteElementButton).should(
      "not.exist"
    );
  });

  it("Basic authentication test", () => {
    // Navigate to the home page
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    let expectedText = "Basic Auth";
    cy.get(basicAuthPage.elements.title).should("be.visible");
    cy.get(basicAuthPage.elements.title).should("have.text", expectedText);
  });

  it("Broken Images Test", () => {
    cy.log("This test is expected to fail.");

    herokuHomePage.visitHomePage();

    // Intercept all image requests
    cy.intercept("**/*.jpg").as("imageRequests");

    herokuHomePage.navigateToExamples(herokuHomePage.elements.brokenImages);

    // Assert that no intercepted image request returned a 404 status
    cy.get("@imageRequests").then((interceptions) => {
      interceptions.forEach((interception) => {
        expect(interception.response.statusCode).not.to.eq(404);
      });
    });
  });

  it.skip("Challenging DOM Test", () => {
    herokuHomePage.visitHomePage();
    herokuHomePage.navigateToExamples(herokuHomePage.elements.challengingDom);    
   
   
  });     
});
