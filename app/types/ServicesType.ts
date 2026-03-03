export interface ServicesType {
  title: string;
  description: string;
  statistics: ServicesCardStatistics[];
  gallery: string[];
}

export interface ServicesCardStatistics {
  title: string;
  subtitle: string;
}
