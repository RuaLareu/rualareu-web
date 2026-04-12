export interface ServiceArea {
  title: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  areas: ServiceArea[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}
