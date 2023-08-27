import LoginForm from "./LoginForm.vue"

describe("<LoginForm />", () => {
  it("renders", () => {
    cy.mount<any>(LoginForm, {
      props: {
        class: "w-[384px]",
      },
    })

    cy.get("form").should("have.class", "w-[384px]")
  })

  it("user input", () => {
    const emailInput = "email@gmail.com"
    const passInput = "123456"
    const onSubmit = cy.spy().as("onSubmit")

    cy.mount<any>(LoginForm, {
      props: {
        onSubmit: onSubmit,
      },
    })
    cy.get('[id="email"]').type(emailInput).should("have.value", emailInput)
    cy.get('[id="password"]').type(passInput).should("have.value", passInput)
    cy.get('[type="submit"]').click()
    cy.get("@onSubmit").should("have.been.calledOn")
  })
})
