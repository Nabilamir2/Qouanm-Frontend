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
      <OverviewServices 
      :overviewTitle="singleServiceData?.overview_section?.title" 
      :overviewDescription="singleServiceData?.overview_section?.description"
       />
      <IncludedServices 
      :title="singleServiceData?.includedServices?.title" 
      :subtitle="singleServiceData?.includedServices?.subtitle" 
      :points="singleServiceData?.includedServices?.points" 
      :small_image="singleServiceData?.includedServices?.small_image" 
      :big_image="singleServiceData?.includedServices?.big_image" 
      />
      <OurProcessServices
        :title="singleServiceData?.ourProcess?.title"
        :subtitle="singleServiceData?.ourProcess?.subtitle"
        :image="'/images/logo.png'"
        :steps="singleServiceData?.ourProcess?.processes"
      />
      <div class="relative">
        <RotatingGuaranteeCircle />
      </div>
      <QualityServices
        :title="singleServiceData?.quality_section?.title"
        :subtitle="singleServiceData?.quality_section?.subtitle"
        :qualities="singleServiceData?.quality_section?.qualities"
      />
      <ProjectsServices
        :title="singleServiceData?.projects_section?.title"
        :subtitle="singleServiceData?.projects_section?.subtitle"
        :projects="singleServiceData?.projects_section?.projects"
      />
      <QuotationServices/>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import IntroServices from './IntroServices.vue'
  import GalleryServices from './single-sevices-components/GalleryServices.vue'
  import OverviewServices from './single-sevices-components/OverviewServices.vue'
  import IncludedServices from './single-sevices-components/IncludedServices.vue'
  import OurProcessServices from './single-sevices-components/OurProcessServices.vue'
  import QualityServices from './single-sevices-components/QualityServices.vue'
  import RotatingGuaranteeCircle from './single-sevices-components/RotatingGuaranteeCircle.vue'
  import ProjectsServices from './single-sevices-components/ProjectsServices.vue'
  import QuotationServices from './single-sevices-components/QuotationServices.vue'

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
  