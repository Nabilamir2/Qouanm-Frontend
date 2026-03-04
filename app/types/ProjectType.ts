export interface ProjectType {
  id: number;
  image: string;
  logo: string;
  title: string;
  description: string;
  statistics: { title: string; icon: string }[];
  slug: string;
  excerpt: string;
  rooms_design: string;
  furniture_units: string;
  weeks: string;
}
