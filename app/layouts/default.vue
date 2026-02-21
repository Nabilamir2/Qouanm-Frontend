<template>
  <HeaderIndex />

  <main class="min-h-screen">
    <slot />
    <Consultation v-if="showConsultation" />
  </main>
  
  <FooterIndex />
</template>

<script setup>
import HeaderIndex from '@/components/header/index.vue'
import FooterIndex from '@/components/footer/index.vue'
import Consultation from '@/components/consultation/index.vue'

const route = useRoute()

const showConsultation = computed(() => route.meta.showConsultation !== false)
</script>
