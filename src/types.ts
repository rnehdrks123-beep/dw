export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  result: string;
}

export interface Review {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
}
