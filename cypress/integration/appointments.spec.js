describe("Apointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", async () => {
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

  it("should edit the interview", () => {});

  it("should cancel the interview", () => {});
});
