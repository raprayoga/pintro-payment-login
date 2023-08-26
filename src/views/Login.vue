<template>
  <div class="min-h-screen w-full flex items-center">
    <div class="w-1/2 bg-blue-50 h-screen flex flex-col justify-center">
      <Slider />
    </div>
    <TheRightContentLogin class="w-1/2" />
  </div>
</template>

<script lang="ts" setup>
import Slider from "@/components/SliderContents/Slider.vue"
import TheRightContentLogin from "@/components/TheRightContentLogin.vue"
</script>
