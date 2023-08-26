import type { Meta, StoryObj } from "@storybook/vue3"
import TheRightContentLogin from "./TheRightContentLogin.vue"

const meta: Meta<typeof TheRightContentLogin> = {
  component: TheRightContentLogin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TheRightContentLogin>

export const Default: Story = {
  render: (args) => ({
    components: { TheRightContentLogin },
    setup() {
      return { args }
    },
    template: `<TheRightContentLogin v-bind="args" class="w-[652px] h-[720px]"/>`,
  }),
}
