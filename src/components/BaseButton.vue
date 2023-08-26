<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "vue"

const buttonVariants = cva(
  "flex items-center justify-center text-center lg:text-sm text-xs text-white cursor-pointer disabled:cursor-not-allowed transition-all transition-500",
  {
    variants: {
      variant: {
        primary: "bg-blue-700 hover:bg-blue-800",
        gray: "bg-gray-400 text-black",
        white: "bg-white text-blue-800 hover:text-white hover:bg-blue-800",
      },
      size: {
        lg: "rounded-lg px-5 py-2.5",
        sm: "rounded-md px-2.5 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

type ButtonProps = VariantProps<typeof buttonVariants>

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"]
    size?: ButtonProps["size"]
    props?: ButtonHTMLAttributes
  }>(),
  {
    variant: "primary",
    size: "lg",
  }
)

const emit = defineEmits<{
  (e: "onClick"): void
}>()

const onClick = () => {
  emit("onClick")
}
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant, size }))"
    v-bind="props"
    @click="onClick"
    data-cy="base-button-element"
  >
    <slot></slot>
  </button>
</template>
