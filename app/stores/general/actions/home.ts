// stores/general/home.actions.ts
import type { GeneralState } from "~/types/general.state";
import { createApiClient } from "~/utils/api";

export const homeActions = {
  async fetchHomeData(this: GeneralState & any) {
    try {
      this.isLoadingData = true;
      await Promise.all([this.fetchHome(), this.fetchFaqsData()]);
    } finally {
      this.isLoadingData = false;
    }
  },

  async fetchHome(this: GeneralState & any) {
    if (this.home && this.home !== null) return;
    try {
      this.isLoadingData = true;
      const config = useRuntimeConfig();
      const api = createApiClient(config.public.apiBase as string);
      const res = await api.get<Record<string, any>>("/home");
      this.home = res.data ?? null;
    } catch (_e) {
      this.home = null;
    } finally {
      this.isLoadingData = false;
    }
  },
};
