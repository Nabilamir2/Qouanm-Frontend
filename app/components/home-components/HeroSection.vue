<template>
  <section class="relative h-screen overflow-hidden">
    <NuxtImg
      v-if="image"
      :src="image"
      alt="Hero Background"
      width="1920"
      height="1080"
      quality="80"
      format="webp"
      priority
      fetchpriority="high"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div
      class="relative flex flex-col lg:flex-row  items-end justify-end lg:justify-between h-full px-[60px] py-[100px]"
    >
      <IntroLeftSection
        class="z-20"
        :title="title"
        :subtitle="subtitle"
        :description="description"
        :hasButton="true"
      />
      <div
        class="z-20 px-[24px] py-[16px] mb-[11px] flex flex-col items-start justify-between gap-[24px] glass-box min-h-[160px]"
      >
        <p
          class="text-white text-[1rem] font-600"
          v-for="(items, index) in listOfFeatures"
          :key="index"
        >
          {{ items }}
        </p>
      </div>
    </div>
    <div
      class="absolute bottom-0 right-0 h-[97px] transform translate-x-[-22%] z-30 "
    >
      <div class="relative w-auto">
        <img
          src="../../assets/icons/rectangle-hero-home.svg"
          alt="hero-img"
          class="h-full w-auto block"
        />

        <!-- circle -->
        <img
          src="../../assets/icons/circle-arrow-down.png"
          alt="icon"
          width="24"
          height="54"
          class="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 h-[54px] w-[32px]"
        />

        <!-- arrow -->
        <img
          src="../../assets/icons/arrow-down.png"
          alt="icon"
          width="18"
          height="18"
          class="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 animate-arrow-down"
        />
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
  </section>
</template>

<script lang="ts">
import IntroLeftSection from '@/components/main-component/IntroLeftSection.vue'
export default {
    name: 'HeroSection',
    components: {
        IntroLeftSection
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        listOfFeatures: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
.animate-arrow-down {
  animation: arrow-bounce-slow 4s ease-in-out infinite;
}
@keyframes arrow-bounce-slow {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(0%, 100%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}
</style>
