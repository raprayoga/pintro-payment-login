import type { Meta, StoryObj } from "@storybook/vue3"
import MovingBall from "./MovingBall.vue"

const meta: Meta<typeof MovingBall> = {
  component: MovingBall,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof MovingBall>

export const Default: Story = {
  render: (args) => ({
    components: { MovingBall },
    setup() {
      return { args }
    },
    template:
      '<div class="w-screen h-screen mx-auto p-20"><MovingBall v-bind="args" /></div>',
  }),
}
