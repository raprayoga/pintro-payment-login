import BaseButton from "./BaseButton.vue"

describe("<BaseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton, {
      props: {
        label: "BUTTON NIH BOSS",
        variant: "white",
        class: "w-[300px]",
      },
    })
  })
})
