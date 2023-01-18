const { CYCLIC_KEY } = require("@storybook/addon-actions/dist/constants");

describe("Apointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click()
      .get("[data-testid=student-name-input]")
      .type("Aingaran Thirunadarajah")
      .get("[alt='Sylvia Palmer']")
      .click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Aingaran Thirunadarajah");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should edit the interview", () => {
    cy.get("[alt='Edit']").first().click({ force: true })
      .get("[data-testid=student-name-input]")
      .clear()
      .type("Aingaran Thirunadarajah")
      .get("[alt='Sylvia Palmer']")
      .click()
    cy.contains("Save").click()
    cy.contains(".appointment__card--show", "Aingaran Thirunadarajah")
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });

  it("should cancel an interview", () => {
    cy.get("[alt='Delete']").first().click({ force: true });
    cy.contains(/Confirm/i).click();
    cy.contains(/Deleting/i).should("not.exist");
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
