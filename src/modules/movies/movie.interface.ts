export type TReview = {
  email: string;
  ratting: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  reviews: [TReview];
  slug: string;
  viewCount: number;
  isDeleted: boolean;
};
