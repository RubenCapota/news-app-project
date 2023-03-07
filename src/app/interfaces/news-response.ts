
export interface Source {
  id?: string|null;
  name: string;
}

export interface ArticlesEntity {
  source: Source;
  author?: string |null;
  title: string|null;
  description: string|null;
  url: string|null;
  urlToImage?: string|null;
  publishedAt: string;
  content?: string|null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles?: ArticlesEntity[] |null ;
}
