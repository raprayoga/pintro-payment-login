import type { Meta, StoryObj } from "@storybook/vue3"
import Slide1 from "./Slide1.vue"

const meta: Meta<typeof Slide1> = {
  component: Slide1,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Slide1>

export const Default: Story = {
  render: (args) => ({
    components: { Slide1 },
    setup() {
      return { args }
    },
    template:
      '<div class="w-screen h-screen mx-auto bg-blue-50 p-20"><Slide1 v-bind="args" /></div>',
  }),
}
