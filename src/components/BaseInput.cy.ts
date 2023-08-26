import BaseInput from "./BaseInput.vue"

describe("<BaseInput />", () => {
  it("renders", () => {
    cy.mount(BaseInput, {
      props: {
        class: "w-[500px]",
      },
    })

    cy.get('[data-cy="base-input-element"]').should(
      "have.class",
      "placeholder-opacity-0 transition duration-200 w-[500px]"
    )
  })

  it("user input", () => {
    cy.mount(BaseInput)
    const textInput = "Im Typing"

    cy.get('[data-cy="base-input-element"]')
      .type(textInput)
      .should("have.value", textInput)
  })
})
