import type { Meta, StoryObj } from "@storybook/vue3"
import BaseInput from "./BaseInput.vue"

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BaseInput>

export const Default: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args }
    },
    template: '<BaseInput v-bind="args" />',
  }),
}
