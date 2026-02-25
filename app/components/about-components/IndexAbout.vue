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
      <NumbersAbout :number="generalData?.designedToDeliver?.number" />
      <DesignedToDeliverAbout
        :designedToDeliver="generalData?.designedToDeliver"
      />
    </div>
    <OurMission
      :label="generalData?.ourMission?.label"
      :description="generalData?.ourMission?.description"
      :image="generalData?.ourMission?.image"
    />
    <div class="relative">
      <div class="sticky top-0 -z-10">
        <OurVision
          :label="generalData?.ourVision?.label"
          :description="generalData?.ourVision?.description"
          :image="generalData?.ourVision?.image"
        />
      </div>
      <OurTeam
        :title="generalData?.ourTeam?.title"
        :subTitle="generalData?.ourTeam?.subTitle"
        :teams="generalData?.ourTeam?.teams"
      />
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import AboutQouanm from './AboutQouanm.vue'
  import OurStory from './OurStory.vue'
  import NumbersAbout from './NumbersAbout.vue'
  import DesignedToDeliverAbout from './DesignedToDeliverAbout.vue'
  import OurMission from './OurMission.vue'
  import OurVision from './OurVision.vue'
  import OurTeam from './OurTeam.vue'

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
