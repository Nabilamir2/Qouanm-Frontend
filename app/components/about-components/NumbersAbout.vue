<template>
  <section class="bg-primary-1 py-[80px] flex items-center justify-center">
    <Numbers :number="number" />
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import Numbers from '@/components/main-component/Numbers.vue'

const props = defineProps({
    number: {
        type: Array as PropType<{ number: string, text: string }[]>,
        default: () => []
    }
})
</script>
