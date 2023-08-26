<script setup lang="ts">
import { reactive } from "vue"
import BaseInput from "./BaseInput.vue"
import BaseButton from "./BaseButton.vue"

const form = reactive({
  email: "",
  password: "",
})

const emit = defineEmits<{
  (e: "onSubmit"): void
}>()

const submitHandler = () => {
  emit("onSubmit")
}
</script>

<template>
  <form @submit.prevent="submitHandler">
    <h2 class="text-2xl font-semibold">One Payment Dashboard</h2>
    <p class="text-xs mt-2">
      Tempat terbaik untuk melihat dan mengukur kuantitias transaksi lembaga
      anda.
    </p>

    <div class="mt-10">
      <label for="email" class="text-sm">Email</label>
      <BaseInput type="email" id="email" :value="form.email" required />
    </div>

    <div class="mt-10">
      <label for="password" class="text-sm">Password</label>
      <BaseInput
        type="password"
        id="password"
        :value="form.password"
        required
      />
    </div>

    <router-link to="/" class="text-xs text-blue-700"
      >Lupa password?</router-link
    >

    <BaseButton type="submit" class="mt-10 w-full">Masuk</BaseButton>
  </form>
</template>
