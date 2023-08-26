import BaseCard from "./BaseCard.vue"

describe("<BaseCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    const textCard = "CARD"
    cy.mount(BaseCard, {
      props: {
        variant: "white",
        size: "lg",
      },
      slots: {
        default: textCard,
      },
    })

    cy.get('[data-cy="base-card-element"]')
      .should("have.class", "bg-white text-black rounded-xl p-6")
      .should("have.text", textCard)
  })
})
