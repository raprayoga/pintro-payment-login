<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue"
import BaseBadge from "@/components/BaseBadge.vue"
import MovingBall from "./MovingBall.vue"
</script>

<template>
  <div class="relative flex flex-col gap-4 items-center">
    <div class="animate-float w-fit relative right-20">
      <BaseCard class="w-[286px] flex flex-col justify-between rotate-[-3deg]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-xs font-medium">Transaksi hari ini</p>
            <p class="text-2xl font-semibold">Rp1.205.000</p>
          </div>
          <img src="@/assets/images/tape.png" alt="tape icon" />
        </div>
        <div class="flex items-center gap-2.5 mt-4">
          <BaseBadge class="w-fit" :is-rounded="true">
            <img src="@/assets/images/arrow-slant.png" alt="arrow" />
            <p class="font-medium text-xs">12%</p>
          </BaseBadge>
          <p class="text-xs">vs kemarin</p>
        </div>
      </BaseCard>
    </div>

    <BaseCard
      class="w-[286px] flex flex-col justify-between animate-float relative left-20 z-[60]"
    >
      <div class="flex justify-between items-center">
        <div>
          <p class="text-xs font-medium">Transaksi hari ini</p>
          <p class="text-2xl font-semibold">186</p>
        </div>
        <img src="@/assets/images/progress.png" alt="progess icon" />
      </div>
      <div class="flex items-center gap-2.5 mt-4">
        <BaseBadge class="w-fit" :is-rounded="true">
          <img src="@/assets/images/arrow-slant.png" alt="arrow" />
          <p class="font-medium text-xs">12%</p>
        </BaseBadge>
        <p class="text-xs">vs kemarin</p>
      </div>
    </BaseCard>

    <div class="animate-float w-fit relative right-20">
      <BaseCard
        class="w-[277px] flex justify-between items-end rotate-[4deg]"
        size="sm"
      >
        <div>
          <p class="text-blue-700 text-[9px] font-semibold">
            INVSMAXII2022_130197
          </p>
          <p class="text-[7px]">Hari ini, 16:38</p>
        </div>
        <BaseBadge class="w-fit text-[7px] font-medium" variant="green">
          Berhasil
        </BaseBadge>
        <p class="text-[8px] font-medium">Rp670.000</p>
      </BaseCard>
    </div>

    <MovingBall />
  </div>
</template>
