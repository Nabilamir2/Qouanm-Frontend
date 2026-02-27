// stores/general/index.ts
import { defineStore } from "pinia";
import { state } from "./state";
import { homeActions } from "./actions/home";
import { faqsActions } from "./actions/faqs";
import { aboutActions } from "./actions/about";

export const useGeneralStore = defineStore("general", {
  state,
  actions: {
    ...homeActions,
    ...faqsActions,
    ...aboutActions,
  },
});
