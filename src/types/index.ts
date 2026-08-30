export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  timeAgo: string;
  reviewCount: number;
  content: string;
  tags: string[];
  ownerResponse?: {
    timeAgo: string;
    text: string;
  };
  likes: number;
  verifiedStudent?: boolean;
  courseTaken?: string;
}

export interface Course {
  id: string;
  title: string;
  marathiTitle?: string;
  targetGroup: string;
  category: 'foundation' | 'boards' | 'iit_jee' | 'neet_cet';
  description: string;
  features: string[];
  subjects: string[];
  duration: string;
  batchTimings: string;
  highlights: string[];
  curriculum: {
    term: string;
    topics: string[];
  }[];
  badge?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  subjects: string[];
  bio: string;
  image: string;
  tagline: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'classroom' | 'testing' | 'faculty' | 'events';
  imageUrl: string;
  description: string;
}

export interface LeadFormData {
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  studentClass: string;
  targetExam: string;
  preferredBatch: string;
  message?: string;
}
