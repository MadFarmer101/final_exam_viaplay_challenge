describe("TV series listed", () => {
  before(() => {
    cy.server()
    cy.visit("/")
  })

  it("are successfully displayed for the user", () => {
    cy.get(".display-show").within(() => {
      cy.get(".series-image").should("exist")
    })
  })
})