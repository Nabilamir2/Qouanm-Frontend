<template>
    <div>
      <IntroServices
        :label="generalData?.services?.label"
        :title="generalData?.services?.title"
        :subtitle="generalData?.services?.subtitle"
      />
    </div>
  </template>
  
  <script setup>
    import { computed, onMounted } from 'vue'
    import IntroServices from './IntroServices.vue'
  
    const { useGeneralStore } = await import('@/stores/general')
  
    // const store = useGeneralStore()
    // onMounted(() => {
    //   store.fetchAboutData()
    // })
  
    // const generalData = computed(() => store.about)
  
  
  // Use standalone loader only — no Pinia/store in this path (fixes "Cannot access 'ut' before initialization")
  const { data: servicesPayload } = await useAsyncData('services', () =>
    import('~/data/services').then((m) => m.loadServicesData())
  )
  
  // After mount, sync payload into Pinia (dynamic import so store not in initial page bundle)
  onMounted(async () => {
    const payload = servicesPayload.value
    if (!payload?.services) return
    const store = useGeneralStore()
    store.services = payload.services
  })
  
 const generalData = computed(() => servicesPayload.value?.services ?? null)
  </script>
  