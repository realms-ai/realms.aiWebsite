interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: string;
  };
}
interface Slug {
  _type: "slug";
  current: string;
}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: Slug;
  mainImage: Image;
  profileImage: Image;
  email: string;
  address: string;
  linkedinAddress: string;
  backgroundInfo: string;
  socials: Social[];
  expandedBackgroundInfo: string;
}
export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}
export interface Project extends SanityBody {
  _type: "project";
  title: string;

  image: Image;
  summary: string;
  technologies: Skill[];
  linkToBuild: string;
  keyFeatures: string[];
  role: string;
}
export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  technologies: Skill[];
  points: string[];
  linkToCompany: string;
}
export interface User extends SanityBody {
  _type: "user";
  name: string;
  experience: Experience[];
  project: Project[];
  skill: Skill[];
  social: Social[];
  pageInfo: PageInfo[];
}
