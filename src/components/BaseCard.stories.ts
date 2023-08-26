import type { Meta, StoryObj } from "@storybook/vue3"
import BaseCard from "./BaseCard.vue"

const meta: Meta<typeof BaseCard> = {
  component: BaseCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BaseCard>

export const Default: Story = {
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args }
    },
    template:
      '<div class="bg-blue-50 h-screen w-screen pt-20"><BaseCard v-bind="args" class="w-[100px] mx-auto text-center">Card</BaseCard></div>',
  }),
}
