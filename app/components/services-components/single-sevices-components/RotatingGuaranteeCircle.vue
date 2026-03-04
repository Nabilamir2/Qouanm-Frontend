<template>
  <div class="absolute right-[8%] bottom-[-90px] w-[178px] h-[178px] flex items-center justify-center">
    <div class="w-full h-full rounded-full flex items-center justify-center bg-primary-gold">
      <!-- circular text -->
      <svg
        class="quality-circle-text"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="qualityCirclePath"
            d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
          />
        </defs>
        <text class="quality-circle-text-inner">
          <textPath xlink:href="#qualityCirclePath">
            100% Guaranteed Standards · 100% Guaranteed Standards ·
          </textPath>
        </text>
      </svg>

      <!-- center logo -->
      <div class="relative w-[66px] h-[62px] rounded-full">
        <NuxtImg
          src="/images/logo-white.png"
          alt="Qouanm logo"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.quality-circle-text {
  position: absolute;
  animation: quality-rotate 12s linear infinite;
}

.quality-circle-text-inner {
  font-size: 12px;
  letter-spacing: 2px;
  fill: black;
}

@keyframes quality-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

