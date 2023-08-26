<script setup lang="ts"></script>

<template>
  <img
    src="@/assets/images/ball.png"
    alt="ball 1"
    class="ball ball-1 w-10 z-10"
  />
  <img
    src="@/assets/images/ball.png"
    alt="ball 2"
    class="ball ball-2 w-16 z-30"
  />
  <img
    src="@/assets/images/ball.png"
    alt="ball 3"
    class="ball ball-3 w-[120px] z-50"
  />
</template>

<style>
.ball {
  @apply absolute left-1/2 top-1/2;
  transform: translate(-50%, -50%);
}

.ball-1 {
  animation:
    ball1 500ms 1s forwards,
    bounce1 5s infinite 1300ms;
}

.ball-2 {
  animation:
    ball2 500ms 1s forwards,
    bounce2 5s infinite 1300ms;
}

.ball-3 {
  animation:
    ball3 500ms 1s forwards,
    bounce3 5s infinite 1300ms;
}

@keyframes ball1 {
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(120px, -120px);
  }
}

@keyframes ball2 {
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(-220px, -50%);
  }
}

@keyframes ball3 {
  from {
    transform: translate(-50%, -50%);
  }

  to {
    transform: translate(80px, 120px);
  }
}

@keyframes bounce1 {
  0% {
    transform: translate(120px, -120px) translateY(0);
    animation-timing-function: linear;
  }
  50% {
    transform: translate(120px, -120px) translateY(-15px);
    animation-timing-function: linear;
  }
  100% {
    transform: translate(120px, -120px) translateY(0);
    animation-timing-function: linear;
  }
}

@keyframes bounce2 {
  0% {
    transform: translate(-220px, -50%) translateY(0);
    animation-timing-function: linear;
  }
  50% {
    transform: translate(-220px, -50%) translateY(-15px);
    animation-timing-function: linear;
  }
  100% {
    transform: translate(-220px, -50%) translateY(0);
    animation-timing-function: linear;
  }
}

@keyframes bounce3 {
  0% {
    transform: translate(80px, 120px) translateY(0);
    animation-timing-function: linear;
  }
  50% {
    transform: translate(80px, 120px) translateY(-15px);
    animation-timing-function: linear;
  }
  100% {
    transform: translate(80px, 120px) translateY(0);
    animation-timing-function: linear;
  }
}
</style>
