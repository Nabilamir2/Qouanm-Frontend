<template>
  <div
    class="w-full h-full bg-white rounded-[1.125rem] shadow-md border border-primary-gold-30 p-4.5 flex flex-col gap-2"
  >
    <div class="w-full h-70">
      <NuxtImg
        :src="image"
        :alt="`${title} Project Image`"
        class="w-full h-full object-cover rounded-[1.25rem]"
      />
    </div>
    <div>
      <div class="flex items-center py-4">
        <div class="pr-4">
          <NuxtImg
            :src="logo"
            :alt="`${title} Project Logo`"
            width="96"
            height="96"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="border-l border-primary-gold/20 pl-4">
          <p class="text-black text-[1.5rem] font-bold">
            {{ title }}
          </p>
        </div>
      </div>
      <div class="flex items-center border-y border-primary-gold/20 ">
            <div class="py-4 flex items-center justify-between w-full">
                    <div class="flex flex-col w-full"> 
                      <p class="text-primary-gold text-[1.25rem] font-600"> {{ roomsDesign }}</p> 
                      <p class="text-secondary-text text-[1rem] font-400">Rooms Design</p>
                    </div>   
                    <div class="flex flex-col w-full px-4.5 border-x border-primary-gold/20"> 
                      <p class="text-primary-gold text-[1.25rem] font-600"> {{ furnitureUnits }}</p> 
                      <p class="text-secondary-text text-[1rem] font-400">Furniture Units</p>
                    </div>
                    <div class="flex flex-col w-full pl-4.5"> 
                      <p class="text-primary-gold text-[1.25rem] font-600">  {{ weeks }}</p> 
                      <p class="text-secondary-text text-[1rem] font-400">Weeks</p>
                    </div>
            </div>
      </div>
    </div>
    <div>
        <TextButton ButtonText="View Project" textColor="text-primary-gold" />
    </div>
  </div>
</template>

<script lang="ts">
import TextButton from '@/components/ui/buttons/TextButton.vue';

export default {
    name: 'ServiceProjectCard',
    components: {
        TextButton
    },
    props: {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        roomsDesign: {
            type: String,
            required: true
        },
        furnitureUnits: {
            type: String,
            required: true
        },
        weeks: {
            type: String,
            required: true
        }
    }
}
</script>
