// stores/general/home.actions.ts
import type { GeneralState } from "~/types/general.state";
import { createApiClient } from "~/utils/api";

export const aboutActions = {
  async fetchAbout(this: GeneralState & any) {
    if (this.about && this.about !== null) return;
    try {
      this.isLoadingData = true;
      const api = createApiClient();
      const res = await api.get<Record<string, any>>("/about");
      this.about = res.data ?? null;
    } catch (_e) {
      this.about = null;
    } finally {
      this.isLoadingData = false;
    }
  },
};
