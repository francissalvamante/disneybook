export interface CharacterData {
  _id: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  updatedAt: string;
}

export interface GetCharacterResponse {
  info: {
    count: number;
    totalPages: number;
    previousPage: number;
    nextPage: number;
  },
  data: CharacterData;
}