<template>
      <ClientOnly>
      <div class="gallery-container">
        <swiper-container ref="swiperGallery" :init="false" class="h-full">
          <swiper-slide v-for="(item, index) in galleryList" :key="index">
            <div class="gallery-card"  :style="{ animationDelay: `${index * 0.3}s` }">
                <NuxtImg
                  :src="item"
                  :alt="`service-gallery-${index}`"
                  class="w-full h-full object-cover rounded-[20px]"
                  loading="lazy"
                />
              </div>
          </swiper-slide>
        </swiper-container>
      </div>
      <div class="flex items-center justify-center gap-4 mt-8">
        <button class="gallery-nav-btn" @click="slidePrev">
          <Icon name="uil:arrow-left" size="18px" />
        </button>
        <button class="gallery-nav-btn" @click="slideNext">
          <Icon name="uil:arrow-right" size="18px" />
        </button>
      </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, watch, nextTick } from 'vue'

defineOptions({
  name: 'SwiperGallery',
})

const props = defineProps({
  galleryList: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const swiperGallery = ref<any>(null)

function slidePrev() {
  swiperGallery.value?.swiper?.slidePrev()
}

function slideNext() {
  swiperGallery.value?.swiper?.slideNext()
}

function initSwiper(el: any) {
  if (!el) return
  Object.assign(el, {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    loopAdditionalSlides: 1,
    speed: 400,
    breakpoints: {
      // 0: {
      //   slidesPerView: 1,
      // },
      768: {
        slidesPerView: 3, // tablet
      },
      1024: {
        slidesPerView: 5, // desktop
      },
    },
  })
  el.initialize()
}

watch(swiperGallery, (el) => {
  if (el) nextTick(() => initSwiper(el))
})
</script>

<style scoped>
.gallery-container {
  height: 70vh;
}

.gallery-container swiper-slide {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
}

.gallery-container .gallery-card {
    width: 100%;
    height: 60%;
    border-radius: 20px;
    overflow: hidden;
     background: linear-gradient(
        90deg,
    #957C4F 0%,
    #DBB571 40%,
    #f5e2b8 50%,
    #DBB571 60%,
    #957C4F 100%
    );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
    transition: height 0.4s ease;
  }

/* 1 away from center — blue, medium height */
.gallery-container swiper-slide.swiper-slide-prev .gallery-card,
.gallery-container swiper-slide.swiper-slide-next .gallery-card {
  height: 80%;
}

/* Active center slide — green, tallest */
.gallery-container swiper-slide.swiper-slide-active .gallery-card {
  height: 100%;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.gallery-nav-btn {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: var(--color-primary-gold, #C4A265);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: opacity 0.3s ease;
  }
  
  .gallery-nav-btn:hover {
    opacity: 0.8;
  }
</style>
