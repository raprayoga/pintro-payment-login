<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue"
import MovingBall from "./MovingBall.vue"
</script>

<template>
  <div class="relative flex flex-col items-center">
    <div class="animate-float w-fit relative">
      <BaseCard
        class="w-[134px] flex flex-col justify-between rotate-[4deg] z-10 relative left-20 top-5"
      >
        <img src="@/assets/images/histogram.png" alt="histogram" />
      </BaseCard>
    </div>

    <BaseCard
      class="w-[208px] flex flex-col justify-between rotate-[-3deg] relative right-40 bottom-10 z-20"
    >
      <p class="text-sm font-semibold">Channel favorite</p>
      <img src="@/assets/images/rank.png" alt="histogram" />
    </BaseCard>

    <BaseCard
      class="w-[386px] flex flex-col justify-between animate-float relative bottom-14 z-[60]"
    >
      <p class="text-sm font-semibold">Penggunaan channel bayar</p>
      <img src="@/assets/images/konten.png" alt="histogram" />
    </BaseCard>
  </div>

  <MovingBall />
</template>
