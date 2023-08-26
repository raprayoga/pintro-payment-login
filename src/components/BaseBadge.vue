<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariant = cva(
  "flex items-center justify-center text-center text-green-700 rounded-full px-1.5 py-1",
  {
    variants: {
      variant: {
        blue: "bg-blue-50",
        green: "bg-green-100",
      },
      isRounded: {
        true: "rounded-full",
        false: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "blue",
      isRounded: false,
    },
  }
)

type BadgeProps = VariantProps<typeof badgeVariant>

withDefaults(
  defineProps<{
    variant?: BadgeProps["variant"]
    isRounded?: BadgeProps["isRounded"]
  }>(),
  {
    variant: "blue",
    isRounded: false,
  }
)

const emit = defineEmits<{
  (e: "onCLick"): void
}>()

const onCLick = () => {
  emit("onCLick")
}
</script>

<template>
  <div
    :class="cn(badgeVariant({ variant, isRounded }))"
    @click="onCLick"
    data-cy="base-badge-element"
  >
    <slot></slot>
  </div>
</template>
