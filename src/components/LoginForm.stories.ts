import type { Meta, StoryObj } from "@storybook/vue3"
import LoginForm from "./LoginForm.vue"

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {
  render: (args) => ({
    components: { LoginForm },
    setup() {
      return { args }
    },
    template: `<LoginForm v-bind="args" class="w-[384px]" @onSubmit="console.log('SUBMIT BROO')" />`,
  }),
}
