<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(" text-white rounded-lg", {
  variants: {
    variant: {
      white: "bg-white text-black",
    },
    size: {
      lg: "rounded-xl p-6",
      sm: "rounded-lg px-6 py-0",
    },
  },
  defaultVariants: {
    variant: "white",
    size: "lg",
  },
})

type ButtonProps = VariantProps<typeof cardVariants>

withDefaults(
  defineProps<{
    size?: ButtonProps["size"]
    variant?: ButtonProps["variant"]
  }>(),
  {
    variant: "white",
    size: "lg",
    className: "",
  }
)
</script>

<template>
  <div :class="cn(cardVariants({ variant, size }))" data-cy="base-card-element">
    <slot></slot>
  </div>
</template>
