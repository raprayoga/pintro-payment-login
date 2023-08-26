import BaseButton from "./BaseButton.vue"

describe("<BaseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton, {
      props: {
        variant: "primary",
        size: "lg",
      },
      slots: {
        default: `Submit`,
      },
    })

    cy.get('[data-cy="base-button-element"]')
      .should("have.class", "bg-blue-700 rounded-lg px-5 py-2.5")
      .should("have.text", "Submit")
  })
})
