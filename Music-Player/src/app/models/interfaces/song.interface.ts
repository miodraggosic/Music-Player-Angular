export interface Song {
  name: string;
  url: string;
  description: string;
  author: Author;
  duration: string;
  datePublished: string;
}

export interface Author {
  name: string;
  lastName: string;
}
