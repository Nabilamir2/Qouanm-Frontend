/**
 * Standalone home page data. No Pinia/store imports — used by index.vue useAsyncData
 * to avoid circular dependency and "Cannot access 'ut' before initialization".
 */

const ABOUT_DATA = {
  aboutQouanm: {
    label: "About Qouanm",
    title: "From Design to Delivery",
    subtitle:
      "We are a full-service interior partner with a unique combination of creative design expertise and in-house manufacturing capabilities.",
    listFeatures: [
      "/images/deleted/features-1.png",
      "/images/deleted/features-2.png",
      "/images/deleted/features-3.png",
      "/images/deleted/features-4.png",
      "/images/deleted/features-5.png",
      "/images/deleted/features-6.png",
      "/images/deleted/features-7.png",
    ],
  },
} as const;

/** Load home + faqs data without touching Pinia (avoids circular dependency / TDZ). */
export async function loadAboutData(): Promise<{
  about: typeof ABOUT_DATA;
}> {
  await new Promise((r) => setTimeout(r, 0));
  return { about: ABOUT_DATA };
}
