import type { Meta, StoryObj } from "@storybook/vue3"
import Slide3 from "./Slide3.vue"

const meta: Meta<typeof Slide3> = {
  component: Slide3,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Slide3>

export const Default: Story = {
  render: (args) => ({
    components: { Slide3 },
    setup() {
      return { args }
    },
    template:
      '<div class="w-screen h-screen mx-auto bg-blue-50 p-20"><Slide3 v-bind="args" /></div>',
  }),
}
