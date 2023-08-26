import BaseBadge from "./BaseBadge.vue"

describe("<BaseBadge />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    const textBadge = "BADGE"
    cy.mount(BaseBadge, {
      props: {
        variant: "green",
        isRounded: true,
      },
      slots: {
        default: textBadge,
      },
    })

    cy.get('[data-cy="base-badge-element"]')
      .should("have.class", "bg-green-100 rounded-full")
      .should("have.text", textBadge)
  })
})
