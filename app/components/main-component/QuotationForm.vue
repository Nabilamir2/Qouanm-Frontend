<template>
  <div class="flex items-center justify-center w-full">
    <div
      class="z-10 w-full max-w-[540px] rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.75)] px-5 py-9"
    >
      <header class="mb-8 text-center">
        <h3 class="text-[2.5rem] leading-tight font-bold text-primary-gold mb-2">
          {{ title }}
        </h3>
        <p class="text-[1rem] text-secondary-text px-8 text-center font-medium">
          {{ description }}
        </p>
      </header>

      <form class="space-y-4" @submit.prevent>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="quotation-label">First Name</label>
            <input
              type="text"
              placeholder="Mark"
              class="quotation-input"
            />
          </div>
          <div>
            <label class="quotation-label">Last Name</label>
            <input
              type="text"
              placeholder="Amir"
              class="quotation-input"
            />
          </div>
        </div>

        <div>
          <label class="quotation-label">Email Address</label>
          <input
            type="email"
            placeholder="mark.amir@hilto…"
            class="quotation-input"
          />
        </div>

        <div>
          <label class="quotation-label">Phone Number</label>
          <div
            class="flex items-stretch gap-2 rounded-[12px] bg-white border border-[#E0E0E0] px-3 py-1.5 focus-within:border-primary-gold focus-within:ring-1 focus-within:ring-primary-gold/60 transition"
          >
            <div class="flex items-center gap-1.5 pr-3 border-r border-[#E0E0E0] text-sm text-[#5E5E5E]">
              <span class="text-lg">🇪🇬</span>
              <span class="opacity-80">+20</span>
            </div>
            <input
              type="tel"
              placeholder="01001234567"
              class="flex-1 bg-transparent border-none outline-none text-sm text-[#1E1D1D] placeholder:text-[#9B9B9B]"
            />
          </div>
        </div>

        <div>
          <div class="flex items-baseline justify-between mb-1">
            <label class="quotation-label">Leave Your Message</label>
            <span class="text-[11px] text-[#9B9B9B]">(Optional)</span>
          </div>
          <textarea
            rows="4"
            placeholder="I would like to ask about the…"
            class="quotation-input resize-none py-3"
          />
        </div>
        <div>
          <MainButton ButtonText="Submit" paddingX="w-full flex justify-center" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import MainButton from '../ui/buttons/MainButton.vue';
export default {
  name: 'QuotationForm',
  components: {
    MainButton
  },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    }
  }
}
</script>

<style scoped>
.quotation-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #5e5e5e;
  margin-bottom: 0.25rem;
}

.quotation-input {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: #1e1d1d;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.quotation-input::placeholder {
  color: #9b9b9b;
}

.quotation-input:focus {
  border-color: #c4a265; /* primary gold */
  box-shadow: 0 0 0 1px rgba(196, 162, 101, 0.6);
}
</style>
