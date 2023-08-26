import type { Meta, StoryObj } from "@storybook/vue3"
import Slider from "./Slider.vue"

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template:
      '<div class="w-screen h-screen mx-auto bg-blue-50 p-20"><Slider v-bind="args" /></div>',
  }),
}
