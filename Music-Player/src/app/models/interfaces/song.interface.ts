export interface Song {
  id?: number;
  name: string;
  videoUrl: string;
  description: string;
  author: Author;
  duration: string;
  datePublished: string;
}

export interface Author {
  name: string;
  lastName: string;
}
