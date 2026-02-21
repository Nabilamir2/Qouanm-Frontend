<template>
  <section
    class="bg-primary-gold-20 
             lg:px-[60px] 
             py-[142px] 
             "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Header -->
    <div class="flex flex-col items-center justify-center pb-[60px]">
      <h2
        class="text-center text-[60px] font-bold text-[#1E1D1D]
                   max-[900px]:text-[40px]"
      >
        {{ title }}
      </h2>

      <p
        class="text-center font-normal text-[18px] text-secondary-text
                  max-[900px]:text-[16px]"
      >
        {{ subtitle }}
      </p>
    </div>

    <div
      class="relative lg:h-[420px] h-[360px] 
               flex items-center justify-center
               "
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- LEFT CARDS -->
      <div
        v-for="(review, index) in firstReviews"
        :key="review.id"
        class="card transition-all duration-700 ease-in-out"
        :class="getLeftCardClass(index)"
      >
        <ReviewsCard
          :comment="review.comment"
          :name="review.name"
          :jobDescription="review.JobDescription"
          :image="review.image"
          :textColor="index === 0 ? 'text-black' : 'text-white'"
        />
      </div>

      <!-- CENTER IMAGE -->
      <div
        class="center-card transition-all duration-700 ease-in-out"
        :class="isHovered ? 'center-grid' : 'center-stack'"
      >
        <NuxtImg :src="image" alt="clients" width="400" height="400" format="webp" quality="80" class="w-full h-full object-cover" />
      </div>

      <!-- RIGHT CARDS -->
      <div
        v-for="(review, index) in lastReviews"
        :key="review.id"
        class="card transition-all duration-700 ease-in-out"
        :class="getRightCardClass(index)"
      >
        <ReviewsCard
          :comment="review?.comment"
          :name="review?.name"
          :jobDescription="review?.JobDescription"
          :image="review?.image"
          :textColor="index === 0 ? 'text-black' : 'text-white'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ReviewsCard from '../ui/cards/ReviewsCard.vue'

const props = withDefaults(defineProps<{
  title: string
  subtitle: string
  image: string
  reviews?: any[]
}>(), {
  reviews: () => []
})

const isHovered = ref(false)

const firstReviews = computed(() => props.reviews.slice(0, 2))
const lastReviews = computed(() => props.reviews.slice(2, 4))

const getLeftCardClass = (index: number) => {
  if (!isHovered.value) {
    return index === 0
      ? 'absolute left-[25%] top-[10%] -rotate-12 z-10 bg-primary-gold-40'
      : 'absolute left-[30%] top-[5%] -rotate-6 z-20  bg-primary-1 '
  }

  return index === 0
    ? 'absolute left-[0%] top-0 rotate-0 bg-primary-gold-40'
    : 'absolute left-[20%] top-0 rotate-0 bg-primary-1 '
}

const getRightCardClass = (index: number) => {
  if (!isHovered.value) {
    return index === 0
      ? 'absolute right-[25%] top-[10%] rotate-12 z-10 bg-primary-gold-40'
      : 'absolute right-[30%] top-[5%] rotate-6 z-20  bg-primary-1 '
  }

  return index === 0
    ? 'absolute right-[0%] top-0 rotate-0 bg-primary-gold-40'
    : 'absolute right-[20%] top-0 rotate bg-primary-1 '
}
</script>

<style scoped>
.card {
  width: calc(100%/5);
  height: 100%;
  border-radius: 20px;
  padding: 1.5%;
}

.center-card {
  position: absolute;
  width: calc(100%/5);
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 50;
}

.center-stack {
  transform: scale(1);
}

.center-grid {
  transform: scale(1);
}
</style>
