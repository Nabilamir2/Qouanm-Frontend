/**
 * Standalone home page data. No Pinia/store imports — used by index.vue useAsyncData
 * to avoid circular dependency and "Cannot access 'ut' before initialization".
 */

import { number } from "motion-v";

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
  ourStory: {
    image: "/images/deleted/meet-ceo.jpg",
    label: "Who We Are",
    title: "Our Story",
    listParagraphs: [
      " Qouanm Interiors & Furniture is a comprehensive interior solutions provider specializing in hospitality, commercial, and residential projects across the region.",
      "What sets us apart is our integrated approach: we combine innovative interior design with in-house furniture manufacturing and professional project execution. This means our clients work with one trusted partner from concept to completion.",
      "Our factory is the foundation of our quality promise. With complete control over the manufacturing process, we ensure every piece of furniture meets international standards while maintaining competitive timelines and pricing.",
    ],
  },
  designedToDeliver: {
    number: [
      {
        number: "+10K",
        text: "Custom Furniture Pieces Produced",
      },
      {
        number: "+300",
        text: "Interior Projects Delivered",
      },
      {
        number: "20+",
        text: "Specialized Expert",
      },
    ],
    designedto: {
      label: "What sets us apart",
      title: "Designed to Deliver. Built to Perform.",
      description:
        "Where design expertise, in-house manufacturing, and expert execution come together under one controlled system.",
    },
    designdLed: {
      title: "Design Led by Real Execution",
      description:
        "Our interior and furniture designers create concepts that are fully aligned with materials, manufacturing methods, and on-site execution turning ideas into buildable, efficient solutions.",
      image: "/images/deleted/design-led.png",
    },
    expertTeams: {
      title: "Expert Teams, One Workflow",
      description:
        "From designers and engineers to factory specialists and site teams, all work within one coordinated process reducing delays and ensuring smooth project delivery.",
      image: "/images/deleted/project-1.png",
      icon: "/images/deleted/teams.png",
    },
    reliableTimelines: {
      title: "Reliable Timelines, Consistent Quality",
      description:
        "With our integrated system, we deliver projects on time and within budget, minimizing delays and ensuring consistent quality across all phases of the project.",
      image: "/images/deleted/project-2.png",
      icon: "/images/deleted/clock.png",
    },
  },
} as const;

/** Load home + faqs data without touching Pinia (avoids circular dependency / TDZ). */
export async function loadAboutData(): Promise<{
  about: typeof ABOUT_DATA;
}> {
  await new Promise((r) => setTimeout(r, 0));
  return { about: ABOUT_DATA };
}
