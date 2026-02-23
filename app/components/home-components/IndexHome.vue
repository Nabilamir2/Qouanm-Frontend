<template>
    <div>
      <HeroSection
        :title="generalData?.hero?.title"
        :subtitle="generalData?.hero?.subtitle"
        :description="generalData?.hero?.description"
        :image="generalData?.hero?.image"
        :listOfFeatures="generalData?.hero?.listOfFeatures"
      />   
      <Solutions
        :title="generalData?.solutions?.title"
        :subtitle="generalData?.solutions?.subtitle"
        :image="generalData?.solutions?.image"
      />
      <Ontime
        :title="generalData?.ontime?.title"
        :subtitle="generalData?.ontime?.subtitle"
        :listOfFeatures="generalData?.ontime?.listOfFeatures"
      />
      <Services
        :title="generalData?.services?.title"
        :subtitle="generalData?.services?.subtitle"
        :services="generalData?.services?.servicesCards"
      />
      <SupportClients :ourClients="generalData?.partners?.logos" />
      <MeetCEO
        :image="generalData?.seo?.image"
        :title="generalData?.seo?.title"
        :listParagraphs="generalData?.seo?.listParagraphs"
        :signature="generalData?.seo?.signature"
        :logo="generalData?.seo?.logo"
      />  
      <Fatured
        :title="generalData?.featured?.title"
        :subtitle="generalData?.featured?.subtitle"
        :projects="generalData?.featured?.projects"
      />
      <OurProcess
        :title="generalData?.ourProcess?.title"
        :subtitle="generalData?.ourProcess?.subtitle"
        :image="generalData?.ourProcess?.image"
        :steps="generalData?.ourProcess?.steps"
      />
      <ClientsReviews
        :title="generalData?.clientsReviews?.title"
        :subtitle="generalData?.clientsReviews?.subtitle"
        :image="generalData?.clientsReviews?.image"
        :reviews="generalData?.clientsReviews?.reviews"
      />
      <MediaCenter
        :title="generalData?.mediaCenter?.title"
        :subtitle="generalData?.mediaCenter?.subtitle"
        :posts="generalData?.mediaCenter?.posts"
      />
      <FaqsSection
        :title="faqsData?.title"
        :label="faqsData?.label"
        :faqs="faqsData?.faqs"
      />
    </div>
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
  import OurProcess from './OurProcess.vue'
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
  