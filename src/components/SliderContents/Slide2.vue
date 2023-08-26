<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue"
import BaseBadge from "@/components/BaseBadge.vue"
import BaseButton from "@/components/BaseButton.vue"
import MovingBall from "./MovingBall.vue"

import { ref } from "vue"

const buttonHover = ref(false)
</script>

<template>
  <div class="relative flex flex-col items-center">
    <div class="animate-float w-fit relative right-28 top-16">
      <BaseCard class="w-[286px] flex flex-col justify-between rotate-[-3deg]">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-xs font-medium">Belum dilimpahkan</p>
            <p class="text-2xl font-semibold">Rp1.205.000</p>
          </div>
          <img src="@/assets/images/schedule-icon.png" alt="schedule icon" />
        </div>
        <p class="text-xs mt-4 text-slate-700 font-semibold">2 transaksi</p>
      </BaseCard>
    </div>

    <div class="animate-float">
      <BaseButton
        variant="white"
        size="sm"
        class="z-50 rotate-45 absolute left-16 bottom-1 py-2.5"
        @mouseenter="buttonHover = true"
        @mouseleave="buttonHover = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 12.646C9.90267 12.646 9.80533 12.625 9.708 12.583C9.61067 12.5417 9.52067 12.4723 9.438 12.375L6.792 9.75C6.65267 9.61134 6.583 9.45167 6.583 9.271C6.583 9.09034 6.65267 8.93067 6.792 8.792C6.94467 8.63867 7.10433 8.562 7.271 8.562C7.43767 8.562 7.59733 8.63867 7.75 8.792L9.333 10.375V4.271C9.333 4.09034 9.399 3.934 9.531 3.802C9.663 3.67 9.81933 3.604 10 3.604C10.1807 3.604 10.337 3.67 10.469 3.802C10.601 3.934 10.667 4.09034 10.667 4.271V10.375L12.25 8.792C12.3887 8.65267 12.545 8.57967 12.719 8.573C12.8923 8.56567 13.0553 8.63867 13.208 8.792C13.3473 8.93067 13.417 9.08667 13.417 9.26C13.417 9.434 13.3473 9.59734 13.208 9.75L10.562 12.375C10.4793 12.4723 10.3893 12.5417 10.292 12.583C10.1947 12.625 10.0973 12.646 10 12.646ZM5.333 16.25C4.889 16.25 4.514 16.0973 4.208 15.792C3.90267 15.486 3.75 15.111 3.75 14.667V13.167C3.75 12.9863 3.816 12.83 3.948 12.698C4.08 12.566 4.23633 12.5 4.417 12.5C4.59767 12.5 4.75367 12.566 4.885 12.698C5.017 12.83 5.083 12.9863 5.083 13.167V14.667C5.083 14.7223 5.111 14.7777 5.167 14.833C5.22233 14.889 5.27767 14.917 5.333 14.917H14.667C14.7223 14.917 14.7777 14.889 14.833 14.833C14.889 14.7777 14.917 14.7223 14.917 14.667V13.167C14.917 12.9863 14.983 12.83 15.115 12.698C15.2463 12.566 15.4023 12.5 15.583 12.5C15.7637 12.5 15.92 12.566 16.052 12.698C16.184 12.83 16.25 12.9863 16.25 13.167V14.667C16.25 15.111 16.0973 15.486 15.792 15.792C15.486 16.0973 15.111 16.25 14.667 16.25H5.333Z"
            :fill="buttonHover ? 'white' : '#1D4ED8'"
          />
        </svg>
      </BaseButton>
    </div>

    <BaseBadge
      class="w-fit text-xs font-medium animate-float relative right-32 top-40 z-[61]"
      variant="yellow"
    >
      Belum dilimpahkan
    </BaseBadge>

    <BaseCard
      class="w-[286px] flex flex-col justify-between animate-float relative left-16 top-16 z-[60]"
    >
      <div class="flex justify-between items-center">
        <div>
          <p class="text-xs font-medium">Pelimpahan terakhir</p>
          <p class="text-2xl font-semibold">Rp1.205.000</p>
        </div>
        <img src="@/assets/images/progress.png" alt="progess icon" />
      </div>
      <p class="text-xs mt-4 text-slate-700 font-semibold">3 Oktober 2022</p>
    </BaseCard>

    <BaseBadge
      class="w-fit text-xs font-medium animate-float relative right-10 top-20"
      variant="green"
    >
      Sudah dilimpahkan
    </BaseBadge>
  </div>

  <MovingBall />
</template>
