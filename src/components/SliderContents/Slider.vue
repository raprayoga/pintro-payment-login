<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"

import Slide1 from "./Slide1.vue"
import Slide2 from "./Slide2.vue"
import Slide3 from "./Slide3.vue"
import { onMounted, ref } from "vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    Slide2,
    Slide1,
    Slide3,
  },
  setup() {
    const isShowText1 = ref(false)
    const isShowText2 = ref(false)
    const isShowText3 = ref(false)

    onMounted(() => {
      setTime1()
      setTimeout(() => {
        setTime2()
      }, 5500)
      setTimeout(() => {
        setTime3()
      }, 11000)
    })

    const setTime1 = () => {
      isShowText1.value = true

      setTimeout(() => {
        isShowText1.value = false
      }, 5000)

      setInterval(() => {
        setTime1()
      }, 16000)
    }

    const setTime2 = () => {
      isShowText2.value = true

      setTimeout(() => {
        isShowText2.value = false
      }, 5000)

      setInterval(() => {
        setTime2()
      }, 16000)
    }

    const setTime3 = () => {
      isShowText3.value = true

      setTimeout(() => {
        isShowText3.value = false
      }, 4700)

      setInterval(() => {
        setTime3()
      }, 16000)
    }

    return {
      isShowText1,
      isShowText2,
      isShowText3,
      modules: [EffectFade, Autoplay],
    }
  },
}
</script>

<template>
  <div>
    <swiper
      :slides-per-view="1"
      :scrollbar="{ draggable: false }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :allowTouchMove="false"
      :modules="modules"
    >
      <swiper-slide><Slide1 class="h-[450px] justify-center" /></swiper-slide>
      <swiper-slide> <Slide2 class="h-[450px] justify-center" /> </swiper-slide>
      <swiper-slide><Slide3 class="h-[450px] justify-center" /></swiper-slide>
    </swiper>

    <div class="mx-auto max-w-[384px] h-[100px] overflow-y-hidden text-center">
      <Transition name="fade">
        <div v-if="isShowText1">
          <p class="text-xl">Tingkatkan penerimaan dengan transaksi online</p>
          <p class="text-xs mt-3s">
            Cek dan update transaksi harian maupun bulanan mudah dalam genggaman
          </p>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-if="isShowText2">
          <p class="text-xl">Rekonsiliasi keuangan yang lebih mudah</p>
          <p class="text-xs mt-3s">
            Setiap transaksi akan tercatat secara otomatis dalam sistem
            pembayaran dengan cepat & transparan
          </p>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-if="isShowText3">
          <p class="text-xl">Mendukung 25+ channel pembayaran</p>
          <p class="text-xs mt-3s">
            Tersedia lebih dari 25 channel pembayaran yang dapat meningkatkan
            kepuasaan saat bertransaksi
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
