const SERVICES_DATA = {
  services: {
    label: "Our Services",
    title: "Complete Interior Solutions",
    subtitle:
      "Integrated services covering design, in-house manufacturing, and execution — delivered with precision and reliable timelines.",
    servicesCards: [
      {
        title: "Clusters (Compounds & Residential Developments)",
        description:
          "For compounds and large residential projects, we provide integrated interior design and furnishing services tailored to bedrooms, living areas, kitchens, and outdoor spaces — delivered with accuracy, consistency, and controlled timelines..",
        statistics: [
          { title: "Residential Spaces Furnished", icon: "+200" },
          { title: "Furniture Units Manufactured", icon: "+5,000" },
        ],
        image: ["/images/deleted/services-one.png"],
      },
      {
        title: "Interior Design & 3D Visualization",
        description:
          "Our design team develops well-planned interior concepts supported by realistic 3D visuals, allowing clients to review, approve, and move forward with confidence — while aligning design decisions with execution schedules.",
        statistics: [
          { title: "Interior Concepts Designed", icon: "+300" },
          { title: "Realistic 3D Visualization", icon: "100%" },
        ],
        image: ["/images/deleted/services-one.png"],
      },
      {
        title: "Kitchens & Wardrobes",
        description:
          "We design and manufacture custom kitchens and wardrobes that combine functionality, durability, and refined finishes, produced in our factory and installed with accuracy and speed.",
        statistics: [
          { title: "Concept Designs", icon: "+500" },
          { title: "RTailored to Your Space", icon: "100%" },
        ],
        image: [
          "/images/deleted/services-one.png",
          "/images/deleted/services-two.png",
        ],
      },
      {
        title: "Hospitality Interiors & Hotel Furniture",
        description:
          "We design, manufacture, and deliver complete interior solutions for hotels and hospitality spaces — from guestrooms and lobbies to reception areas and public zones — ensuring consistent quality, efficient timelines, and seamless execution at scale.",
        statistics: [
          { title: "Rooms Finishing ", icon: "+200" },
          { title: "Furniture Units Manufactured", icon: "+5,000" },
          { title: "Luxury Loopy Designs", icon: "100%" },
        ],
        image: [
          "/images/deleted/services-one.png",
          "/images/deleted/services-two.png",
        ],
      },
    ],
  },
} as const;

/** Load home + faqs data without touching Pinia (avoids circular dependency / TDZ). */
export async function loadServicesData(): Promise<{
  services: typeof SERVICES_DATA;
}> {
  await new Promise((r) => setTimeout(r, 0));
  return { services: SERVICES_DATA };
}
