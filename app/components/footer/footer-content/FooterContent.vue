<template>
  <div class="bg-primary-1 grid grid-cols-7 px-20 py-15">
    <div class="lg:col-span-2 col-span-7 flex flex-col items-start justify-between lg:pb-0 pb-20">
        <div>
            <img src="/images/logo-white.png" alt="logo" width="238" height="52" />
        </div>
        <div><JoinOurNewsletter /></div>
    </div>
    <div class="lg:col-span-1 flex items-center justify-center">
        <div class="w-px h-full bg-dark-grey " />
    </div>
    <div class="lg:col-span-4 col-span-7">
      <div class="grid grid-cols-3 gap-[80px]">
        <div v-for="(item, index) in footerItems" :key="index" class="col-span-1 flex flex-col items-start justify-start">
          <p class="text-primary-gold text-2xl font-bold py-2">{{ item.title }}</p>
          <div class="w-10 h-px bg-primary-gold my-4" />
          <ul class="flex flex-col gap-[28px]">
            <li
              v-for="(link , ind) in item.links"
              :key="ind"
              class="text-grey-text-10 text-[1rem] font-normal"
            >
              <!-- If has href → NuxtLink -->
              <NuxtLink
                v-if="link.href"
                :to="link.href"
                class="flex items-center gap-2 hover:text-primary-gold transition-colors"
              >
                <Icon
                  v-if="link.icon"
                  :name="link.icon"
                  class="text-primary-gold shrink-0"
                  size="24"
                />
                <span class="leading-none">
                  {{ link.name }}
                  <div class="text-primary-gold text-[1rem] font-normal pt-2" v-if="link.href === 'Get Direction'">
                    Get Direction
                  </div> 
                </span>
              </NuxtLink>

              <!-- If no href → normal text -->
              <div
                v-else
                class="flex items-center gap-2"
              >
                <Icon
                  v-if="link.icon"
                  :name="link.icon"
                  class="text-primary-gold shrink-0"
                  size="20"
                />
                <span class="leading-none">
                  {{ link.name }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JoinOurNewsletter from './JoinOurNewsletter.vue'
export default {
    components: {
        JoinOurNewsletter
    },
    data() {
        return {
            footerItems: [
              {
                title: 'Company',
                links: [
                  { name: 'Home', href: '/' },
                  { name: 'Our Factory', href: '/our-factory' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Our Projects', href: '/our-projects' },
                  { name: 'Media Center', href: '/media-center' }
                ]
              },
              {
                title: 'Services',
                links: [
                  { name: 'Hospitality Interiors & Hotel Furniture'},
                  { name: 'Clusters (Compounds & Residential Developments)'},
                  { name: 'Interior Design & 3D Visualization'},
                  { name: 'Turnkey Execution (Design & Build)' },
                  { name: 'Custom Furniture & Woodworking' },
                  { name: 'Kitchens & Wardrobes' },
                  { name: 'Corporate & Office Design' }
                ]
              },
              {
                title: 'Support',
                links: [
                  { name: 'Contact Us' , href: '/contact-us' },
                  { name: 'FAQ' , href: '/faqs' },
                  { name: 'Capital Mall,5th Settlement, New cairo, Cairo, Egypt', href: '/' , icon: 'mdi:map-marker' },
                  { name: '011 14510453' , icon: 'mdi:phone' },
                  { name: 'info@qounam.com' , icon: 'mdi:email' },
                ]
              }
            ]
        }
    }
}
</script>