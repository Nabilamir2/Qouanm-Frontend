<template>
    <div>
      <IntroServices
        :title="singleServiceData?.title"
        :subtitle="singleServiceData?.subtitle"
        :MaxWidth="'60%'"
        :breadcrumbArray="[
          { name: 'Home', to: '/' },
          { name: 'Services', to: '/services' }, 
          { name: singleServiceData?.title, to: '' }]"
      />
      <GalleryServices :gallery="singleServiceData?.gallery" />
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import IntroServices from './IntroServices.vue'
  import GalleryServices from './GalleryServices.vue'
  // dynamic import للـ store عشان نتجنب TDZ
  const { useGeneralStore } = await import('@/stores/general')
  
  /*
    نجيب الداتا مباشرة من ملف singleService
    من غير استخدام Pinia هنا
  */
  const { data: singleServicePayload } = await useAsyncData(
    'singleServicePayload',
    () => import('~/data/singleService').then((m) => m.loadSingleServiceData())
  )
  
  /*
    بعد ما الصفحة تـ mount
    ننقل الداتا إلى Pinia
  */
  onMounted(() => {
    if (!singleServicePayload.value?.singleService) return
  
    const store = useGeneralStore()
    store.singleService = singleServicePayload.value.singleService
  })
  
  /*
    ده المتغير اللي تستخدمه في التمبلت
  */
  const singleServiceData = computed(() => {
    return singleServicePayload.value?.singleService ?? null
  })
  </script>
  