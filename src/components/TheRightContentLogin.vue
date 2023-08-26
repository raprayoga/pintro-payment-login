<script setup lang="ts">
import LoginForm from "./LoginForm.vue"
</script>

<template>
  <div class="w-full bg-white flex flex-col justify-between pt-20 px-6">
    <div class="max-w-[384px] mx-auto">
      <img src="@/assets/images/logo-b.png" alt="brand logo" />
      <LoginForm class="mt-10" />
    </div>
    <div class="text-xs text-slate-700 text-center mx-auto">
      <p>Hak Cipta © Pintro - 2023. All rights reserved.</p>
      <p>
        Kontak kami | Privacy Policy | TOC | Term of Use | Data Retention Policy
      </p>
    </div>
  </div>
</template>
