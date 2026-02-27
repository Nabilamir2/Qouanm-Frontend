<template>
      <HeroSection
        :title="generalData?.hero_section?.title"
        :subtitle="generalData?.hero_section?.subtitle"
        :description="generalData?.hero_section?.description"
        :image="generalData?.hero_section?.image"
        :listOfFeatures="generalData?.hero_section?.listOfFeatures"
      />   
      <Solutions
        :title="generalData?.about_section?.title"
        :subtitle="generalData?.about_section?.subtitle"
        :image="generalData?.about_section?.image"
      />
      <Ontime
        :title="generalData?.solutions_section?.title"
        :subtitle="generalData?.solutions_section?.subtitle"
        :listOfFeatures="generalData?.solutions_section?.solutions"
      />
      <Services
        :title="generalData?.services_section?.title"
        :subtitle="generalData?.services_section?.subtitle"
        :services="generalData?.services_section?.services"
      />
      <SupportClients :ourClients="generalData?.partners?.logos" />
      <MeetCEO
        :image="generalData?.ceo_section?.image"
        :title="generalData?.ceo_section?.title"
        :description="generalData?.ceo_section?.description"
        :signature="generalData?.ceo_section?.signature"
        :logo="'/images/logo.png'"
      />  
      <Fatured
        :title="generalData?.projects_section?.title"
        :subtitle="generalData?.projects_section?.subtitle"
        :projects="generalData?.projects_section?.projects"
      />
      <OurProcessHome
        :title="generalData?.our_process_section?.title"
        :subtitle="generalData?.our_process_section?.subtitle"
        :image="'/images/logo.png'"
        :steps="generalData?.our_process_section?.steps"
      />
      <ClientsReviews
        :title="generalData?.reviews_section?.title"
        :subtitle="generalData?.reviews_section?.subtitle"
        :image="generalData?.reviews_section?.image"
        :reviews="generalData?.reviews_section?.reviews"
      />
      <MediaCenter
        :title="generalData?.media_section?.title"
        :subtitle="generalData?.media_section?.subtitle"
        :posts="generalData?.media_section?.featured_media"
      />
      <FaqsSection
        :title="faqsData?.title"
        :subtitle="faqsData?.subtitle"
        :faqs="faqsData?.faqs"
      />
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import HeroSection from './HeroSection.vue'
  import Solutions from './Solutions.vue'
  import Ontime from './Ontime.vue'
  import Services from './Services.vue'
  import SupportClients from './SupportClients.vue'
  import MeetCEO from './MeetCEO.vue'
  import Fatured from './Fatured.vue'
  import OurProcessHome from './OurProcessHome.vue'
  import ClientsReviews from './ClientsReviews.vue'
  import MediaCenter from './MediaCenter.vue'
  import FaqsSection from './FaqsSection.vue'
  // const { useGeneralStore } = await import('@/stores/general')
  
  // const store = useGeneralStore()
  // onMounted(() => {
  //   store.fetchHomeData()
  // })
  
  // const generalData = computed(() => store.home)
  // const faqsData = computed(() => store.faqs)

  
// Use standalone loader only — no Pinia/store in this path (fixes "Cannot access 'ut' before initialization")
const { data: homePayload } = await useAsyncData('home', () =>
  import('~/data/home').then((m) => m.loadHomeData())
)

// After mount, sync payload into Pinia (dynamic import so store not in initial page bundle)
onMounted(async () => {
  const payload = homePayload.value
  if (!payload?.home) return
  const { useGeneralStore } = await import('@/stores/general')
  const store = useGeneralStore()
  store.home = payload.home
  store.faqs = payload.faqs ?? store.faqs
})

const generalData = computed(() => homePayload.value?.home ?? null)
const faqsData = computed(() => homePayload.value?.faqs ?? null)

  </script>
  