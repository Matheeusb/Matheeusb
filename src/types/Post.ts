export interface Post {
  id: string;
  title: {
    'pt-BR': string;
    'en-US': string;
  };
  slug: string;
  date: string;
  readTime: number;
  content: {
    'pt-BR': string;
    'en-US': string;
  };
  excerpt: {
    'pt-BR': string;
    'en-US': string;
  };
  coverImage?: string;
  tags: string[];
}