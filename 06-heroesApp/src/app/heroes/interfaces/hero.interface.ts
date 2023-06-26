export interface Hero {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearanche: string;
  characters: string;
}
export enum Publisher {
  DCComics = 'DC Comics',
  MarbelComics = 'Marbel Comics',
}
