// stores/general/types.ts
export interface GeneralState {
  home: Record<string, any> | null;
  faqs: Record<string, any> | null;
  isLoadingData: boolean;
}
