<template>
    <div>
        <AboutQouanm 
        :label="generalData?.aboutQouanm?.label"
        :title="generalData?.aboutQouanm?.title"
        :subtitle="generalData?.aboutQouanm?.subtitle"
        :listFeatures="generalData?.aboutQouanm?.listFeatures"
        />
        <div class="relative">
        <div class="sticky top-0 -z-10">
        <OurStory 
        :image="generalData?.ourStory?.image"
        :label="generalData?.ourStory?.label"
        :title="generalData?.ourStory?.title"
        :listParagraphs="generalData?.ourStory?.listParagraphs"
        />
      </div>
        <Numbers 
         :number="generalData?.designedToDeliver?.number"
        />
        <DesignedToDeliver 
        :designedto="generalData?.designedToDeliver?.designedto"
        :designdLed="generalData?.designedToDeliver?.designdLed"
        :expertTeams="generalData?.designedToDeliver?.expertTeams"
        :reliableTimelines="generalData?.designedToDeliver?.reliableTimelines"
        />
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue'
  import AboutQouanm from './AboutQouanm.vue'
  import OurStory from './OurStory.vue'
  import Numbers from './Numbers.vue'
  import DesignedToDeliver from './DesignedToDeliver.vue'
  const { useGeneralStore } = await import('@/stores/general')
  
  // const store = useGeneralStore()
  // onMounted(() => {
  //   store.fetchAboutData()
  // })
  
  // const generalData = computed(() => store.about)

  
// Use standalone loader only — no Pinia/store in this path (fixes "Cannot access 'ut' before initialization")
const { data: aboutPayload } = await useAsyncData('about', () =>
  import('~/data/about').then((m) => m.loadAboutData())
)

// After mount, sync payload into Pinia (dynamic import so store not in initial page bundle)
onMounted(async () => {
  const payload = aboutPayload.value
  if (!payload?.about) return
  const store = useGeneralStore()
  store.about = payload.about
})

const generalData = computed(() => aboutPayload.value?.about ?? null)

  </script>
  