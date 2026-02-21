// stores/general/state.ts
import type { GeneralState } from "~/types/general.state.ts";

export const state = (): GeneralState => ({
  home: null,
  faqs: null,
  isLoadingData: false,
});
