import type { Meta, StoryObj } from "@storybook/vue3"
import Slide2 from "./Slide2.vue"

const meta: Meta<typeof Slide2> = {
  component: Slide2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Slide2>

export const Default: Story = {
  render: (args) => ({
    components: { Slide2 },
    setup() {
      return { args }
    },
    template:
      '<div class="w-screen h-screen mx-auto bg-blue-50 p-20"><Slide2 v-bind="args" /></div>',
  }),
}
