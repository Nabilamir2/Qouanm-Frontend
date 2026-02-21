<template>
  <section class="bg-primary-gold-10 flex justify-center items-center">
    <div class="container py-20">
      <div class="lg:w-[62%] w-full mx-auto bg-primary-1 py-20 rounded-[20px] px-[92px] flex flex-col relative">
        <div>
          <h2 class="text-primary-gold lg:text-[3.25rem] text-[2.5rem] font-bold">
            Get Your Consultation Now
          </h2>
          <p
            class="text-white lg:text-[1rem] text-[0.875rem] font-medium leading-normal px-3 text-center"
          >
            Connect with our team to explore your project requirements and
            discover how our integrated approach ensures reliable timelines and
            refined results.
          </p>
        </div>
        <div class="pt-8 flex justify-center">
            <MainButton
            :ButtonText="`Let's Talk`"
            :paddingX="'px-[52px] py-[17.5px]'"
            />
        </div>
        <div class="absolute bottom-0 right-0 bg-[#DBB571] w-[244px] h-[244px] rounded-full blur-[134px] opacity-20">
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import MainButton from '../ui/buttons/MainButton.vue';
export default {
    components: {
        MainButton,
    }
}
</script>