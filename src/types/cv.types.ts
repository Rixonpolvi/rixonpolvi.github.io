export interface Link {
  website: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface PersonalInfo {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  title: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  links: Link;
}

export interface Technology {
  name: string;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: Technology[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate: string;
  credentialId: string;
  credentialURL: string;
}

export interface Metadata {
  version: string;
  lastUpdated: string;
  format: string;
}

export interface Skills {
  description: string;
  categories: {
    name: string;
    items: string[];
  }[];
  languages: {
    name: string;
    proficiency: string;
  }[];
  certifications: Certification[];
}

export interface CVData {
  $schema?: string;
  personal: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  metadata: Metadata;
}
