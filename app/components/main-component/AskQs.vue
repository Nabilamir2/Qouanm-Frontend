<template>
  <div
    class="flex flex-col w-full md:gap-10 gap-[24px] md:py-20 rounded-[20px]"
  >
    <div
      v-for="(faq, index) in faqsQuestion"
      :key="index"
      class="px-8 py-[24px] rounded-[20px] bg-white"
    >
      <button
        @click="toggleFAQ(index)"
        class="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
      >
        <div class="text-primary-1 md:text-[1rem] text-[14px] font-semibold">
          <span>
            {{ faq.question }}
          </span>
        </div>
        <div>
          <span
            class="bg-black px-2 py-1 rounded-full "
            v-if="activeIndex === index"
          >
            <Icon name="uil:plus" style="color: white" size="12px" />
          </span>
          <span class="bg-black px-2 py-1 rounded-full " v-else>
            <Icon name="uil:minus" style="color: white" size="12px" />
          </span>
        </div>
      </button>

      <!-- ✅ Transition for answer -->
      <transition name="faq-toggle">
        <p
          v-if="activeIndex === index"
          class="mt-2 md:text-[1rem] text-[12px] font-medium text-secondary-text overflow-hidden"
        >
          {{ faq.answer }}
        </p>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'

type Faq = {
  id?: number
  question: string
  answer: string
}

export default {

  props: {
    faqsQuestion: {
      type: Array as PropType<Faq[]>,
      default: () => [],
    },
  },

  data() {
    return {
      activeIndex: 0,
    }
  },

  methods: {
    toggleFAQ(index: number) {
      this.activeIndex = this.activeIndex === index ? -1 : index
    },
  },
}
</script>

<style scoped>
/* ✅ Transition Animation */
.faq-toggle-enter-active,
.faq-toggle-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
}
.faq-toggle-enter-from,
.faq-toggle-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-5px);
}
.faq-toggle-enter-to,
.faq-toggle-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
