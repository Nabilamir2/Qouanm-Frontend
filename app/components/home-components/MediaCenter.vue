<template>
  <section
    class="bg-primary-gold-05 lg:py-[80px] py-[50px] lg:px-[60px] px-[20px]"
  >
    <div class="container">
      <div class="flex flex-col items-center justify-center pb-[60px]">
        <h2 class="text-center text-primary-1">{{ title }}</h2>
        <p class="text-center text-secondary-text">{{ subtitle }}</p>
      </div>
      <ClientOnly>
        <div class="media-swiper-wrapper min-h-[280px]">
          <swiper-container
            v-if="ready"
            :space-between="16"
            :observer="false"
            :observe-parents="false"
            :slides-per-view="3"
            :breakpoints="{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }"
          >
            <swiper-slide
              v-for="(post, index) in posts"
              :key="index"
              class="w-full"
            >
              <PostCard
                :image="post?.image"
                :title="post?.title"
                :blog="post?.blog"
                :time="post?.time"
                :date="post?.date"
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <template #fallback>
          <div class="media-swiper-wrapper min-h-[280px]" />
        </template>
      </ClientOnly>
      <div class="pt-[60px] flex justify-center">
        <MainButton
          :ButtonText="'View All'"
          :paddingX="'px-[50px] py-[17.5px]'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PostCard from '../ui/cards/PostCard.vue'
import MainButton from '../ui/buttons/MainButton.vue';

const ready = ref(false)

const props = defineProps<{
    title: string
    subtitle: string
    posts: any[]
}>()

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ready.value = true
    })
  })
})
</script>
