<template>
  <div class="ontime-card">
    <div>
      <NuxtImg :src="iconCard" alt="icon" width="116" height="116" format="webp" quality="85" />
    </div>
    <div>
      <h3 class="text-primary-gold text-[1.5rem] font-700 max-w-[95%]">
        {{ title }}
      </h3>
      <p class="text-primary-text text-[1rem] font-400">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">

export default {
    name: 'OntimeCard',
    props: {
        title: {
            type: String,
            default: () => ''
        },
        description: {
            type: String,
            default: () => ''
        },
        iconCard: {
            type: String,
            default: () => ''
        }
    }
}
</script>

<style scoped>
@property --deg {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
}
.ontime-card {
    background-color: #1c1c1c;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 32px;
    border-radius: 20px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    position: relative;
}
.ontime-card::before,
.ontime-card::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: conic-gradient(
        from var(--deg) at center,
        #40404080,
        #B580214D,
        #B580214D);
    border-radius: inherit;
    z-index: -2;
    padding: 2px;
    animation: autoRotate 2s linear infinite;
}
.ontime-card:after {
    filter: blur(10px);
}
@keyframes autoRotate {
    to {
        --deg: 360deg;
    }
}
</style>
