// stores/general/faqs.actions.ts
import type { GeneralState } from "~/types/general.state";
import { createApiClient } from "~/utils/api";

export const faqsActions = {
  async fetchFaqsData(this: GeneralState & any) {
    if (this.faqs && this.faqs !== null) return;
    try {
      this.isLoadingData = true;
      const config = useRuntimeConfig();
      const api = createApiClient(config.public.apiBase as string);
      const res = await api.get<Record<string, any>>("/faqs");
      this.faqs = res.data ?? null;
    } catch (_e) {
      this.faqs = null;
    } finally {
      this.isLoadingData = false;
    }
  },
};
